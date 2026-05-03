import { getStore } from "@netlify/blobs";
import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const FACE_DATA_DIR = process.env.FACE_REGISTRATION_DATA_DIR ?? path.join(process.cwd(), "data", "face-registrations");
const FACE_IMAGE_DIR = path.join(FACE_DATA_DIR, "images");
const FACE_DB_PATH = path.join(FACE_DATA_DIR, "face-registrations.sqlite");

export interface FaceRegistrationInput {
  name: string;
  whatsapp: string;
  email: string;
  imageBuffer: Buffer;
}

export interface FaceRegistrationRecord {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  imagePath: string;
  imageFilename: string;
  createdAt: string;
}

interface FaceRegistrationRow {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  image_path: string;
  image_filename: string;
  created_at: string;
}

let db: any = null;

async function ensureFaceDataDirs() {
  await mkdir(FACE_IMAGE_DIR, { recursive: true });
}

function shouldUseNetlifyBlobs() {
  return Boolean(
    process.env.NETLIFY === "true" ||
    process.env.FACE_REGISTRATION_STORAGE === "netlify-blobs" ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.env.LAMBDA_TASK_ROOT
  );
}

function getFaceMetaStore() {
  return getStore("face-registration-meta");
}

function getFaceImageStore() {
  return getStore("face-registration-images");
}

function getDb() {
  if (!db) {
    // Load the native SQLite binding only for local/dev storage. Netlify production
    // uses Blobs because local native binaries cannot be deployed cross-platform.
    const nativeRequire = eval("require") as NodeRequire;
    const Database = nativeRequire("better-sqlite3");
    db = new Database(FACE_DB_PATH);
    db.pragma("journal_mode = WAL");
    db.exec(`
      CREATE TABLE IF NOT EXISTS face_registrations (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        whatsapp TEXT NOT NULL,
        email TEXT NOT NULL,
        image_path TEXT NOT NULL,
        image_filename TEXT NOT NULL,
        created_at TEXT NOT NULL
      );

      CREATE INDEX IF NOT EXISTS idx_face_registrations_created_at
        ON face_registrations(created_at);
    `);
  }

  return db;
}

function cleanContactValue(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function rowToRecord(row: FaceRegistrationRow): FaceRegistrationRecord {
  return {
    id: row.id,
    name: row.name,
    whatsapp: row.whatsapp,
    email: row.email,
    imagePath: row.image_path,
    imageFilename: row.image_filename,
    createdAt: row.created_at,
  };
}

export async function saveFaceRegistration(input: FaceRegistrationInput): Promise<FaceRegistrationRecord> {
  const id = randomUUID();
  const createdAt = new Date().toISOString();
  const imageFilename = `${id}.webp`;

  const record: FaceRegistrationRecord = {
    id,
    name: cleanContactValue(input.name),
    whatsapp: cleanContactValue(input.whatsapp),
    email: cleanContactValue(input.email).toLowerCase(),
    imagePath: shouldUseNetlifyBlobs() ? imageFilename : path.join(FACE_IMAGE_DIR, imageFilename),
    imageFilename,
    createdAt,
  };

  if (shouldUseNetlifyBlobs()) {
    const imageStore = getFaceImageStore();
    const metaStore = getFaceMetaStore();
    const imageData = input.imageBuffer.buffer.slice(
      input.imageBuffer.byteOffset,
      input.imageBuffer.byteOffset + input.imageBuffer.byteLength
    ) as ArrayBuffer;
    await imageStore.set(imageFilename, imageData, { metadata: { contentType: "image/webp" } });
    const list = await listFaceRegistrations();
    await metaStore.set("list", JSON.stringify([record, ...list]));
    return record;
  }

  await ensureFaceDataDirs();
  await writeFile(record.imagePath, input.imageBuffer);

  getDb()
    .prepare(`
      INSERT INTO face_registrations (id, name, whatsapp, email, image_path, image_filename, created_at)
      VALUES (@id, @name, @whatsapp, @email, @imagePath, @imageFilename, @createdAt)
    `)
    .run(record);

  return record;
}

export async function listFaceRegistrations(): Promise<FaceRegistrationRecord[]> {
  if (shouldUseNetlifyBlobs()) {
    const raw = await getFaceMetaStore().get("list", { type: "text" });
    if (!raw) return [];
    return JSON.parse(raw) as FaceRegistrationRecord[];
  }

  await ensureFaceDataDirs();

  const rows = getDb()
    .prepare(`
      SELECT id, name, whatsapp, email, image_path, image_filename, created_at
      FROM face_registrations
      ORDER BY created_at DESC
    `)
    .all() as FaceRegistrationRow[];

  return rows.map(rowToRecord);
}

export async function readFaceRegistrationImage(imageFilename: string) {
  if (!/^[a-f0-9-]+\.webp$/i.test(imageFilename)) {
    return null;
  }

  if (shouldUseNetlifyBlobs()) {
    const registrations = await listFaceRegistrations();
    const record = registrations.find((item) => item.imageFilename === imageFilename) || null;
    if (!record) return null;

    const data = await getFaceImageStore().get(imageFilename, { type: "arrayBuffer" });
    if (!data) return null;

    return {
      record,
      data: Buffer.from(data),
    };
  }

  const rows = getDb()
    .prepare(`
      SELECT id, name, whatsapp, email, image_path, image_filename, created_at
      FROM face_registrations
      WHERE image_filename = ?
      LIMIT 1
    `)
    .all(imageFilename) as FaceRegistrationRow[];

  const record = rows[0] ? rowToRecord(rows[0]) : null;
  if (!record) return null;

  return {
    record,
    data: await readFile(record.imagePath),
  };
}
