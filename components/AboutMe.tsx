import Image from "next/image";
import { motion } from "framer-motion";
import { User, Award, Heart, CheckCircle2, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-32 bg-muted/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                            <Image
                                src="/jonathanIlustration3.png"
                                alt="Jonathan - Desarrollador Web"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute -bottom-8 -right-8 md:right-8 bg-primary text-primary-foreground p-6 rounded-3xl shadow-xl max-w-[200px]"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle2 className="w-6 h-6" />
                                <span className="font-bold text-lg">Garantía</span>
                            </div>
                            <p className="text-xs opacity-90 leading-tight">
                                Soporte y acompañamiento en cada etapa del proyecto.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <User className="w-4 h-4" />
                            Sobre mí
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            {t("about.title")}
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                {t("about.desc")}
                            </p>
                            <p>
                                {t("about.passion")}
                            </p>

                            <div className="p-6 bg-card rounded-2xl border-l-4 border-primary shadow-sm">
                                <p className="text-foreground font-medium italic">
                                    "{t("about.quote")}"
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                <Button variant="outline" size="lg" className="gap-2" asChild>
                                    <a href="https://github.com/Eroxy12" target="_blank" rel="noopener noreferrer">
                                        <Github className="w-5 h-5" />
                                        GitHub
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="gap-2" asChild>
                                    <a href="https://www.linkedin.com/in/jonathan-cardona-b38326222/" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="w-5 h-5" />
                                        LinkedIn
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t">
                            <div className="space-y-1">
                                <div className="text-3xl font-bold text-primary">{t("about.stat1.value")}</div>
                                <div className="text-sm text-muted-foreground">{t("about.stat1.label")}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl font-bold text-primary">{t("about.stat2.value")}</div>
                                <div className="text-sm text-muted-foreground">{t("about.stat2.label")}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl font-bold text-primary">{t("about.stat3.value")}</div>
                                <div className="text-sm text-muted-foreground">{t("about.stat3.label")}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
