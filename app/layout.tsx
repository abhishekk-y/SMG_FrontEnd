import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SMG Motors | Premium Electric Vehicles",
  description: "Experience the future of urban mobility with SMG Motors. Discover our range of high-performance electric scooters, track your order, and find a dealer near you.",
  keywords: ["electric vehicles", "EV", "electric scooter", "SMG Motors", "sustainable transport", "urban mobility"],
  authors: [{ name: "SMG Motors" }],
  openGraph: {
    title: "SMG Motors | Premium Electric Vehicles",
    description: "Ride Beyond Limits. Discover the all-new SMG Series electric scooters.",
    url: "https://smgmotors.com",
    siteName: "SMG Motors",
    images: [
      {
        url: "/assets/hero-scooter.png",
        width: 1200,
        height: 630,
        alt: "SMG Electric Scooter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMG Motors | Premium Electric Vehicles",
    description: "Ride Beyond Limits. Discover the all-new SMG Series electric scooters.",
    images: ["/assets/hero-scooter.png"],
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#FF4D00",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
