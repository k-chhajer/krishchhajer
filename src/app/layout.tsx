import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata: Metadata = {
  title: "Krish Chhajer",
  description:
    "ECE student at the University of Toronto. Machine learning research and AI systems.",
  metadataBase: new URL("https://krishchhajer.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.svg",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Krish Chhajer",
    description:
      "ECE student at the University of Toronto. Machine learning research and AI systems.",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary",
    title: "Krish Chhajer",
    description:
      "ECE student at the University of Toronto. Machine learning research and AI systems.",
    images: ["/logo.svg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  )
}
