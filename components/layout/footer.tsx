"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, ArrowRight, ArrowUpRight, Instagram, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-24 pb-12">
            <div className="w-full px-6 md:px-12 lg:px-24">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF4D00] to-[#FF6B35] flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">
                                SMG<span className="text-[#FF4D00]">Motors</span>
                            </span>
                        </Link>
                        <p className="text-sm text-gray-500 mb-4">
                            SMG Motors creates electric vehicles that power a cleaner, smarter, and more exciting future of
                            mobility.
                        </p>
                        <Button variant="outline" className="gap-2 bg-transparent">
                            Contact Us <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Address</h4>
                        <p className="text-sm text-gray-500">
                            88 Electric Avenue,
                            <br />
                            Gurugram, Haryana 122001
                            <br />
                            India
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
                        <p className="text-sm text-gray-500 mb-1">+91 1800 123 4567</p>
                        <p className="text-sm text-gray-500">hello@smgmotors.in</p>
                    </div>

                    {/* Social & Back to Top */}
                    <div className="flex flex-col items-end">
                        <Button
                            variant="outline"
                            className="gap-2 mb-6 bg-transparent"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            Back to Top <ArrowUpRight className="w-4 h-4" />
                        </Button>
                        <div className="flex gap-3">
                            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                                <Button key={i} variant="outline" size="icon" className="rounded-full bg-transparent">
                                    <Icon className="w-4 h-4" />
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="flex flex-wrap justify-between items-center pt-8 border-t border-gray-100">
                    <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                        <Link href="/track" className="hover:text-gray-900 transition-colors">
                            Track Order
                        </Link>
                        <Link href="/#models" className="hover:text-gray-900 transition-colors">
                            Models
                        </Link>
                        <Link href="/#charging" className="hover:text-gray-900 transition-colors">
                            Charging
                        </Link>
                        <Link href="/#technology" className="hover:text-gray-900 transition-colors">
                            Technology
                        </Link>
                        <Link href="/dealer" className="hover:text-gray-900 transition-colors">
                            Dealer Portal
                        </Link>
                        <Link
                            href="/dealer/login"
                            className="hover:text-[#FF4D00] transition-colors font-semibold text-gray-900"
                        >
                            Dealership Login →
                        </Link>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-500 mt-4 md:mt-0">
                        <Link href="/terms" className="hover:text-gray-900 transition-colors">
                            Terms & Conditions
                        </Link>
                        <span>© 2025 SMG Motors. All Rights Reserved.</span>
                        <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
