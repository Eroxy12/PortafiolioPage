"use client";

import { motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, QrCode, TrendingUp, LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";

export default function Services() {
    const { t } = useLanguage();

    interface ServiceItem {
        icon: LucideIcon;
        nameKey: string;
        descKey: string;
        benefitKey: string;
        idealKey: string;
        gradient: string;
        featured?: boolean;
    }

    const services: ServiceItem[] = [
        {
            icon: Rocket,
            nameKey: "services.landing.name",
            descKey: "services.landing.desc",
            benefitKey: "services.landing.benefit",
            idealKey: "services.landing.ideal",
            gradient: "from-red-500 via-orange-500 to-yellow-500",
            featured: true, // Making the main one featured
        },
        {
            icon: QrCode,
            nameKey: "services.qr.name",
            descKey: "services.qr.desc",
            benefitKey: "services.qr.benefit",
            idealKey: "services.qr.ideal",
            gradient: "from-purple-500 via-pink-500 to-rose-500",
        },
        {
            icon: TrendingUp,
            nameKey: "services.seo.name",
            descKey: "services.seo.desc",
            benefitKey: "services.seo.benefit",
            idealKey: "services.seo.ideal",
            gradient: "from-green-500 via-emerald-500 to-teal-500",
        },
    ];

    return (
        <section id="services" className="py-32">
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
                        {t("services.title")}
                    </h2>
                </motion.div>

                {/* Services Grid (3 items) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isFeatured = !!service.featured;

                        return (
                            <motion.div
                                key={service.nameKey}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Card className={`overflow-hidden border-0 shadow-xl rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 h-full flex flex-col ${isFeatured ? 'ring-2 ring-primary relative z-10 md:-mt-4 md:mb-4' : ''}`}>

                                    {/* Featured Badge */}
                                    {isFeatured && (
                                        <div className="absolute top-4 right-4 z-20 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                            Popular
                                        </div>
                                    )}

                                    {/* Gradient Header */}
                                    <div className="h-40 bg-gradient-to-br from-background to-muted relative overflow-hidden group">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                                <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 space-y-4 bg-card flex-1 flex flex-col apple-card">
                                        <CardTitle className="text-2xl font-semibold text-center">
                                            {t(service.nameKey)}
                                        </CardTitle>
                                        <CardDescription className="text-base leading-relaxed text-center">
                                            {t(service.descKey)}
                                        </CardDescription>

                                        {/* Divider */}
                                        <div className="h-px w-full bg-border/50 my-4" />

                                        {/* Benefit highlight */}
                                        <div className="bg-primary/5 rounded-xl p-4 text-sm font-medium text-center text-primary">
                                            ✨ {t(service.benefitKey)}
                                        </div>

                                        {/* Ideal for */}
                                        <div className="text-sm text-muted-foreground text-center">
                                            <span className="font-semibold text-foreground">Ideal para:</span> {t(service.idealKey)}
                                        </div>

                                        <div className="mt-auto pt-6">
                                            <Button
                                                className="w-full rounded-full h-12 text-base shadow-md hover:shadow-lg transition-all"
                                                variant={isFeatured ? "default" : "outline"}
                                                asChild
                                            >
                                                <a
                                                    href={`https://wa.me/573137225266?text=Hola,%20me%20interesa%20${t(service.nameKey)}.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Consultar precio
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
