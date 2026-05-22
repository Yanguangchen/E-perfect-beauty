# E-Perfect Beauty — Project Context

## Overview
A marketing website for **E-Perfect Beauty** (E Perfect Eyebrow Studio), a Singapore-based beauty studio specializing in natural-looking embroidery and facial care. The site features a glassmorphic/neumorphic design, an interactive hero section with auto-rotating service pills, and a blog powered by Firebase.

## Core Features
- **Hero Section:** Four auto-rotating service pills (Embroidery, Anti-wrinkle, Face lifting, Facials) linked to `Assets/hero/*.mp4` videos.
- **Service Categories:** Detailed sections for Embroidery (Brows, Lips, Eyeliner), Anti-wrinkle treatments, Korean Misty Eyebrow, Face Lifting, and various Facial treatments.
- **Pricing:** A dedicated `pricing.html` page with a TOC and anchor links to specific treatment categories. Pricing is generally "Quote on WhatsApp" to encourage personal consultation.
- **Trust & Social Proof:** A Google reviews carousel and a "Why Trust Us" section highlighting natural results and personal mapping.
- **Blog:** A Firestore-backed blog system with a read-only view (`blog.html`) and an editor interface (`admin.html`) secured via Google Sign-In.
- **Booking:** Primary CTA is WhatsApp (+65 8778 7867) for personal advice and booking.

## Tech Stack
- **Frontend:** Vanilla HTML5, CSS3, and JavaScript.
- **Design:** CSS-only glassmorphism, neumorphic cards, and CSS animations.
- **Backend:** Firebase (Firestore for blog posts, Firebase Auth for the admin editor).
- **Fonts:** Google Sans (headings and body).
- **Assets:** MP4 videos for hero backgrounds, JPG/JPEG for service and profile images.

## Site Structure
| Page | Description |
|------|-------------|
| `index.html` | Home page with hero, services overview, reviews, meet Evelyn, FAQ, and map. |
| `pricing.html` | Full treatment menu with anchor links (`#embroidery`, `#anti-wrinkle`, etc.). |
| `about-us.html` | Profile of lead technician Evelyn and her approach. |
| `media.html` | Gallery/video content. |
| `blog.html` | Public blog feed. |
| `admin.html` | Restricted blog editor (requires allowlisted Google UID). |
| `contact.html` | Contact form and studio location details. |
| `whitening-treatment.html` | Dedicated landing page for the needle-free whitening service. |
| `service-trust.html` | Deep dive into why clients trust the studio's methods. |

## Key Anchors & IDs
- **Home:** `#home`, `#services`, `#reviews`, `#faq`, `#visit`.
- **Pricing:** `#embroidery`, `#anti-wrinkle`, `#korean-misty-eyebrow`, `#face-lifting`, `#facials`.
- **Services:** `#service-eyebrow-embroidery`, `#service-lip-embroidery`, `#service-eyeliner-embroidery`, etc.

## Conventions
- **Naming:** Kebab-case for classes and IDs (e.g., `service-card`, `btn-primary`).
- **Tone:** Professional, reassuring, and focused on "natural" and "personalized" care.
- **PWA:** Managed via `manifest.json` for a standalone mobile experience.
