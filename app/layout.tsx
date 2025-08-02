import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "TD Cabinets - Where Aesthetics Meet Endurance",
  description:
    "Professional cabinet installation, maintenance, and custom design services. Kitchen & bathroom renovations by TD Cabinets.",
  keywords:
    "cabinets, kitchen renovation, bathroom renovation, custom cabinets, cabinet installation, cabinet maintenance",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        <Header />
        {children}
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  )
}
