# Project Design System

## Visual Style
The design follows a **Glassmorphic-Neumorphic Hybrid** aesthetic:
- **Glassmorphism:** Used for navigation bars, hero cards, and modal panels (`backdrop-filter: blur(20px)`).
- **Neumorphism:** Soft shadows and subtle gradients on service cards and buttons to create depth.
- **Blobs:** Large, blurred background blobs (`.blob.one`, `.blob.two`, `.blob.three`) create a dynamic, modern atmosphere.

## Color Palette
Defined as CSS variables in `styles.css`:
- **Primary/Accent:** Soft pink/mauve (`#D99BB3`) and deep charcoal/mauve for dark mode (`#4A3A40`).
- **Surface:** Glassy white (`rgba(255, 255, 255, 0.7)`) or dark semi-transparent layers.
- **Text:** High contrast for accessibility, utilizing CSS variables for theme-aware coloring.

## Typography
- **Primary Font:** Google Sans (hosted via Google Fonts).
- **Hierarchy:** Large, bold headings for clarity; airy line-heights for body text to maintain a "calm" reading experience.

## Components
- **Navigation:** Sticky glass navbar with a mobile drawer.
- **Buttons:**
  - `.btn-primary`: Solid background, high visibility.
  - `.btn-secondary`: Outlined/glassy for secondary actions.
- **Service Cards:** Feature a "sheen" hover effect and glassmorphic content overlays.
- **Floating Cards:** Interactive cards in the hero section that "bob" and react to mouse movement.

## Motion & Interaction
- **Transitions:** Standardized via `--motion-duration` (300ms) and `--motion-ease`.
- **Animations:** `fadeUp`, `navReveal`, `waterBob`, and `grid-glow` pulsing.
- **Interactivity:**
  - Hero service switcher with auto-rotation (5000ms).
  - Parallax/3D tilt effect on the hero visual stack.
  - Horizontal scrolling reviews carousel.

## Responsive Design
- **Breakpoints:**
  - `980px`: Desktop to Tablet/Mobile transition.
  - `640px`: Small mobile optimizations.
- **Optimization:** Heavy use of Flexbox and Grid for fluid layouts.
