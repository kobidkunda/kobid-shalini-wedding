import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import { listFaceRegistrations, saveFaceRegistration } from "@/lib/face-registration-store";
import { sendFaceRegistrationWelcome } from "@/lib/whatsapp-welcome";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_IMAGE_SIZE = 8 * 1024 * 1024;

function getRequestOrigin(req: NextRequest) {
  const forwardedProto = req.headers.get("x-forwarded-proto");
  const forwardedHost = req.headers.get("x-forwarded-host");

  if (forwardedHost) {
    return `${forwardedProto || "https"}://${forwardedHost}`;
  }

  return req.nextUrl.origin;
}

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function toPublicRegistration(req: NextRequest, record: Awaited<ReturnType<typeof listFaceRegistrations>>[number]) {
  const origin = getRequestOrigin(req);

  return {
    id: record.id,
    name: record.name,
    whatsapp: record.whatsapp,
    email: record.email,
    imageFilename: record.imageFilename,
    imageUrl: `${origin}/api/face-register/images/${record.imageFilename}`,
    createdAt: record.createdAt,
  };
}

export async function GET(req: NextRequest) {
  try {
    const registrations = await listFaceRegistrations();
    return NextResponse.json({
      ok: true,
      count: registrations.length,
      registrations: registrations.map((record) => toPublicRegistration(req, record)),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unable to list face registrations.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = readText(formData, "name");
    const whatsapp = readText(formData, "whatsapp");
    const email = readText(formData, "email");
    const photo = formData.get("photo");

    if (!name || !whatsapp || !email) {
      return NextResponse.json({ error: "Name, WhatsApp, and email are required." }, { status: 400 });
    }

    if (!(photo instanceof File)) {
      return NextResponse.json({ error: "Please upload or capture a clear front-facing photo." }, { status: 400 });
    }

    if (!photo.type.startsWith("image/")) {
      return NextResponse.json({ error: "The face photo must be an image file." }, { status: 400 });
    }

    if (photo.size > MAX_IMAGE_SIZE) {
      return NextResponse.json({ error: "Please upload an image smaller than 8 MB." }, { status: 400 });
    }

    const originalBuffer = Buffer.from(await photo.arrayBuffer());
    const imageBuffer = await sharp(originalBuffer)
      .rotate()
      .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 86 })
      .toBuffer();

    const record = await saveFaceRegistration({ name, whatsapp, email, imageBuffer });
    const whatsappWelcome = await sendFaceRegistrationWelcome({
      name: record.name,
      whatsapp: record.whatsapp,
      email: record.email,
    });

    return NextResponse.json({
      ok: true,
      registration: toPublicRegistration(req, record),
      whatsappWelcome,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unable to save face registration.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
