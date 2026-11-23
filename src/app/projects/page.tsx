import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import PortfolioFooter from "@/components/PortfolioFooter"
import ProjectList from "@/components/ProjectList"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects — Krish Chhajer",
  description: "Projects in hardware, machine learning, and electrical engineering by Krish Chhajer.",
}

export default function ProjectsPage() {
  return (
    <main id="main-content" className="portfolio-shell projects-page">
      <Link href="/" className="back-link">
        <ArrowLeft size={14} aria-hidden="true" />
        Home
      </Link>

      <header className="page-heading">
        <h1 className="name">Projects</h1>
        <p>Some of the things that keep me up at night.</p>
      </header>

      <section className="portfolio-section" aria-label="All projects">
        <ProjectList items={projects} />
      </section>

      <PortfolioFooter />
    </main>
  )
}
