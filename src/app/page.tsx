"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("experience")

  const renderSection = () => {
    switch (activeSection) {
      case "experience":
        return <Experience />
      case "projects":
        return <Projects />
      default:
        return <Experience />
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <main>
        <Hero />
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        {renderSection()}
      </main>
    </div>
  )
}
