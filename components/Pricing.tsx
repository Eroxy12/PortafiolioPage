"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingPlans = [
    {
        name: "Básico",
        price: "$299",
        description: "Perfecto para empezar tu presencia online",
        features: [
            "Landing page de 1 sección",
            "Diseño responsive",
            "Formulario de contacto",
            "SEO básico",
            "Entrega en 5 días",
        ],
        cta: "Empezar",
        popular: false,
    },
    {
        name: "Starter Pack",
        price: "$599",
        description: "La mejor relación calidad-precio",
        features: [
            "Landing page completa",
            "Hasta 5 secciones",
            "Animaciones personalizadas",
            "SEO avanzado + Keywords",
            "Integración WhatsApp/Email",
            "Google Analytics",
            "Entrega en 7 días",
            "1 mes de soporte",
        ],
        cta: "Más Popular",
        popular: true,
    },
    {
        name: "Premium",
        price: "$1,299",
        description: "Solución completa para tu negocio",
        features: [
            "Website completo (hasta 10 páginas)",
            "E-commerce incluido",
            "Blog + CMS",
            "SEO técnico completo",
            "Optimización de velocidad",
            "Integración de APIs",
            "3 meses de soporte",
            "Capacitación incluida",
        ],
        cta: "Contactar",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 relative">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Planes <span className="text-gradient">transparentes</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Elige el paquete que mejor se adapte a tus necesidades
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-sm font-semibold">
                                        <Star className="w-4 h-4 fill-current" />
                                        Recomendado
                                    </div>
                                </div>
                            )}

                            <Card className={`h-full ${plan.popular ? 'border-neon-blue/50 shadow-lg shadow-neon-blue/20 scale-105' : 'border-white/10'}`}>
                                <CardHeader>
                                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                    <div className="pt-2">
                                        <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                                        <span className="text-muted-foreground"> USD</span>
                                    </div>
                                    <CardDescription className="text-base pt-2">
                                        {plan.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter>
                                    <Button
                                        className="w-full"
                                        variant={plan.popular ? "default" : "outline"}
                                        size="lg"
                                        asChild
                                    >
                                        <a
                                            href={`https://wa.me/1234567890?text=Hola,%20me%20interesa%20el%20plan%20${plan.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {plan.cta}
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Quote CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-muted-foreground mb-4">
                        ¿Necesitas algo diferente?
                    </p>
                    <Button variant="secondary" size="lg" asChild>
                        <a
                            href="https://wa.me/1234567890?text=Hola,%20necesito%20una%20cotización%20personalizada"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Solicitar cotización personalizada
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
