# Portfolio Landing Page

A high-performance portfolio landing page designed for freelance web developers and digital agencies. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, focusing on speed, SEO optimization, and conversion rates.

## About The Project

This project serves as a comprehensive starting point for establishing a professional online presence. It features a modern, responsive design that highlights services, showcases portfolio projects, and facilitates client communication through direct WhatsApp integration.

### Key Features

*   **Next.js 14 App Router**: Utilizes the latest React framework features for server-side rendering and static optimization.
*   **Responsive Design**: Fully responsive layout adapting seamlessly to mobile, tablet, and desktop screens.
*   **Performance First**: Optimized for Core Web Vitals with lazy loading, efficient image handling, and proper resource prioritization.
*   **SEO Ready**: Includes dynamic sitemap generation, robots.txt configuration, and semantic HTML structure for better search engine visibility.
*   **Internationalization**: Built-in support for multiple languages (English/Spanish) using a lightweight context provider.
*   **Modern UI/UX**: clean aesthetics with smooth Framer Motion animations and glassmorphism effects.

## Built With

*   **Framework**: Next.js 14
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS, Tailwind Merge, CLS
*   **Components**: Radix UI (via shadcn/ui)
*   **Animations**: Framer Motion
*   **Icons**: Lucide React

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   Node.js 18.17 or later
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio-landing.git
    cd portfolio-landing
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

### Contact Information
To update the WhatsApp contact number, modify the `href` attributes in the following components:
*   `components/Header.tsx`
*   `components/Hero.tsx`
*   `components/Pricing.tsx`
*   `components/FloatingCTA.tsx`
*   `components/FinalCTA.tsx`

### SEO & Metadata
Edit `app/layout.tsx` to update the default metadata, including:
*   Title and Description
*   Open Graph images
*   Keywords
*   Local Business Schema (JSON-LD)

### Site Map
Update the base URL in `app/sitemap.ts` and `app/robots.ts` to match your production domain.

## Project Structure

```
/
├── app/                  # App Router pages and layouts
│   ├── layout.tsx        # Root layout with Metadata/SEO
│   ├── page.tsx          # Homepage composition
│   └── globals.css       # Global styles and tailwind directives
├── components/           # React components
│   ├── ui/               # Reusable UI primitives (shadcn)
│   ├── Header.tsx        # Navigation bar
│   ├── Hero.tsx          # Landing section
│   └── ...               # Other sections
├── lib/                  # Utilities and contexts
│   └── language-context.tsx # i18n Logic
└── public/               # Static assets
```

## Deployment

The project is optimized for deployment on **Vercel**.

1.  Push your code to a git repository (GitHub, GitLab, BitBucket).
2.  Import the project into Vercel.
3.  Vercel will detect Next.js and configure the build settings automatically.

## License

Distributed under the MIT License. See `LICENSE` for more information.
