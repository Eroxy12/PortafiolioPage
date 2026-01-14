"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    es: {
        // Header
        "nav.services": "Servicios",
        "nav.portfolio": "Portafolio",
        "nav.contact": "Hablemos por WhatsApp",

        // Hero
        "hero.title": "Tu negocio merece una web que venda, no solo que exista.",
        "hero.subtitle": "Diseño sitios web modernos, ultra rápidos y optimizados para aparecer en Google. Convierte visitantes en clientes desde el primer día.",
        "hero.cta": "Solicitar Presupuesto Gratis",
        "hero.response": "Respuesta en menos de 1 hora",

        // Benefits
        "benefits.title": "¿Por qué tu negocio necesita actualizarse?",
        "benefits.speed.title": "Carga Instantánea",
        "benefits.speed.desc": "Uso tecnología Next.js. Si tu web tarda más de 3 segundos, pierdes al 40% de tus clientes. Las mías cargan al instante.",
        "benefits.mobile.title": "100% Adaptable al Celular",
        "benefits.mobile.desc": "La mayoría de tus clientes te buscan desde su teléfono. Tu web se verá perfecta en cualquier pantalla.",
        "benefits.seo.title": "Amigable con Google",
        "benefits.seo.desc": "Estructura optimizada para que los buscadores entiendan tu negocio y te posicionen mejor.",

        // Services
        "services.title": "Servicios diseñados para cada necesidad",
        "services.landing.name": "Página Web de Ventas",
        "services.landing.desc": "Una página única diseñada para vender tu producto o servicio. Perfecta para tus anuncios en redes sociales.",
        "services.landing.benefit": "Convierte visitas en clientes reales",
        "services.landing.ideal": "Coaches, abogados, dentistas",
        "services.card.name": "Tarjeta Digital Profesional",
        "services.card.desc": "Sustituye tus tarjetas de papel por un perfil digital profesional. Todo tu contacto a un solo clic de distancia.",
        "services.card.benefit": "Siempre actualizada, nunca se pierde",
        "services.card.ideal": "Vendedores, agentes, freelancers",
        "services.qr.name": "Menús y Catálogos QR",
        "services.qr.desc": "Digitaliza tu carta o catálogo de productos. Fácil de actualizar y accesible mediante código QR.",
        "services.qr.benefit": "Sin costos de impresión, actualización en tiempo real",
        "services.qr.ideal": "Restaurantes, cafeterías, tiendas",
        "services.seo.name": "Mantenimiento y Optimización SEO",
        "services.seo.desc": "Hago que tu web actual sea más rápida y aparezca en los primeros resultados de búsqueda de Google.",
        "services.seo.benefit": "Más visibilidad = Más clientes",
        "services.seo.ideal": "Negocios con web existente",
        "services.audit.name": "Auditoría Web Gratuita",
        "services.audit.desc": "Analizo tu sitio actual sin costo y te digo cómo puedes mejorar tus ventas hoy mismo.",
        "services.audit.benefit": "Descubre qué está frenando tus ventas",
        "services.audit.ideal": "Cualquier negocio online",

        // Portfolio
        "portfolio.title": "Trabajos recientes",
        "portfolio.restaurant.title": "Restaurante La Finca",
        "portfolio.restaurant.desc": "Web de reservas y menú digital",
        "portfolio.dental.title": "Consultorio Dental",
        "portfolio.dental.desc": "Landing page para captación de pacientes",
        "portfolio.lawyers.title": "Abogados Asociados",
        "portfolio.lawyers.desc": "Sitio corporativo institucional",

        // Final CTA
        "cta.title": "¿Listo para digitalizar tu negocio?",
        "cta.subtitle": "No pierdas más clientes frente a tu competencia. Empecemos hoy mismo.",
        "cta.button": "Enviar mensaje por WhatsApp",

        // Footer
        "footer.rights": "Diseñado con atención al detalle.",
    },
    en: {
        // Header
        "nav.services": "Services",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Let's talk on WhatsApp",

        // Hero
        "hero.title": "Your business deserves a website that sells, not just exists.",
        "hero.subtitle": "I design modern, ultra-fast websites optimized to appear on Google. Turn visitors into customers from day one.",
        "hero.cta": "Request Free Quote",
        "hero.response": "Response in less than 1 hour",

        // Benefits
        "benefits.title": "Why does your business need to upgrade?",
        "benefits.speed.title": "Instant Loading",
        "benefits.speed.desc": "I use Next.js technology. If your site takes more than 3 seconds, you lose 40% of your customers. Mine load instantly.",
        "benefits.mobile.title": "100% Mobile Responsive",
        "benefits.mobile.desc": "Most of your customers search for you from their phone. Your site will look perfect on any screen.",
        "benefits.seo.title": "Google Friendly",
        "benefits.seo.desc": "Optimized structure so search engines understand your business and rank you better.",

        // Services
        "services.title": "Services designed for every need",
        "services.landing.name": "Sales Website",
        "services.landing.desc": "A single page designed to sell your product or service. Perfect for your social media ads.",
        "services.landing.benefit": "Turn visits into real customers",
        "services.landing.ideal": "Coaches, lawyers, dentists",
        "services.card.name": "Professional Digital Card",
        "services.card.desc": "Replace your paper cards with a professional digital profile. All your contact info one click away.",
        "services.card.benefit": "Always updated, never lost",
        "services.card.ideal": "Salespeople, agents, freelancers",
        "services.qr.name": "QR Menus & Catalogs",
        "services.qr.desc": "Digitize your menu or product catalog. Easy to update and accessible via QR code.",
        "services.qr.benefit": "No printing costs, real-time updates",
        "services.qr.ideal": "Restaurants, cafes, shops",
        "services.seo.name": "Maintenance & SEO Optimization",
        "services.seo.desc": "I make your current website faster and appear in Google's top search results.",
        "services.seo.benefit": "More visibility = More customers",
        "services.seo.ideal": "Businesses with existing websites",
        "services.audit.name": "Free Website Audit",
        "services.audit.desc": "I analyze your current site at no cost and tell you how to improve your sales today.",
        "services.audit.benefit": "Discover what's holding back your sales",
        "services.audit.ideal": "Any online business",

        // Portfolio
        "portfolio.title": "Recent work",
        "portfolio.restaurant.title": "La Finca Restaurant",
        "portfolio.restaurant.desc": "Reservation and digital menu website",
        "portfolio.dental.title": "Dental Clinic",
        "portfolio.dental.desc": "Landing page for patient acquisition",
        "portfolio.lawyers.title": "Associated Lawyers",
        "portfolio.lawyers.desc": "Institutional corporate site",

        // Final CTA
        "cta.title": "Ready to digitize your business?",
        "cta.subtitle": "Don't lose more customers to your competition. Let's start today.",
        "cta.button": "Send WhatsApp message",

        // Footer
        "footer.rights": "Designed with attention to detail.",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("es");

    useEffect(() => {
        const saved = localStorage.getItem("language") as Language;
        if (saved && (saved === "es" || saved === "en")) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.es] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
