import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import { randomUUID } from "crypto";
import { getGalleryStore, getUploadedImages, saveUploadedImages, GalleryMeta } from "@/lib/gallery-store";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const id = randomUUID();
    const galleryStore = getGalleryStore();

    const big = await sharp(buffer)
      .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer();

    const small = await sharp(buffer)
      .resize(400, 400, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 75 })
      .toBuffer();

    const bigAb = big.buffer.slice(big.byteOffset, big.byteOffset + big.byteLength) as ArrayBuffer;
    const smallAb = small.buffer.slice(small.byteOffset, small.byteOffset + small.byteLength) as ArrayBuffer;
    await galleryStore.set(`${id}-big`, bigAb, { metadata: { contentType: "image/webp" } });
    await galleryStore.set(`${id}-small`, smallAb, { metadata: { contentType: "image/webp" } });

    const list = await getUploadedImages();
    const meta: GalleryMeta = {
      id,
      filename: file.name,
      uploadedAt: new Date().toISOString(),
    };
    list.push(meta);
    await saveUploadedImages(list);

    return NextResponse.json({ ok: true, id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
