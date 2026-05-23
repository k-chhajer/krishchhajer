import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata: Metadata = {
  title: "Krish Chhajer",
  description:
    "ECE student at the University of Toronto. Machine learning, hardware, and AI systems.",
  metadataBase: new URL("https://krishchhajer.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/donut.svg", type: "image/svg+xml" },
    ],
    apple: "/donut.svg",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Krish Chhajer",
    description:
      "ECE student at the University of Toronto. Machine learning, hardware, and AI systems.",
    images: ["/donut.svg"],
  },
  twitter: {
    card: "summary",
    title: "Krish Chhajer",
    description:
      "ECE student at the University of Toronto. Machine learning, hardware, and AI systems.",
    images: ["/donut.svg"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="icon" href="/donut.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/donut.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/toronto.webp" as="image" type="image/webp" fetchPriority="high" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  )
}
