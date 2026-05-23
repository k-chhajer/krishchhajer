"use client"

import TorontoSkyline from "@/components/TorontoSkyline"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useCallback, useState } from "react"

type Project = {
  title: string
  href?: string
  description: string
}

const projects: Project[] = [
  {
    title: "TALOS",
    href: "https://www.talos.wtf/",
    description: "building neural nets in hardware really fast.",
  },
  {
    title: "A.I.M",
    href: "https://github.com/k-chhajer/A.I.M",
    description: "cpp maps built for fast routing and agentic exploration.",
  },
  {
    title: "Hackerfab Toronto",
    href: "https://www.torontohackerfab.com/projects",
    description:
      "making chips in our backyard, backed by Emergent Ventures.",
  },
  {
    title: "AutoGrid AI",
    href: "https://arxiv.org/abs/2509.03666",
    description: "optimizing microgrids with RL and transformer forecasting (in collab with RBC Borealis AI).",
  },
  {
    title: "RLCDev",
    href: "https://www.rlcdev.app/",
    description: "leetcode for EEs (got 50k+ views and 1000+ users).",
  },
]

export default function ProjectsPage() {
  const [skylineReady, setSkylineReady] = useState(false)
  const handleSkylineReady = useCallback(() => {
    setSkylineReady(true)
  }, [])

  return (
    <div className="page-container">
      <TorontoSkyline onReady={handleSkylineReady} />

      <main className={`content-area projects-content-area ${skylineReady ? "content-area--ready" : ""}`}>
        <Link href="/" className="back-link">
          <ArrowLeft size={14} aria-hidden="true" />
          Home
        </Link>

        <h1 className="name">some of the things I've worked on...</h1>

        <section className="projects" aria-label="Project list">
          <div className="project-list">
            {projects.map((project) => {
              const content = (
                <>
                  <div className="project-header">
                    <h2>{project.title}</h2>
                  </div>

                  <p className="project-description">{project.description}</p>
                </>
              )

              return project.href ? (
                <a
                  className="project-item project-item--link"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.title}
                >
                  {content}
                </a>
              ) : (
                <article className="project-item" key={project.title}>
                  {content}
                </article>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
