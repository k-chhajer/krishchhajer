"use client"

import { useEffect, useRef } from "react"
import { useFadeInAnimation } from "@/lib/utils"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navRef = useRef<HTMLElement>(null)
  const { observeElement } = useFadeInAnimation()

  useEffect(() => {
    if (navRef.current) {
      const observer = observeElement(navRef.current)
      return () => observer.disconnect()
    }
  }, [observeElement])

  const navItems = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ]

  return (
    <div className="sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav ref={navRef} className="flex justify-center py-4 sm:py-6 fade-in-down">
          <div className="flex space-x-8 sm:space-x-16 md:space-x-24 lg:space-x-40">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={
                  activeSection === item.id
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-sm sm:text-base md:text-lg transition-all duration-300"
                    : "text-gray-300 hover:text-white font-medium text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105"
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
} 