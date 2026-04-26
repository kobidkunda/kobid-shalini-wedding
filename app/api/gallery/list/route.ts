import { NextResponse } from "next/server";
import { getUploadedImages } from "@/lib/gallery-store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const list = await getUploadedImages();
    return NextResponse.json({ images: list });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
