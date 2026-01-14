"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function FinalCTA() {
    const { t } = useLanguage();

    return (
        <section className="py-32">
            <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-8 p-12 rounded-3xl apple-card shadow-apple"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        {t("cta.title")}
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
                        {t("cta.subtitle")}
                    </p>
                    <Button
                        size="lg"
                        asChild
                        className="rounded-full px-10 text-lg font-semibold h-14"
                    >
                        <a
                            href="https://wa.me/573137225266?text=Hola,%20estoy%20listo%20para%20digitalizar%20mi%20negocio.%20¿Podemos%20hablar?"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("cta.button")}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
