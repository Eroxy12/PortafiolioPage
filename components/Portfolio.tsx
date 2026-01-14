"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

export default function Portfolio() {
    const { t } = useLanguage();

    const projects = [
        {
            titleKey: "portfolio.restaurant.title",
            descKey: "portfolio.restaurant.desc",
            gradient: "from-orange-400 via-rose-400 to-pink-500",
        },
        {
            titleKey: "portfolio.dental.title",
            descKey: "portfolio.dental.desc",
            gradient: "from-blue-400 via-cyan-400 to-teal-500",
        },
        {
            titleKey: "portfolio.lawyers.title",
            descKey: "portfolio.lawyers.desc",
            gradient: "from-violet-400 via-purple-400 to-fuchsia-500",
        },
    ];

    return (
        <section id="portfolio" className="py-32 bg-muted/30">
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
                        {t("portfolio.title")}
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.titleKey}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <Card className="overflow-hidden border-0 shadow-apple rounded-3xl hover:shadow-xl transition-all duration-500 cursor-pointer">
                                {/* Large Image Area with Gradient */}
                                <div className={`h-80 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                    {/* Grid overlay for texture */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="h-full w-full" style={{
                                            backgroundImage: `
                        linear-gradient(to right, white 1px, transparent 1px),
                        linear-gradient(to bottom, white 1px, transparent 1px)
                      `,
                                            backgroundSize: '40px 40px',
                                        }} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 space-y-3 apple-card">
                                    <h3 className="text-2xl font-semibold">
                                        {t(project.titleKey)}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t(project.descKey)}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
