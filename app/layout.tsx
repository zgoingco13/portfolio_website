import type { Metadata } from "next"
import { Archivo_Black, Fraunces, Exo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Archivo Black - similar to Cooper Black for hero headlines
const archivoBlack = Archivo_Black({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

// Fraunces - warm, playful serif for all headings
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-serif",
  display: "swap",
})

// Exo 2 - geometric sans similar to Eurostile for body/UI
const exo2 = Exo_2({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sarah Chen — UX Designer",
  description:
    "UX/Product Designer crafting thoughtful digital experiences that balance user needs with business goals.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${archivoBlack.variable} ${fraunces.variable} ${exo2.variable} font-sans antialiased bg-pattern`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
