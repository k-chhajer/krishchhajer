import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import ThemeToggle from "@/components/ThemeToggle"
import "./globals.css"

// Runs before paint so a saved light theme never flashes dark first.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){var r=document.documentElement;r.dataset.theme="light";r.style.colorScheme="light";var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","#fafafa")}}catch(e){}})()`

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
    <html lang="en" className={GeistSans.className} data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/donut.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/donut.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#070707" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
