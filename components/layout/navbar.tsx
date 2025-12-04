"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Search, Phone } from "lucide-react"

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF4D00] to-[#FF6B35] flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">
                        SMG<span className="text-[#FF4D00]">Motors</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/#models" className="text-sm font-medium text-gray-600 hover:text-[#FF4D00] transition-colors">
                        Models
                    </Link>
                    <Link href="/#technology" className="text-sm font-medium text-gray-600 hover:text-[#FF4D00] transition-colors">
                        Technology
                    </Link>
                    <Link href="/#charging" className="text-sm font-medium text-gray-600 hover:text-[#FF4D00] transition-colors">
                        Charging
                    </Link>
                    <Link href="/track" className="text-sm font-medium text-gray-600 hover:text-[#FF4D00] transition-colors">
                        Track Order
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#FF4D00] hover:bg-orange-50">
                        <Search className="w-5 h-5" />
                    </Button>
                    <Button className="bg-[#FF4D00] hover:bg-[#E04400] text-white gap-2 shadow-lg shadow-orange-500/20" asChild>
                        <Link href="/dealer">
                            Contact <Phone className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
