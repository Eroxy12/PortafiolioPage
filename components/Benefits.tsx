"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Smartphone, Search } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Benefits() {
    const { t } = useLanguage();

    const benefits = [
        {
            icon: Zap,
            titleKey: "benefits.speed.title",
            descKey: "benefits.speed.desc",
            gradient: "from-yellow-500/80 to-orange-500/80",
            iconBg: "from-yellow-500/20 to-orange-500/20",
        },
        {
            icon: Smartphone,
            titleKey: "benefits.mobile.title",
            descKey: "benefits.mobile.desc",
            gradient: "from-blue-500/80 to-cyan-500/80",
            iconBg: "from-blue-500/20 to-cyan-500/20",
        },
        {
            icon: Search,
            titleKey: "benefits.seo.title",
            descKey: "benefits.seo.desc",
            gradient: "from-green-500/80 to-emerald-500/80",
            iconBg: "from-green-500/20 to-emerald-500/20",
        },
    ];

    return (
        <section id="benefits" className="py-32">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                        {t("benefits.title")}
                    </h2>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.titleKey}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-2 shadow-xl rounded-3xl bg-card hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                                {/* Top gradient bar for visual distinction */}
                                <div className={`h-2 bg-gradient-to-r ${benefit.gradient}`} />

                                <CardHeader className="text-center pt-12 pb-6">
                                    <div className={`mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.iconBg} flex items-center justify-center ring-2 ring-offset-2 ring-offset-background ring-${benefit.gradient.split('/')[0].split('-')[1]}-500/50`}>
                                        <benefit.icon className={`w-10 h-10 text-${benefit.gradient.split('/')[0].split('-')[1]}-500`} strokeWidth={1.5} />
                                    </div>
                                    <CardTitle className="text-2xl font-semibold">
                                        {t(benefit.titleKey)}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center pb-12 px-8">
                                    <CardDescription className="text-base leading-relaxed text-foreground/80">
                                        {t(benefit.descKey)}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
