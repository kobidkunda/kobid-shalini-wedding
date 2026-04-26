# Kobid & Shalini — Cinematic Wedding Invitation Website

A full static Next.js wedding invitation application with:

- Cinematic entry screen / invitation gate
- Fullscreen open-on-click experience
- Background ambient audio with on/off control
- Hero background video layer
- Framer Motion page, card, and section animations
- English / Hindi / Bengali translation layer
- Countdown to 05 May 2026
- Wedding invitation content
- Story cards
- Curated gallery layout
- Wedding details
- Family details
- Venue map card
- RSVP form UI only, no database/backend
- Local photo-based placeholder assets, local cinematic background video, local placeholder audio

## Run locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Replace placeholder media

Replace these files with your real media while keeping the same filenames, or update the paths in `data/weddingContent.ts` and `app/page.tsx`.

```txt
public/images/hero-couple-photo.webp
public/images/story-1-photo.webp
public/images/story-2-photo.webp
public/images/story-3-photo.webp
public/images/gallery-1-photo.webp ... gallery-7-photo.webp
public/video/hero-bg.mp4
public/audio/ambient.wav
```

## Important note

The RSVP form is intentionally design-only. It does not save to a database. You can later connect it to WhatsApp, Google Sheets, email, or an API.

## Main content file

```txt
data/weddingContent.ts
```

This file contains all English, Hindi, and Bengali text.

## Update notes

This refreshed ZIP uses photo-style cropped assets from the approved final reference image for the hero, story cards, and gallery so the page looks much closer to the selected design rather than generic SVG placeholders.
