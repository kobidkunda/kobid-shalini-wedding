import { NextRequest, NextResponse } from "next/server";
import { readFaceRegistrationImage } from "@/lib/face-registration-store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(_req: NextRequest, { params }: { params: { filename: string } }) {
  try {
    const image = await readFaceRegistrationImage(params.filename);

    if (!image) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    return new NextResponse(image.data, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "private, max-age=300",
        "X-Face-Registration-Id": image.record.id,
      },
    });
  } catch {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }
}
