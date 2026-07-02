# Grep Directory

Quick reference for searching the E-Perfect Beauty codebase.

## Core Files

| File | Role |
|------|------|
| `index.html` | Home page: Hero pills, services, reviews carousel, FAQ, Map. |
| `styles.css` | All styling: Variables, glassmorphism, neumorphism, animations. |
| `pricing.html` | Treatment menu with anchors for external linking. |
| `about-us.html` | Evelyn's profile and studio philosophy. |
| `blog.html` | Blog feed (JS: `js/blog-read.js`). |
| `js/blog-posts.js` | Hardcoded blog post data. |
| `js/blog-render.js` | Post card rendering. |

## Key CSS Selectors

| Topic | Patterns |
|-------|----------|
| **Navigation** | `.navbar`, `.nav-inner`, `.nav-links`, `.nav-burger`, `.nav-mobile-drawer` |
| **Hero** | `.hero`, `.service-pill`, `.hero-visual`, `.hero-stack`, `.floating-card` |
| **Buttons** | `.btn-primary`, `.btn-secondary`, `.nav-cta` |
| **Services** | `.services`, `.service-group`, `.service-grid`, `.service-card` |
| **Reviews** | `.reviews-section`, `.reviews-carousel`, `.review-card` |
| **Footer** | `.footer`, `.footer__brand`, `.footer__col` |
| **Glass/Effects**| `.main-card--hero-glass`, `.blob`, `.grid-glow` |

## JavaScript Logic

| Feature | Location | Key Symbols |
|---------|----------|-------------|
| **Hero Rotation** | `index.html` | `activateServicePill`, `advanceServicePill`, `AUTO_ROTATE_MS` |
| **Mobile Menu** | `index.html`, etc. | `openDrawer`, `closeDrawer`, `navBurger` |
| **Blog Listing** | `js/blog-read.js` | `blogPosts`, `renderPostsInto` |
| **PWA Modal** | `index.html` | `openModal`, `closeModal`, `EPB-whitening-modal-dismissed` |

## Useful Grep One-Liners

```bash
# Find all WhatsApp links
rg "wa\.me"

# Search for specific design tokens
rg "--motion-|--radius-" styles.css

# Find all service card IDs
rg "id=\"service-" index.html

# List blog posts
rg "title:|id:" js/blog-posts.js

# Find all anchor links on the pricing page
rg "id=\"[a-z-]+\"" pricing.html
```
