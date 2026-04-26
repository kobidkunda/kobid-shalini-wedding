import { NextRequest, NextResponse } from "next/server";
import { getGalleryStore, getUploadedImages, saveUploadedImages } from "@/lib/gallery-store";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const size = req.nextUrl.searchParams.get("size") === "small" ? "small" : "big";
    const key = `${id}-${size}`;
    const galleryStore = getGalleryStore();

    const data = await galleryStore.get(key, { type: "arrayBuffer" });
    if (!data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return new NextResponse(data, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const galleryStore = getGalleryStore();

    await galleryStore.delete(`${id}-big`);
    await galleryStore.delete(`${id}-small`);

    const list = await getUploadedImages();
    const filtered = list.filter((img) => img.id !== id);
    await saveUploadedImages(filtered);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
