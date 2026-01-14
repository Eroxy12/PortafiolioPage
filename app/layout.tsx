import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
    title: {
        default: "Jonathan | Diseño Web & SEO Local en Medellín",
        template: "%s | Jonathan - Desarrollador Web Medellín",
    },
    description:
        "Diseño de páginas web profesionales y menús digitales en Medellín, Colombia. Aumenta tus ventas con un sitio web rápido y optimizado para SEO local.",
    keywords: [
        "diseño web medellín",
        "creación paginas web medellin",
        "desarrollador web colombia",
        "agencia seo medellin",
        "menús digitales qr",
        "catálogos virtuales",
        "posicionamiento web medellin",
        "programador freelance medellin",
    ],
    authors: [{ name: "Jonathan", url: "https://jonathan.dev" }], // Update with real URL if available
    creator: "Jonathan",
    publisher: "Jonathan",
    metadataBase: new URL("https://jonathan.dev"), // Update with real URL
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "es_CO",
        url: "https://jonathan.dev",
        title: "Diseño Web que Vende en Medellín | Jonathan",
        description:
            "Ayudo a negocios en Medellín a tener presencia digital profesional. Páginas web modernas, rápidas y optimizadas para Google.",
        siteName: "Jonathan Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Jonathan - Diseño Web en Medellín",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Jonathan | Diseño Web & SEO Medellín",
        description:
            "Desarrollo web profesional y estrategias SEO para negocios en Medellín.",
        images: ["/og-image.jpg"],
        creator: "@jonathan_dev", // Placeholder
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "google-site-verification-code", // Placeholder
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Jonathan - Diseño Web y SEO Local",
    "image": "https://jonathan.dev/og-image.jpg", // Placeholder
    "description": "Diseño de páginas web profesionales y menús digitales QR en Medellín. Especialista en SEO Local y optimización de velocidad.",
    "telephone": "+57 313 722 5266",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Medellín",
        "addressRegion": "Antioquia",
        "addressCountry": "CO"
    },
    "url": "https://jonathan.dev",
    "priceRange": "$$$",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    },
    "sameAs": [
        "https://linkedin.com/in/jonathan",
        "https://github.com/jonathan"
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={`${plusJakarta.variable} font-sans antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
