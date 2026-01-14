"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/language-context";

export default function Header() {
    const { t } = useLanguage();

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 apple-card border-b"
        >
            <div className="container mx-auto px-6 lg:px-8 h-16 flex items-center justify-between max-w-7xl">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold tracking-tight">
                        Jonathan<span className="text-primary">.dev</span>
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {t("nav.services")}
                    </a>
                    <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {t("nav.portfolio")}
                    </a>
                </nav>

                {/* Right side: Theme + Language + CTA */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <LanguageToggle />
                    <Button
                        size="sm"
                        asChild
                        className="rounded-full ml-2"
                    >
                        <a
                            href="https://wa.me/573137225266?text=Hola,%20vi%20tu%20web%20y%20quiero%20cotizar%20una%20página%20para%20mi%20negocio."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("nav.contact")}
                        </a>
                    </Button>
                </div>
            </div>
        </motion.header>
    );
}
