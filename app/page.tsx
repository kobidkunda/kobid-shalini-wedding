"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import {
  CalendarDays,
  ChevronDown,
  Clock3,
  Expand,
  Gem,
  Heart,
  Languages,
  MapPin,
  Music,
  Music2,
  Pause,
  Play,
  Send,
  Sparkles,
  UsersRound,
  Volume2,
  VolumeX
} from "lucide-react";
import { galleryImages, GalleryImage, Locale, locales, memoriesMomentsImages, weddingContent } from "@/data/weddingContent";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
  }
};

const revealContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const letterReveal = {
  hidden: { opacity: 0, y: 28, rotateX: -18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
  }
};

const glowTap = { scale: 0.97 };

const DISABLE_INITIAL_INVITATION_POPUP = false;

const dustParticles = [
  { left: 7, top: 22, delay: 0.2, duration: 8, drift: 12, size: 3 },
  { left: 14, top: 78, delay: 1.4, duration: 9, drift: -10, size: 2 },
  { left: 23, top: 38, delay: 2.2, duration: 7, drift: 16, size: 3 },
  { left: 31, top: 66, delay: 0.8, duration: 10, drift: -14, size: 2 },
  { left: 39, top: 18, delay: 3.1, duration: 8, drift: 10, size: 2 },
  { left: 48, top: 86, delay: 1.1, duration: 11, drift: -18, size: 3 },
  { left: 57, top: 44, delay: 2.8, duration: 9, drift: 13, size: 2 },
  { left: 66, top: 72, delay: 0.5, duration: 8, drift: -12, size: 3 },
  { left: 74, top: 26, delay: 1.9, duration: 10, drift: 15, size: 2 },
  { left: 82, top: 58, delay: 3.7, duration: 9, drift: -11, size: 3 },
  { left: 91, top: 34, delay: 1.6, duration: 8, drift: 10, size: 2 },
  { left: 96, top: 82, delay: 2.5, duration: 11, drift: -16, size: 3 }
];

const petals = [
  { left: 8, delay: 0, duration: 15, drift: 26 },
  { left: 19, delay: 3, duration: 18, drift: -18 },
  { left: 34, delay: 6, duration: 16, drift: 22 },
  { left: 51, delay: 2, duration: 19, drift: -25 },
  { left: 68, delay: 5, duration: 17, drift: 18 },
  { left: 84, delay: 8, duration: 20, drift: -20 }
];

function formatNumber(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function useCountdown(targetISO: string) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const target = new Date(targetISO).getTime();
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTime({ days, hours, minutes, seconds });
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, [targetISO]);

  return time;
}

function getIcon(name: string) {
  const props = { size: 30, strokeWidth: 1.4 };
  switch (name) {
    case "rings":
      return <Gem {...props} />;
    case "calendar":
      return <CalendarDays {...props} />;
    case "clock":
      return <Clock3 {...props} />;
    case "pin":
      return <MapPin {...props} />;
    case "heart":
      return <Heart {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}

function FloatingParticles() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 28 }).map((_, i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties} />
      ))}
    </div>
  );
}

function CinematicLight() {
  return (
    <div className="cinematic-light" aria-hidden="true">
      <motion.div
        className="sun-bloom"
        animate={{ opacity: [0.36, 0.68, 0.36], scale: [1, 1.045, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="sun-rays"
        animate={{ x: [-42, 28, -42], opacity: [0.16, 0.34, 0.16] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="mist-glow"
        animate={{ opacity: [0.12, 0.24, 0.12], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function GoldenDust({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className={`golden-dust ${className}`} aria-hidden="true">
      {dustParticles.map((p, i) => (
        <motion.span
          key={`${p.left}-${p.top}`}
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={reduceMotion ? { opacity: 0.35 } : {
            y: [0, -58, 0],
            x: [0, p.drift, 0],
            opacity: [0, 0.78, 0],
            scale: [0.55, 1.2, 0.55]
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function FallingPetals() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div className="petal-layer" aria-hidden="true">
      {petals.map((p) => (
        <motion.img
          key={`${p.left}-${p.delay}`}
          src="/vectors/petal.svg"
          alt=""
          style={{ left: `${p.left}%` }}
          animate={{
            y: ["-8vh", "112vh"],
            x: [0, p.drift, -p.drift * 0.6, p.drift * 0.35],
            rotate: [0, 78, 162, 244],
            opacity: [0, 0.48, 0.34, 0]
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
}

function ParallaxGalleryItem({ src, index, caption }: { src: string; index: number; caption?: string }) {
  return (
    <motion.figure
      className={`gallery-item item-${index + 1}`}
      variants={fadeUp}
      whileHover={{ y: -5, scale: 1.012 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div className="gallery-item-image" whileHover={{ scale: 1.065 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
        <Image src={src} alt={`Wedding gallery placeholder ${index + 1}`} fill sizes="(max-width: 760px) 50vw, 22vw" />
      </motion.div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </motion.figure>
  );
}

function LanguageSwitch({ locale, setLocale, compact = false }: { locale: Locale; setLocale: (v: Locale) => void; compact?: boolean }) {
  return (
    <div className={compact ? "language-switch compact" : "language-switch"} aria-label="Language selector">
      <Languages size={16} />
      {locales.map((item) => (
        <button
          key={item.key}
          className={locale === item.key ? "active" : ""}
          onClick={() => setLocale(item.key)}
          type="button"
          title={item.label}
        >
          {item.native}
        </button>
      ))}
    </div>
  );
}

function SectionTitle({ label, title, body }: { label: string; title?: string; body?: string }) {
  const words = title?.split(" ");

  return (
    <motion.div
      className="section-title"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={revealContainer}
    >
      <motion.div variants={fadeUp} className="eyebrow small">
        <Sparkles size={14} /> {label}
      </motion.div>
      {title ? (
        <motion.h2 className="split-title" variants={revealContainer} aria-label={title}>
          {words?.map((word, index) => (
            <motion.span variants={letterReveal} className="split-word" aria-hidden="true" key={`${word}-${index}`}>
              {word}
            </motion.span>
          ))}
        </motion.h2>
      ) : null}
      {body ? <motion.p variants={fadeUp}>{body}</motion.p> : null}
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.35 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

function GalleryModal({ selected, onClose }: { selected: GalleryImage | null; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const modal = (
    <AnimatePresence>
      {selected && (
        <motion.div
          ref={overlayRef}
          className="gallery-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            className="gallery-modal-content"
            layoutId={`gallery-${selected.id}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="gallery-modal-close" onClick={onClose} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <motion.div
              className="gallery-modal-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Image
                src={selected.big}
                alt={selected.caption || "Gallery image"}
                width={1080}
                height={1620}
                sizes="(max-width: 760px) 92vw, 70vw"
              />
            </motion.div>
            {selected.caption && (
              <motion.figcaption initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                {selected.caption}
              </motion.figcaption>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return mounted ? createPortal(modal, document.body) : null;
}

function GalleryCard({ image, index, onClick }: { image: GalleryImage; index: number; onClick: (img: GalleryImage) => void }) {
  return (
    <motion.figure
      className="gallery-card"
      layoutId={`gallery-${image.id}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -10, scale: 1.025, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
      whileTap={glowTap}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(image)}
      style={{ cursor: "pointer" }}
    >
      <div className="gallery-card-image-wrapper">
        <motion.div className="gallery-card-image" whileHover={{ scale: 1.08 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <Image
            src={image.small}
            alt={image.caption || `Wedding memory ${index + 1}`}
            fill
            sizes="(max-width: 768px) 46vw, (max-width: 1024px) 30vw, 25vw"
          />
        </motion.div>
        <div className="gallery-card-overlay">
          <Expand size={24} />
        </div>
        <span className="gallery-card-glint" aria-hidden="true" />
      </div>
    </motion.figure>
  );
}

function TimelineCard({ event, index }: { event: { date: string; day: string; title: string; text: string }; index: number }) {
  const cardRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start 82%", "end 36%"] });
  const lift = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [18, -10]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.55, 0.24]);
  const nodeScale = useTransform(scrollYProgress, [0, 0.45, 1], reduceMotion ? [1, 1, 1] : [0.88, 1.08, 1]);

  return (
    <motion.article
      ref={cardRef}
      className="timeline-card"
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.012 }}
      style={{ y: lift, "--timeline-glow": glow.get() } as any}
    >
      <motion.div className="timeline-node" style={{ scale: nodeScale }}>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </motion.div>
      <div className="timeline-date">
        <b>{event.date}</b>
        <small>{event.day}</small>
      </div>
      <h3>{event.title}</h3>
      <p>{event.text}</p>
    </motion.article>
  );
}

function VideoBackground({ bgScale, bgY }: { bgScale: any; bgY: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState("/video/1_output_1777166813935022_iEqPaVidu.mp4");

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 760;
      const newSrc = isMobile ? "/video/mobile_video_bg.mp4" : "/video/1_output_1777166813935022_iEqPaVidu.mp4";
      setSrc(newSrc);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [src]);

  return (
    <motion.video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      src={src}
      style={{
        scale: bgScale,
        y: bgY,
        objectPosition: "center center",
      }}
    />
  );
}

export default function WeddingInvitationPage() {
  const [locale, setLocale] = useState<Locale>("en");
  const [entered, setEntered] = useState(DISABLE_INITIAL_INVITATION_POPUP);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [rsvpSent, setRsvpSent] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = weddingContent[locale];
  const meta = weddingContent.meta;
  const navLinks = [
    { label: t.nav[0], href: "#home" },
    { label: t.story.label, href: "#story" },
    { label: t.details.label, href: "#details" },
    { label: t.gallery.label, href: "#gallery" },
    { label: t.nav[t.nav.length - 1], href: "#rsvp" }
  ];
  const countdown = useCountdown(meta.dateISO);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0]);

  const countdownItems = useMemo(
    () => [
      { value: countdown.days, label: t.countdown.units[0] },
      { value: countdown.hours, label: t.countdown.units[1] },
      { value: countdown.minutes, label: t.countdown.units[2] },
      { value: countdown.seconds, label: t.countdown.units[3] }
    ],
    [countdown, t.countdown.units]
  );

  const enterInvitation = async () => {
    setEntered(true);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);

    try {
      const docEl = document.documentElement as HTMLElement & { webkitRequestFullscreen?: () => Promise<void> };
      if (docEl.requestFullscreen) await docEl.requestFullscreen();
      else if (docEl.webkitRequestFullscreen) await docEl.webkitRequestFullscreen();
    } catch {
      // Fullscreen is enhancement only. Browser may deny it.
    }

    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.34;
        await audioRef.current.play();
        setAudioPlaying(true);
      }
    } catch {
      setAudioPlaying(false);
    }
  };

  const toggleAudio = async () => {
    if (!audioRef.current) return;
    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
      return;
    }
    try {
      await audioRef.current.play();
      setAudioPlaying(true);
    } catch {
      setAudioPlaying(false);
    }
  };

  const handleRsvp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRsvpSent(true);
  };

  return (
    <main className="site-shell">
      <ScrollProgress />
      <audio ref={audioRef} src="/video/bgsong.mp3" loop preload="auto" />
      <FallingPetals />

      <AnimatePresence>
        {!entered && (
          <motion.section
            className="entry-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, filter: "blur(16px)" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <video className="entry-video" autoPlay muted loop playsInline poster="/images/hero-poster.webp">
              <source src="/video/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="entry-overlay" />
            <motion.div
              className="entry-aurora"
              aria-hidden="true"
              animate={{ x: ["-6%", "5%", "-6%"], opacity: [0.36, 0.58, 0.36] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <FloatingParticles />
            <LanguageSwitch locale={locale} setLocale={setLocale} />

            <motion.div
              className="entry-card"
              initial={{ opacity: 0, y: 34, scale: 0.96, filter: "blur(18px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="entry-orbit"
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />
              <motion.div initial="hidden" animate="show" variants={revealContainer}>
              <motion.div variants={fadeUp} className="entry-monogram">
                <Image src="/images/kobid-shalini_2.png" alt="Kobid and Shalini" width={88} height={88} priority sizes="88px" />
              </motion.div>
              <motion.div variants={fadeUp} className="sacred-lines">
                <span>{t.open.sacred1}</span>
                <span>{t.open.sacred2}</span>
              </motion.div>
              <motion.p variants={fadeUp} className="eyebrow">
                {t.open.subtitle}
              </motion.p>
              <motion.h1 variants={fadeUp}>{t.open.title}</motion.h1>
              <motion.p variants={fadeUp} className="entry-summary">
                {t.open.summary}
              </motion.p>
              <motion.div variants={fadeUp} className="entry-meta">
                <span><CalendarDays size={15} /> {t.open.date}</span>
                <span><MapPin size={15} /> {t.open.venue}</span>
              </motion.div>
              <motion.div variants={fadeUp} className="entry-vow-line" aria-hidden="true">
                <span />
                <Heart size={14} fill="currentColor" />
                <span />
              </motion.div>
              <motion.button variants={fadeUp} className="gold-button big motion-cta" whileHover={{ y: -4, scale: 1.025 }} whileTap={glowTap} onClick={enterInvitation} type="button">
                <Expand size={18} /> {t.open.button}
              </motion.button>
              <motion.p variants={fadeUp} className="entry-hint">
                <Music2 size={14} /> {t.open.hint}
              </motion.p>
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {entered && (
          <motion.div className="actual-site" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
            <div className="fixed-controls">
              <LanguageSwitch locale={locale} setLocale={setLocale} compact />
              <button className="audio-button" onClick={toggleAudio} type="button">
                {audioPlaying ? <Volume2 size={17} /> : <VolumeX size={17} />}
                {audioPlaying ? t.controls.audioOn : t.controls.audioOff}
              </button>
            </div>

      <section id="home" className="hero-section" ref={heroRef}>
        <VideoBackground bgScale={bgScale} bgY={bgY} />
              <div className="hero-gradients" />
              <CinematicLight />
              <FloatingParticles />
              <GoldenDust className="hero-dust" />
              <motion.img
                src="/images/floral-corner.svg"
                alt=""
                className="hero-floral-wind hero-floral-left"
                animate={{ rotate: [-1.2, 1.2, -1.2], y: [0, -6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              />


      <header className="navbar">
        <a className="logo" href="#home" aria-label="Home">
          <Image src="/images/kobid-shalini_2.png" alt="Kobid & Shalini" className="logo-img" width={80} height={80} priority sizes="80px" />
        </a>
                <nav>
                  {navLinks.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
                </nav>
                <motion.a href="#rsvp" className="nav-rsvp motion-cta" whileHover={{ y: -3, scale: 1.03 }} whileTap={glowTap}>RSVP Now <Heart size={14} /></motion.a>
              </header>

              <div className="hero-inner">
                <motion.div className="hero-copy" style={{ y: textY, opacity: textOpacity }} initial="hidden" animate="show" variants={revealContainer}>
                  <motion.div variants={fadeUp} className="sacred-top">
                    <span>{t.invitation.sacred1}</span>
                    <span>{t.invitation.sacred2}</span>
                  </motion.div>
                  <motion.p variants={fadeUp} className="eyebrow">
                    {t.hero.eyebrow}
                  </motion.p>
                  <motion.h1 variants={fadeUp} className="hero-title">
                    <span className="title-mask">
                      <motion.span
                        className="title-line"
                        initial={{ y: 118, opacity: 0, filter: "blur(12px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.08, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {t.hero.title1}
                      </motion.span>
                    </span>
                    <motion.em
                      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        textShadow: [
                          "0 0 0px rgba(240,213,142,0)",
                          "0 0 30px rgba(240,213,142,0.58)",
                          "0 0 0px rgba(240,213,142,0)"
                        ]
                      }}
                      transition={{
                        opacity: { duration: 1, delay: 0.38, ease: [0.16, 1, 0.3, 1] },
                        y: { duration: 1, delay: 0.38, ease: [0.16, 1, 0.3, 1] },
                        filter: { duration: 1, delay: 0.38, ease: [0.16, 1, 0.3, 1] },
                        textShadow: { duration: 4.4, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      {t.hero.amp}
                    </motion.em>
                    <span className="title-mask">
                      <motion.span
                        className="title-line"
                        initial={{ y: 118, opacity: 0, filter: "blur(12px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.08, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {t.hero.title2}
                      </motion.span>
                    </span>
                  </motion.h1>
                  <motion.div variants={fadeUp} className="hero-meta">
                    <span><CalendarDays size={17} /> {t.hero.day} · {t.hero.date}</span>
                    <span><Clock3 size={17} /> {t.hero.time}</span>
                    <span><MapPin size={17} /> {t.hero.location}</span>
                  </motion.div>
                  <motion.p variants={fadeUp} className="hero-quote">
                    {t.hero.quote}
                  </motion.p>
                  <motion.div variants={fadeUp} className="hero-actions">
                    <motion.a href="#story" className="gold-button motion-cta" whileHover={{ y: -4, scale: 1.025 }} whileTap={glowTap}>{t.hero.primary}</motion.a>
                    <motion.a href="#rsvp" className="ghost-button motion-cta" whileHover={{ y: -4, scale: 1.025 }} whileTap={glowTap}>{t.hero.secondary} <Heart size={16} /></motion.a>
                  </motion.div>
                </motion.div>

                <motion.div className="hero-visual" initial={{ opacity: 0, x: 60, filter: "blur(12px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ delay: 0.35, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}>
                  <Image
                    src="/images/header/top_header.jpg"
                    alt="Kobid and Shalini cinematic portrait"
                    className="hero-couple-image"
                    width={760}
                    height={1032}
                    priority
                    sizes="(max-width: 1080px) 82vw, 48vw"
                  />
                  <div className="watch-card">
                    <button type="button" aria-label="Play story">
                      <motion.span
                        className="play-pulse"
                        animate={{ scale: [1, 1.45, 1], opacity: [0.55, 0, 0.55] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                      />
                      <Play size={28} fill="currentColor" />
                    </button>
                    <strong>{t.hero.watchTitle}</strong>
                    <span>{t.hero.watchSub}</span>
                    <small>{t.hero.duration}</small>
                  </div>
                </motion.div>
              </div>

              <motion.div className="countdown-bar" initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                <span>{t.countdown.label}</span>
                {countdownItems.map((item, index) => (
                  <div className="countdown-item" key={item.label}>
                    {index > 0 ? <i /> : null}
                    <b>{index === 0 ? item.value : formatNumber(item.value)}</b>
                    <small>{item.label}</small>
                  </div>
                ))}
              </motion.div>
            </section>

            <section id="invitation" className="section invitation-section">
              <motion.div className="invitation-card" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }} variants={revealContainer}>
                <motion.div variants={fadeUp} className="floral-side"><img src="/images/floral.svg" alt="Decorative floral artwork" /></motion.div>
                <motion.div variants={fadeUp} className="invitation-copy">
                  <p className="eyebrow small"><Sparkles size={14} /> {t.invitation.label}</p>
                  <div className="sacred-lines inline">
                    <span>{t.invitation.sacred1}</span>
                    <span>{t.invitation.sacred2}</span>
                  </div>
                  <p>{t.invitation.text}</p>
                  <div className="name-lockup">
                    <strong>{t.invitation.groom}</strong>
                    <em>{t.invitation.weds}</em>
                    <strong>{t.invitation.bride}</strong>
                  </div>
                  <p>{t.invitation.brideDetails}</p>
                  <p className="closing-line">{t.invitation.closing}</p>
                </motion.div>
              </motion.div>
            </section>

            <section id="story" className="section story-section">
              <GoldenDust />
              <div className="story-layout">
                <SectionTitle label={t.story.label} title={t.story.heading} body={t.story.body} />
                <motion.div className="story-cards" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={revealContainer}>
                  {t.story.cards.map((card) => (
                    <motion.article className="story-card" key={card.number} variants={fadeUp} whileHover={{ y: -8, scale: 1.015 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
                      <motion.div className="story-card-image" whileHover={{ scale: 1.08 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                        <Image src={card.image} alt={card.title} fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 33vw, 22vw" />
                      </motion.div>
                      <motion.div className="card-shade" whileHover={{ opacity: 0.86 }} />
                      <motion.span
                        className="card-number"
                        animate={{ textShadow: ["0 0 0px rgba(240,213,142,0)", "0 0 20px rgba(240,213,142,0.42)", "0 0 0px rgba(240,213,142,0)"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {card.number}
                      </motion.span>
                      <span className="card-sheen" />
                      <div>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>

            <section id="timeline" className="section timeline-section">
              <GoldenDust />
              <SectionTitle label={t.timeline.label} title={t.timeline.heading} body={t.timeline.body} />
              <motion.div className="timeline-track" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.24 }} variants={revealContainer}>
                {t.timeline.events.map((event, index) => (
                  <TimelineCard event={event} index={index} key={event.title} />
                ))}
              </motion.div>
            </section>

      <section id="gallery" className="section gallery-section">
        <GoldenDust />
        <SectionTitle label={t.gallery.label} title={t.gallery.heading} body={t.gallery.description} />
        <motion.div className="memories-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={revealContainer}>
          {memoriesMomentsImages.map((image, index) => (
            <GalleryCard image={image} index={index} onClick={setSelectedImage} key={image.id} />
          ))}
        </motion.div>
        <GalleryModal selected={selectedImage} onClose={() => setSelectedImage(null)} />
      </section>

            <section id="details" className="section details-section">
              <SectionTitle label={t.details.label} />
              <motion.div className="details-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={revealContainer}>
                {t.details.cards.map((card) => (
                  <motion.article className="detail-card" variants={fadeUp} key={card.title} whileHover={{ y: -6 }}>
                    <div className="detail-icon">{getIcon(card.icon)}</div>
                    <h3>{card.title}</h3>
                    <p>{card.line1}</p>
                    <span>{card.line2}</span>
                  </motion.article>
                ))}
                <motion.article className="map-card" variants={fadeUp}>
                  <img src="/images/map-placeholder.svg" alt="Map placeholder" />
                  <a href="https://maps.google.com/?q=BIOLASTIC%20Sukantapally%20Ward%20No%2033%20Siliguri" target="_blank" rel="noreferrer">
                    {t.venue.button}
                  </a>
                </motion.article>
              </motion.div>
            </section>

            <section className="section family-section">
              <SectionTitle label={t.family.label} />
              <motion.div className="family-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={revealContainer}>
                <motion.article variants={fadeUp} className="family-card">
                  <UsersRound size={32} />
                  <h3>{t.family.groomTitle}</h3>
                  <p>{t.family.groomText}</p>
                </motion.article>
                <motion.article variants={fadeUp} className="family-card">
                  <Heart size={32} />
                  <h3>{t.family.brideTitle}</h3>
                  <p>{t.family.brideText}</p>
                </motion.article>
              </motion.div>
            </section>

            <section id="rsvp" className="section rsvp-section">
              <GoldenDust />
              <motion.div className="rsvp-card" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={revealContainer}>

                <motion.div variants={fadeUp} className="rsvp-left">
                  <motion.div
                    className="rsvp-flower-bloom"
                    initial={{ opacity: 0, scale: 0.82, rotate: -4 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.div
                      className="rsvp-flower-breath"
                      animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <img src="/images/floral-big.svg" alt="Floral illustration" />
                    </motion.div>
                  </motion.div>
                  <p className="eyebrow small"><Sparkles size={14} /> {t.rsvp.label}</p>
                  <h2>{t.rsvp.heading}</h2>
                  <p>{t.rsvp.description}</p>
                </motion.div>
                <motion.form variants={fadeUp} className="rsvp-form" onSubmit={handleRsvp}>
                  <input placeholder={t.rsvp.fields.name} aria-label={t.rsvp.fields.name} required />
                  <input placeholder={t.rsvp.fields.phone} aria-label={t.rsvp.fields.phone} required />
                  <div className="select-wrap">
                    <select aria-label={t.rsvp.fields.attendance} defaultValue="" required>
                      <option value="" disabled>{t.rsvp.fields.attendance}</option>
                      {t.rsvp.attendanceOptions.map((option) => <option key={option}>{option}</option>)}
                    </select>
                    <ChevronDown size={16} />
                  </div>
                  <div className="select-wrap">
                    <select aria-label={t.rsvp.fields.guests} defaultValue="" required>
                      <option value="" disabled>{t.rsvp.fields.guests}</option>
                      {t.rsvp.guestOptions.map((option) => <option key={option}>{option}</option>)}
                    </select>
                    <ChevronDown size={16} />
                  </div>
                  <textarea placeholder={t.rsvp.fields.message} aria-label={t.rsvp.fields.message} />
                  <button className="gold-button" type="submit"><Send size={16} /> {t.rsvp.button}</button>
                  <AnimatePresence>
                    {rsvpSent ? (
                      <motion.div className="success-toast" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <Heart size={16} fill="currentColor" /> {t.rsvp.success}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.form>
              </motion.div>
            </section>

      <footer className="footer-section">
        <div className="footer-monogram-wrap">
          <Image
            src="/images/kobid-shalini_2.png"
            alt="Kobid & Shalini"
            className="footer-logo-img"
            width={94}
            height={94}
            sizes="94px"
          />
        </div>
              <p>{t.footer.quote}</p>
              <Heart size={18} fill="currentColor" />
              <small>{t.footer.signOff}</small>
              <strong>{t.footer.family}</strong>
              <span>{t.footer.couple}</span>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
