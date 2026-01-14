"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/language-context";
import { Menu, X } from "lucide-react";

export default function Header() {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = [
        { href: "#services", label: t("nav.services") },
        { href: "#portfolio", label: t("nav.portfolio") },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 apple-card border-b bg-background/80 backdrop-blur-md"
        >
            <div className="container mx-auto px-6 lg:px-8 h-16 flex items-center justify-between max-w-7xl">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold tracking-tight">
                        Jonathan<span className="text-primary">.dev</span>
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Right side: (Desktop) Theme + Language + CTA */}
                <div className="hidden md:flex items-center gap-2">
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

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-2">
                    <ThemeToggle />
                    <LanguageToggle />
                    <button
                        onClick={toggleMenu}
                        className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t bg-background/95 backdrop-blur-lg overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button
                                size="lg"
                                asChild
                                className="rounded-full w-full mt-2"
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
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
