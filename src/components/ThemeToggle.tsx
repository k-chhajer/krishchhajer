"use client"

import { Moon, Sun } from "lucide-react"
import type { MouseEvent } from "react"

type Theme = "light" | "dark"

const THEME_COLORS: Record<Theme, string> = {
  dark: "#070707",
  light: "#fafafa",
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.style.colorScheme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme])

  try {
    localStorage.setItem("theme", theme)
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the theme still applies for this visit.
  }
}

export default function ThemeToggle() {
  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const next: Theme = document.documentElement.dataset.theme === "light" ? "dark" : "light"
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!document.startViewTransition || reducedMotion) {
      applyTheme(next)
      return
    }

    // Grow the new theme as a circle from the button until it covers the whole screen.
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

    const transition = document.startViewTransition(() => applyTheme(next))

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      )
    })
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle light mode">
      <Sun className="theme-icon theme-icon-sun" size={15} strokeWidth={1.75} aria-hidden="true" />
      <Moon className="theme-icon theme-icon-moon" size={15} strokeWidth={1.75} aria-hidden="true" />
    </button>
  )
}
