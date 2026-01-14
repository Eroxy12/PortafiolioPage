"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center space-y-4">
            <h2 className="text-2xl font-bold">Algo salió mal / Something went wrong</h2>
            <p className="text-red-500 max-w-md bg-red-50 p-4 rounded-lg font-mono text-sm text-left overflow-auto">
                {error.message}
            </p>
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Intentar de nuevo / Try again
            </Button>
        </div>
    );
}
