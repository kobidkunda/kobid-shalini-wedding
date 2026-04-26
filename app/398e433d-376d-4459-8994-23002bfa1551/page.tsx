"use client";

import { useEffect, useRef, useState } from "react";
import { Trash2, Upload } from "lucide-react";

interface UploadedImage {
  id: string;
  filename: string;
  uploadedAt: string;
}

export default function GalleryAdmin() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const loadImages = () => {
    fetch("/api/gallery/list")
      .then((r) => r.json())
      .then((data) => setImages(data.images || []))
      .catch(() => {});
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("image", file);
      const res = await fetch("/api/gallery/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.ok) loadImages();
    } catch {}
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this photo?")) return;
    try {
      await fetch(`/api/gallery/${id}`, { method: "DELETE" });
      setImages((prev) => prev.filter((img) => img.id !== id));
    } catch {}
  };

  return (
    <div style={{ minHeight: "100vh", background: "#07100A", color: "#fff8d0", fontFamily: "system-ui, sans-serif", padding: "40px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8, color: "#d4af37" }}>Gallery Manager</h1>
        <p style={{ opacity: 0.6, marginBottom: 32, fontSize: 14 }}>Upload and manage gallery photos. Images auto-optimize to WebP.</p>

        <div style={{ marginBottom: 40 }}>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleUpload} hidden id="admin-upload" />
          <label
            htmlFor="admin-upload"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              background: uploading ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.12)",
              border: "1px solid rgba(212,175,55,0.35)",
              borderRadius: 999,
              color: "#d4af37",
              fontSize: 15,
              cursor: uploading ? "wait" : "pointer",
              transition: "background 0.25s",
            }}
          >
            <Upload size={18} />
            <span>{uploading ? "Uploading..." : "Upload Photo"}</span>
          </label>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
          {images.map((img) => (
            <div
              key={img.id}
              style={{
                position: "relative",
                borderRadius: 12,
                overflow: "hidden",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={`/api/gallery/${img.id}?size=small`}
                alt={img.filename}
                style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 12, opacity: 0.5, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 120 }}>
                  {img.filename}
                </span>
                <button
                  onClick={() => handleDelete(img.id)}
                  style={{
                    background: "rgba(220,40,40,0.15)",
                    border: "1px solid rgba(220,40,40,0.3)",
                    borderRadius: 8,
                    color: "#f66",
                    cursor: "pointer",
                    padding: "6px 8px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <p style={{ opacity: 0.4, textAlign: "center", marginTop: 60, fontSize: 15 }}>No photos uploaded yet.</p>
        )}

        <p style={{ opacity: 0.25, marginTop: 60, fontSize: 12, textAlign: "center" }}>
          Uploaded photos appear in the gallery on the main page after existing photos.
        </p>
      </div>
    </div>
  );
}
