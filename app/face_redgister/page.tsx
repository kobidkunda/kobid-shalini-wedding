"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Camera, CheckCircle2, ImagePlus, Mail, Send, Sparkles, Upload, UserRound, Video, X } from "lucide-react";

type SubmitState = "idle" | "saving" | "success" | "error";

const fieldReveal = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function FaceRegisterPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [cameraOn, setCameraOn] = useState(false);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!photoFile) {
      setPreviewUrl("");
      return;
    }

    const nextPreview = URL.createObjectURL(photoFile);
    setPreviewUrl(nextPreview);
    return () => URL.revokeObjectURL(nextPreview);
  }, [photoFile]);

  useEffect(() => {
    return () => stopCamera();
  }, []);

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setCameraOn(false);
  };

  const startCamera = async () => {
    setMessage("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 1280 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setCameraOn(true);
    } catch {
      setStatus("error");
      setMessage("Camera access was blocked. Please allow camera permission or upload a clear front-facing photo.");
    }
  };

  const capturePhoto = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const width = video.videoWidth || 1080;
    const height = video.videoHeight || 1080;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, width, height);
    canvas.toBlob((blob) => {
      if (!blob) return;
      setPhotoFile(new File([blob], `face-capture-${Date.now()}.jpg`, { type: "image/jpeg" }));
      stopCamera();
    }, "image/jpeg", 0.92);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setStatus("idle");
    setMessage("");
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!photoFile) {
      setStatus("error");
      setMessage("Please upload or capture one clear front-facing photo before submitting.");
      return;
    }

    const payload = new FormData(form);
    payload.set("photo", photoFile);
    setStatus("saving");
    setMessage("");

    try {
      const response = await fetch("/api/face-register", { method: "POST", body: payload });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to save your face registration.");
      }

      form.reset();
      setPhotoFile(null);
      setStatus("success");
      setMessage("Face registered. After the event, matching photos can be shared with you by email or WhatsApp.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Unable to save your face registration.");
    }
  };

  return (
    <main className="face-register-page">
      <div className="face-register-bg" aria-hidden="true" />
      <Link className="face-back-link" href="/">
        <ArrowLeft size={17} /> Back to invitation
      </Link>

      <motion.section
        className="face-register-hero"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      >
        <motion.div className="face-register-copy" variants={fieldReveal}>
          <p className="eyebrow small"><Sparkles size={14} /> Smart Photo Delivery</p>
          <h1>Register your face for the wedding gallery.</h1>
          <p>
            Upload one clear front-angle photo now. Later, when wedding images are processed,
            the photos that include your face can be sent to you easily over email or WhatsApp.
          </p>
          <div className="face-purpose-card">
            <CheckCircle2 size={20} />
            <span>No searching through hundreds of photos. Your memories can find you.</span>
          </div>
        </motion.div>

        <motion.form className="face-register-card" onSubmit={submit} variants={fieldReveal}>
          <div className="face-photo-panel">
            <div className="face-preview">
              {previewUrl ? (
                <>
                  <img src={previewUrl} alt="Selected face registration preview" />
                  <button type="button" className="face-clear-photo" onClick={() => setPhotoFile(null)} aria-label="Remove selected photo">
                    <X size={16} />
                  </button>
                </>
              ) : cameraOn ? (
                <video ref={videoRef} playsInline muted />
              ) : (
                <div className="face-empty-preview">
                  <UserRound size={54} />
                  <strong>Clear front face</strong>
                  <span>Good light, no sunglasses, one person only</span>
                </div>
              )}
            </div>

            <canvas ref={canvasRef} className="face-capture-canvas" aria-hidden="true" />

            <div className="face-photo-actions">
              <label className="face-action-btn">
                <Upload size={17} />
                Upload photo
                <input type="file" accept="image/*" onChange={handleFileChange} />
              </label>
              {cameraOn ? (
                <button className="face-action-btn primary" type="button" onClick={capturePhoto}>
                  <Camera size={17} /> Take photo
                </button>
              ) : (
                <button className="face-action-btn" type="button" onClick={startCamera}>
                  <Video size={17} /> Use camera
                </button>
              )}
            </div>
          </div>

          <div className="face-fields">
            <label>
              <span><UserRound size={15} /> Full name</span>
              <input name="name" placeholder="Your name" required />
            </label>
            <label>
              <span><Send size={15} /> WhatsApp number</span>
              <input name="whatsapp" placeholder="+91 98765 43210" inputMode="tel" required />
            </label>
            <label>
              <span><Mail size={15} /> Email address</span>
              <input name="email" placeholder="you@example.com" type="email" required />
            </label>
          </div>

          <button className="face-submit-btn" disabled={status === "saving"} type="submit">
            {status === "saving" ? "Saving..." : "Register my face"}
            <ImagePlus size={18} />
          </button>

          <AnimatePresence>
            {message ? (
              <motion.div
                className={status === "error" ? "face-form-message error" : "face-form-message success"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {message}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.form>
      </motion.section>
    </main>
  );
}

