# Portfolio Landing Page

High-conversion portfolio landing page for a freelance web developer built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 Modern "Antigravity" design with neon cyberpunk aesthetic
- 📱 Fully responsive Bento Grid layout
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized with metadata, robots.txt, and sitemap
- 🌐 Glassmorphism effects and custom animations
- 📞 WhatsApp integration for CTAs
- 🎯 High-conversion focused copy

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Font:** Plus Jakarta Sans

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Update WhatsApp Number

Replace `1234567890` with your actual WhatsApp number in:
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/Pricing.tsx`
- `components/FloatingCTA.tsx`

### Update Metadata

Edit SEO information in `app/layout.tsx`:
- Update the domain in `metadataBase`
- Replace placeholder text with your information
- Add your Google verification code

### Update Sitemap and Robots

Update your domain in:
- `app/robots.ts`
- `app/sitemap.ts`

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with SEO
│   ├── page.tsx          # Main landing page
│   ├── globals.css       # Global styles
│   ├── robots.ts         # Robots.txt
│   └── sitemap.ts        # Sitemap
├── components/
│   ├── ui/               # Shadcn/ui components
│   ├── Header.tsx        # Sticky header
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Bento Grid services
│   ├── Portfolio.tsx     # Portfolio showcase
│   ├── Pricing.tsx       # Pricing cards
│   └── FloatingCTA.tsx   # Floating WhatsApp button
└── lib/
    └── utils.ts          # Utility functions
```

## 🎯 Sections

1. **Header:** Sticky glassmorphism header with logo and CTA
2. **Hero:** High-impact section with ROI-focused headline
3. **Services:** Bento Grid layout with 3 service cards
4. **Portfolio:** Project showcase with gradient placeholders
5. **Pricing:** 3-tier pricing with highlighted "Starter Pack"
6. **Floating CTA:** Always-visible WhatsApp button

## 🌐 Deployment

Deploy to Vercel:

```bash
npm install -g vercel
vercel
```

Or use the Vercel dashboard for GitHub integration.

## 📄 License

MIT License - feel free to use this template for your own portfolio!
