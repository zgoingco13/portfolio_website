import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { TopoWatermark } from "@/components/TopoWatermark"
import "./globals.css"

export const metadata: Metadata = {
  title: "Czarina 'Z' Goingco — UX Designer",
  description:
    "UX/UI designer based in Los Angeles. Healthcare, outdoor culture, human-centered work.",
  icons: {
    icon: "/logo/logo-forest.svg",
    apple: "/logo/logo-forest-2x.png",
  },
  // TODO: add openGraph.images once an OG image is created at public/og-image.jpg
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dwj4mwn.css" />
      </head>
      <body className="antialiased">
        <TopoWatermark />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
