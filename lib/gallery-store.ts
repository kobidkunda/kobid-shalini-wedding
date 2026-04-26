import { getStore } from "@netlify/blobs";

function getGalleryStore() {
  return getStore("gallery-images");
}

function getMetaStore() {
  return getStore("gallery-meta");
}

export interface GalleryMeta {
  id: string;
  filename: string;
  uploadedAt: string;
}

export async function getUploadedImages(): Promise<GalleryMeta[]> {
  const metaStore = getMetaStore();
  const raw = await metaStore.get("list", { type: "text" });
  if (!raw) return [];
  return JSON.parse(raw);
}

export async function saveUploadedImages(list: GalleryMeta[]) {
  const metaStore = getMetaStore();
  await metaStore.set("list", JSON.stringify(list));
}

export { getGalleryStore };
