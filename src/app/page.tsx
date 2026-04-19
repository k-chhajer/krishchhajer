"use client"

import TorontoSkyline from "@/components/TorontoSkyline"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="page-container">
      <main className="content-area">
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
            <a href="https://hackerfab.org/" target="_blank" rel="noopener noreferrer">
              Hacker Fab
            </a>
            .
          </p>

        </div>

        <div className="social-links">
          <a href="https://x.com/krish_chhajer" target="_blank" rel="noopener noreferrer" aria-label="X">
            <Twitter size={18} />
          </a>
          <a href="https://github.com/k-chhajer" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/krishchhajer/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:krish.chhajer@mail.utoronto.ca" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </main>

      <TorontoSkyline />
    </div>
  )
}