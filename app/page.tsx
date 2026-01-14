"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useLanguage } from "@/lib/language-context";
import dynamic from "next/dynamic";

const Benefits = dynamic(() => import("@/components/Benefits"));
const AboutMe = dynamic(() => import("@/components/AboutMe"));
const Services = dynamic(() => import("@/components/Services"));
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA"));

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Benefits />
            <AboutMe />
            <Services />
            <Portfolio />
            <FinalCTA />
            <FloatingCTA />

            {/* Minimal Footer */}
            <footer className="border-t py-12 bg-muted/30">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Jonathan.dev. {t("footer.rights")}
                        </div>

                        <div className="flex gap-8 text-sm">
                            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                                {t("nav.services")}
                            </a>
                            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                                {t("nav.portfolio")}
                            </a>
                            <a
                                href="https://wa.me/573137225266"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {t("nav.contact")}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
