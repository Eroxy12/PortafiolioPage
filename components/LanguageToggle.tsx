"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { Languages } from "lucide-react";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="rounded-full font-medium gap-2"
        >
            <Languages className="h-4 w-4" />
            <span className="flex items-center gap-1">
                {language === "es" ? (
                    <>
                        <span className="text-base leading-none">🇪🇸</span>
                        <span className="hidden sm:inline">ES</span>
                    </>
                ) : (
                    <>
                        <span className="text-base leading-none">🇺🇸</span>
                        <span className="hidden sm:inline">EN</span>
                    </>
                )}
            </span>
        </Button>
    );
}
