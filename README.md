# SARMAK Learning Landing Site

A standalone, attractive landing page for the SARMAK Learning program featuring:

## Features

- 🎨 **Modern Design** — Gradient backgrounds, glass morphism cards, smooth animations
- ✨ **Blinking Offers** — Eye-catching blink animations on limited-time deals
- 💫 **Pulse Glow CTA** — Animated call-to-action buttons to drive conversions
- 📱 **Fully Responsive** — Mobile-first design, works on all devices
- 🎯 **Conversion Optimized** — Multiple CTAs, urgency messaging, testimonials
- ⚡ **Fast & Lightweight** — Vite + React + Tailwind CSS

## Project Structure

```
learning-landing/
├── src/
│   ├── App.tsx          # Main landing page component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles + animations
├── index.html           # HTML entry
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## Setup

```bash
cd /Users/anshul/Downloads/ss_website/learning-landing
npm install
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Configuration

Update the Google Form URL in `src/App.tsx`:
- Replace `https://forms.gle/your-google-form-link` with your actual Google Form

## Deployment

Deploy to Netlify, Vercel, or any static host:

```bash
npm run build
# Upload the `dist` folder to your hosting provider
```

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --dir=dist
```

## Custom Domain (learn.sarmak.in)

This landing page can be hosted separately from your main site using the subdomain `learn.sarmak.in`.

1. Create a new Netlify/Vercel site from the `learning-landing` folder.
2. Set the build command to `npm run build` and publish directory to `dist`.
3. In Netlify/Vercel site settings, add the custom domain `learn.sarmak.in`.
4. Add a DNS CNAME record for `learn` pointing to your hosting provider’s target domain.

> If you keep this project in the same repository, deploy it as a separate site with the base directory set to `learning-landing`.

## Features Breakdown

### Blinking Animations
- Limited-time offers use `.blink` class (1s opacity fade)
- Applied to CTAs with `.pulse-glow` for radiant effect

### Section Highlights
1. **Hero** — Massive headline + blinking offer badge
2. **Offers** — 3 blink-animated deal cards
3. **Modules** — 4-week curriculum breakdown
4. **Flash Deal** — Green urgency section with counter offer
5. **Testimonials** — Social proof with star ratings
6. **FAQ** — Interactive accordion
7. **Final CTA** — High-converting bottom funnel
8. **Footer** — Links back to main SARMAK site

## Color Scheme

- Primary: Emerald to Green gradient (`from-emerald-400 to-green-600`)
- Background: Dark (`#1c1d1b` to `#0d0e10`)
- Accents: Gold (`#FFD700`)
- Glass: White with 5-10% opacity

## Customization

All text, offers, and testimonials can be edited in `src/App.tsx`. Styling uses Tailwind utility classes for easy modifications.
# learning
