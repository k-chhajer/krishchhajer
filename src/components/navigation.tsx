"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
  ]

  return (
    <div className="sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center py-6">
          <div className="flex space-x-40">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={
                  activeSection === item.id
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-lg transition-all duration-300"
                    : "text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 hover:scale-105"
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