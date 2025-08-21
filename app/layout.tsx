import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "EUCONX - Your Window into the Turkish Market",
  description: "Premium insulation materials from Turkey to Hungary and Central Europe",
  generator: "v0.app",
  keywords: [
    "Turkish construction materials",
    "insulation materials",
    "construction supply chain",
    "Central Europe logistics",
    "premium materials",
    "EU compliance",
    "Turkey export",
    "Hungary import",
    "construction materials",
    "thermal insulation",
    "waterproofing",
    "sound insulation"
  ],
  authors: [{ name: "EUCONX" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#ff6b35",
  manifest: "/manifest.json",
  openGraph: {
    title: "EUCONX - Premium Turkish Construction Materials",
    description: "Your trusted partner for premium Turkish construction materials in Central Europe",
    url: "https://euconx.com",
    siteName: "EUCONX",
    images: [
      {
        url: "https://euconx.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EUCONX - Turkish Construction Materials",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EUCONX - Your Window into the Turkish Market",
    description: "Premium insulation materials from Turkey to Hungary and Central Europe",
    images: ["https://euconx.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased bg-euconx-gray-50 text-euconx-gray-900 min-h-screen overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
