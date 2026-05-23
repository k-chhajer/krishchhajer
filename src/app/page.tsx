"use client"

import TorontoSkyline from "@/components/TorontoSkyline"
import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { useCallback, useState } from "react"

function XLogo() {
  return (
    <svg className="x-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  )
}

function GoogleScholarLogo() {
  return (
    <svg className="scholar-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0 0 9.5l5.242 4.269C6.452 11.249 9.022 9.5 12 9.5s5.548 1.749 6.758 4.269L24 9.5zM12 10.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5z"
      />
    </svg>
  )
}

export default function Home() {
  const [skylineReady, setSkylineReady] = useState(false)
  const handleSkylineReady = useCallback(() => {
    setSkylineReady(true)
  }, [])

  return (
    <div className="page-container">
      <TorontoSkyline onReady={handleSkylineReady} />

      <main className={`content-area ${skylineReady ? "content-area--ready" : ""}`}>
        <h1 className="name">Krish Chhajer</h1>

        <div className="bio">
          <p>
            Incoming Embedded SWE at{" "}
            <a href="https://www.qualcomm.com/" target="_blank" rel="noopener noreferrer">
              Qualcomm
            </a>
            . I study Electrical & Computer Engineering at the{" "}
            <a href="https://www.ece.utoronto.ca/" target="_blank" rel="noopener noreferrer">
              University of Toronto
            </a>
            .
          </p>

          <p>
            Researching multi-agent systems, reinforcement learning, and performance
            engineering. Engineering lead at{" "}
            <a href="https://torontohackerfab.com/" target="_blank" rel="noopener noreferrer">
              Toronto Hacker Fab
            </a>
            .
          </p>

          <p>
            Feel free to check out some of the{" "}
            <Link href="/projects">things</Link> that keep me up at night.
          </p>

        </div>

        <div className="social-links">
          <a href="https://x.com/krish_chhajer" target="_blank" rel="noopener noreferrer" aria-label="X">
            <XLogo />
          </a>
          <a href="https://github.com/k-chhajer" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://scholar.google.com/citations?user=m-YwESAAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
            <GoogleScholarLogo />
          </a>
          <a href="mailto:krishchhajer10@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </main>

    </div>
  )
}
