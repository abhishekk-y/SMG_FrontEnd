"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="text-center max-w-md">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-500">
                    <AlertTriangle className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">Something went wrong!</h2>
                <p className="text-gray-500 mb-8">
                    We encountered an unexpected error. Please try again or contact support if the problem persists.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button variant="outline" onClick={() => window.location.href = "/"}>
                        Go Home
                    </Button>
                    <Button onClick={() => reset()} className="bg-[#FF4D00] hover:bg-[#E04400]">
                        Try Again
                    </Button>
                </div>
            </div>
        </div>
    )
}
