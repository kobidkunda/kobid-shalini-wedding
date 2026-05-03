import { getStore } from "@netlify/blobs";

function isMissingNetlifyBlobsConfig(err: unknown) {
  return err instanceof Error && err.message.includes("environment has not been configured to use Netlify Blobs");
}

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
  try {
    const metaStore = getMetaStore();
    const raw = await metaStore.get("list", { type: "text" });
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    if (isMissingNetlifyBlobsConfig(err)) return [];
    throw err;
  }
}

export async function saveUploadedImages(list: GalleryMeta[]) {
  try {
    const metaStore = getMetaStore();
    await metaStore.set("list", JSON.stringify(list));
  } catch (err) {
    if (isMissingNetlifyBlobsConfig(err)) return;
    throw err;
  }
}

export { getGalleryStore };
