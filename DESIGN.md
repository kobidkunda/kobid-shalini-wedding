# design.md

## Project
**Wedding Invitation Website — Cinematic Golden Hills Concept**

This document defines the visual system, UX structure, motion language, and implementation guidance for the final website direction based on the selected design.

---

## 1) Creative Direction

### Core Idea
A **cinematic, emotional, premium wedding invitation website** that feels like a romantic film poster blended with a high-end editorial landing page.

### Overall Mood
- Warm
- Intimate
- Elegant
- Dreamy
- Nature-rich
- Premium
- Emotional
- Festive but refined

### Visual Story
The site should feel like:
- golden-hour light in misty hills
- romantic tea-garden / forest ambience
- a wedding microsite with cinematic storytelling
- luxurious but not overly traditional
- highly shareable and “wow” on first view

---

## 2) Design Keywords

- cinematic
- editorial
- luminous
- golden glow
- premium
- soft depth
- elegant serif
- emotional storytelling
- immersive
- romantic landscape
- polished invitation experience

---

## 3) Color Palette

### Primary Palette
```css
--bg-deep-forest: #132016;
--bg-forest-soft: #1C2A1E;
--bg-panel: rgba(24, 34, 24, 0.78);
--gold-primary: #D8B06A;
--gold-soft: #E5C98D;
--gold-bright: #F0D58E;
--cream-text: #F3E7CF;
--muted-cream: #D7C7A7;
--olive-glow: #586443;
--line-soft: rgba(232, 204, 145, 0.28);
--white-soft: rgba(255,255,255,0.88);
```

### Supporting Accent Colors
```css
--sunlight: #F6D37A;
--mist-gold: rgba(244, 208, 127, 0.22);
--shadow-deep: rgba(0, 0, 0, 0.28);
--panel-highlight: rgba(255, 228, 168, 0.08);
```

### Usage
- **Deep forest** for page background and section base
- **Gold** for headings, borders, buttons, highlights, dividers, iconography
- **Cream** for body text and supporting UI copy
- **Soft olive/mist gold** for subtle glows and overlays

---

## 4) Typography

### Heading Typeface
Use a refined high-contrast serif for romance and luxury.

**Recommended options:**
- Cormorant Garamond
- Playfair Display
- Canela (if licensed)
- EB Garamond
- DM Serif Display

### Supporting / UI Typeface
Use a clean modern sans for navigation, labels, buttons, and metadata.

**Recommended options:**
- Inter
- Manrope
- Satoshi
- Neue Montreal
- DM Sans

### Type Hierarchy
#### Hero Names
- Large serif display
- Thin-to-medium weight
- High line-height elegance
- Strong presence
- Use gold/cream mix

#### Section Titles
- Small uppercase or refined title case
- Letter spacing slightly expanded
- Gold tone

#### Body Copy
- Soft cream
- Comfortable reading size
- Elegant spacing
- Slight opacity reduction for sophistication

#### Accent / Quote Text
- Italic serif or script-style serif emphasis
- Used sparingly

---

## 5) Layout Principles

### Page Style
Single-page storytelling wedding website.

### Layout Width
- Max content width: `1280px`
- Comfortable content grid: `1200px`
- Large outer breathing space on desktop
- Strong vertical rhythm

### Spacing System
Suggested spacing scale:
```txt
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 120
```

### Border Radius
- Large cards: `24px`
- Medium cards: `18px`
- Small controls / buttons: `14px`
- Pills: `999px`

### Container Style
Every content section should feel like it belongs to the same visual world:
- soft rounded corners
- subtle gold outline
- faint inner glow
- transparent / translucent dark overlay
- soft blur only when helpful, but not “glassy”
- cinematic depth over trendy glassmorphism

---

## 6) Background System

### Hero Background
A warm, cinematic tea-garden / forest-hill image with:
- mist
- soft sun rays
- glowing particles
- depth fade
- subject-focused composition

### Global Background Treatment
Use a **layered atmosphere**:
1. base dark forest gradient
2. blurred nature imagery
3. floating bokeh particles
4. gold mist / ambient bloom
5. subtle vignette around edges

### Important
The background must feel **alive** but never distracting.
It should support the content, not overpower readability.

---

## 7) UI Language

### Core UI Character
The interface should feel:
- soft
- polished
- luxurious
- warm
- tactile
- cinematic

### Card Style
Each card should use:
- dark translucent background
- thin gold border
- soft highlight edge
- subtle shadow
- slight inner glow
- hover lift on desktop

### Buttons
#### Primary Button
- warm gold fill
- dark text
- rounded pill
- subtle glow
- premium hover shimmer

#### Secondary Button
- transparent / dark background
- gold border
- gold text
- hover: soft gold tint

### Icons
Use elegant line icons:
- calendar
- pin/location
- rings
- champagne glasses
- dress
- play button
- arrow
- heart

Use thin elegant strokes, not heavy filled iconography.

---

## 8) Motion Language

### Motion Style
Motion should feel:
- graceful
- slow-premium
- filmic
- floating
- romantic

### Motion Rules
- no harsh snapping
- no excessive bouncing
- smooth reveal and fade transitions
- use gentle parallax
- use light bloom animation
- subtle mouse-based drift is allowed
- keep transitions emotionally rich

### Suggested Motion Types
#### Hero
- sunlight shimmer
- floating particles
- background depth movement
- slow fade-in of title
- CTA reveal after headline

#### Cards
- fade-up
- soft scale-in
- tiny hover lift
- subtle glow intensify on hover

#### Gallery
- image hover zoom 1.02–1.05
- soft shadow deepen
- optional pan effect

#### Countdown
- smooth ticking transition
- luminous number emphasis

#### RSVP Section
- soft reveal
- focus glow on input fields
- button glow on hover

---

## 9) Website Structure

## 9.1 Hero Section
**Purpose:** immediate emotional impact.

### Contents
- monogram logo
- top navigation
- RSVP button
- couple names
- date and location
- romantic subtitle / quote
- primary CTA: “Open Invitation”
- secondary CTA: “RSVP”
- story/watch card on right
- countdown strip below hero

### Notes
- Couple image should dominate the emotional center
- The typography must remain readable over the background
- Use warm sunlight rays in the hero for strong first impression

---

## 9.2 Countdown Strip
**Purpose:** anticipation.

### Contents
- label: “We’re getting married in”
- days
- hours
- minutes
- seconds

### Style
- full-width rounded panel
- balanced spacing
- elegant separators
- floral gold detail in corners

---

## 9.3 Our Story
**Purpose:** storytelling.

### Structure
- intro copy on left
- 3 story cards on right

### Story Cards
1. **The First Hello**
2. **The Adventure**
3. **Forever Begins**

Each card contains:
- image
- numeric index
- title
- short description
- arrow / interaction cue

---

## 9.4 Curated Gallery
**Purpose:** visual showcase.

### Structure
- mixed-size image mosaic
- editorial grid composition
- one featured center image
- “View Full Gallery” CTA

### Image Types
- standing couple portrait
- candid close-up
- walking shots
- tea-garden scene
- painting / creative scene
- seated portrait

### Notes
Gallery should feel curated, not like random thumbnails.

---

## 9.5 Wedding Details
**Purpose:** clarity and logistics.

### Cards
- Ceremony
- Reception
- Dress Code
- Venue
- Map card

### Style
- equal-height cards
- elegant iconography
- structured labels
- strong contrast
- map card with clear action button

---

## 9.6 RSVP Section
**Purpose:** conversion / guest action.

### Left Side
- floral illustration / decorative visual
- headline
- supporting line

### Right Side
Form fields:
- Your Name
- Email Address
- Will you attend?
- Number of Guests
- Leave a Message

CTA:
- Send Your RSVP

### Notes
This section must feel inviting and calm, not overly form-like or corporate.

---

## 9.7 Footer
**Purpose:** elegant closing.

### Contents
- romantic line / closing quote
- “With love” sign-off
- couple names
- monogram mark

---

## 10) Content Tone

### Tone of Voice
- warm
- heartfelt
- concise
- poetic but clear
- elegant
- non-cheesy

### Writing Style
Use short emotionally resonant lines.

### Example Copy Style
- “Two souls. One journey. A forever kind of love.”
- “Every love story is beautiful, but ours is my favorite.”
- “Will you join us on our special day?”
- “Your presence will make our celebration complete.”

---

## 11) Decorative Language

### Decorative Motifs
Use sparingly:
- floral line art
- foliage in corners
- botanical accents
- gold divider lines
- subtle sparkles
- tiny particles
- elegant ornamental flourishes

### Avoid
- overly crowded ornamentation
- heavy traditional motifs everywhere
- loud color contrast
- excessive shadow stacks
- tacky wedding clipart

---

## 12) Responsive Behavior

## Desktop
- full cinematic composition
- 2-column hero
- storytelling cards in rows
- gallery mosaic
- detail cards in horizontal layout

## Tablet
- simplify widths
- reduce hero text size
- stack secondary elements
- keep image focus strong

## Mobile
- hero becomes stacked
- monogram + navigation simplified to hamburger / drawer
- full-width CTAs
- countdown becomes 2x2 or swipeable
- story cards become carousel
- gallery becomes swipeable or 2-column masonry
- detail cards stack vertically
- RSVP form is single-column

### Mobile Priorities
1. readability
2. fast loading
3. emotional impact
4. clean CTA visibility
5. strong image presentation

---

## 13) Nuxt / Frontend Implementation Guidance

### Stack
- Nuxt 3
- Tailwind CSS
- Framer Motion equivalent for Vue / Motion One / GSAP
- VueUse
- Swiper (if needed)
- Lenis or smooth-scroll library
- Lightbox for gallery
- Image optimization via Nuxt Image

### Suggested Component Breakdown
```txt
/components
  Navbar.vue
  HeroSection.vue
  StoryWatchCard.vue
  CountdownBar.vue
  SectionHeader.vue
  StoryCards.vue
  GalleryMosaic.vue
  DetailCards.vue
  VenueMapCard.vue
  RSVPForm.vue
  FooterSection.vue
  FloatingParticles.vue
  SunRaysOverlay.vue
```

### Suggested Pages
```txt
/pages
  index.vue
```

### Suggested Data Structure
```ts
const weddingMeta = {
  bride: "Meera",
  groom: "Aarav",
  date: "12 December 2026",
  location: "Darjeeling Hills",
}

const storySteps = [
  {
    id: "01",
    title: "The First Hello",
    text: "A chance meeting that changed everything.",
    image: "/images/story-1.jpg"
  },
  {
    id: "02",
    title: "The Adventure",
    text: "Traveling together, growing together.",
    image: "/images/story-2.jpg"
  },
  {
    id: "03",
    title: "Forever Begins",
    text: "Now we invite you to celebrate the start of forever.",
    image: "/images/story-3.jpg"
  }
]
```

---

## 14) Animation Guidelines for Dev

### Entrance Animations
- hero title fade-up: 0.8s
- subtitle fade: 0.6s
- CTA reveal: 0.6s stagger
- countdown strip rise/fade: 0.7s
- story cards stagger: 0.12s interval
- gallery items stagger on scroll

### Hover Behaviors
- buttons: glow + slight lift
- story cards: scale 1.015
- gallery cards: image zoom + border glow
- map button: subtle pulse
- form inputs: focus ring gold

### Background Effects
- animated particles with low opacity
- soft moving light bloom
- optional masked sun-ray layer in hero

---

## 15) Accessibility

### Requirements
- Ensure text contrast remains readable
- Avoid placing body text directly on bright image areas
- Buttons must have visible focus states
- Form fields must be clearly labeled
- Motion should respect reduced-motion preferences
- Decorative particles must not interfere with usability

---

## 16) Performance Considerations

- Use optimized WebP/AVIF images
- Lazy-load gallery images
- Keep hero background compressed but high quality
- Avoid too many heavy blur effects
- Use CSS gradients and lightweight overlays instead of large effect layers where possible
- Defer non-critical motion scripts

---

## 17) What Makes This Design Special

This concept is strong because it combines:
- emotional visual storytelling
- cinematic lighting
- premium typography
- refined UI composition
- clear wedding information
- strong RSVP conversion
- warmth instead of trend-chasing gimmicks

It feels like a **wedding film invitation experience**, not just a normal wedding website.

---

## 18) Final Creative Checklist

### Must Have
- [ ] cinematic golden hero
- [ ] elegant serif typography
- [ ] premium dark-gold UI
- [ ] immersive romantic mood
- [ ] polished story cards
- [ ] refined gallery composition
- [ ] clear details section
- [ ] high-converting RSVP form
- [ ] responsive mobile experience
- [ ] subtle particles and sunlight depth

### Must Avoid
- [ ] generic template feeling
- [ ] overly glassy UI
- [ ] cluttered decorations
- [ ] bright neon colors
- [ ] too much text
- [ ] stock / corporate feel
- [ ] hard shadows and aggressive motion

---

## 19) One-Line Summary

**Build a cinematic, golden, emotionally rich wedding invitation website that feels like a luxury love story unfolding in the hills.**
