"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingCTA() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50"
        >
            <Button
                size="icon"
                className="h-16 w-16 rounded-full shadow-apple hover:scale-110 transition-transform"
                asChild
            >
                <a
                    href="https://wa.me/573137225266?text=Hola,%20tengo%20un%20proyecto%20en%20mente"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contactar por WhatsApp"
                >
                    <MessageCircle className="h-7 w-7" />
                </a>
            </Button>
        </motion.div>
    );
}
