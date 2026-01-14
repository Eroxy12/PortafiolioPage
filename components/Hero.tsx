"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="text-center space-y-8 py-20 md:py-32">
                    {/* Main Headline - Sales focused */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight max-w-5xl mx-auto"
                    >
                        {t("hero.title")}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        {t("hero.subtitle")}
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col items-center gap-3 pt-8"
                    >
                        <Button
                            size="lg"
                            asChild
                            className="rounded-full px-10 text-lg font-semibold h-14"
                        >
                            <a
                                href="https://wa.me/573137225266?text=Hola,%20vi%20tu%20web%20y%20quiero%20solicitar%20un%20presupuesto%20gratis."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("hero.cta")}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            ⚡ {t("hero.response")}
                        </p>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="pt-20"
                    >
                        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto relative">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 bg-foreground rounded-full absolute left-1/2 top-2 -translate-x-1/2"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
