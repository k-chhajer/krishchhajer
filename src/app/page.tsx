import LocalTime from "@/components/LocalTime"
import PortfolioFooter from "@/components/PortfolioFooter"
import ProjectList from "@/components/ProjectList"
import { projects } from "@/lib/projects"

export default function Home() {
  return (
    <main id="main-content" className="portfolio-shell">
      <header className="profile-header">
        <div>
          <h1 className="name">Krish Chhajer</h1>
          <p className="profile-role">Electrical &amp; Computer Engineering</p>
        </div>
        <LocalTime />
      </header>

      <div className="bio">
        <p>
          Incoming Embedded SWE at{" "}
          <a className="text-link" href="https://www.qualcomm.com/" target="_blank" rel="noopener noreferrer">
            Qualcomm
          </a>
          . I study Electrical &amp; Computer Engineering at the{" "}
          <a className="text-link" href="https://www.ece.utoronto.ca/" target="_blank" rel="noopener noreferrer">
            University of Toronto
          </a>
          .
        </p>
        <p>
          Researching multi-agent systems, reinforcement learning, and performance
          engineering. Engineering lead at{" "}
          <a className="text-link" href="https://torontohackerfab.com/" target="_blank" rel="noopener noreferrer">
            Toronto Hacker Fab
          </a>
          .
        </p>
      </div>

      <section className="portfolio-section" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="section-heading">Projects</h2>
        <ProjectList items={projects.filter((project) => project.kind !== "research")} />
      </section>

      <section className="portfolio-section" aria-labelledby="research-heading">
        <h2 id="research-heading" className="section-heading">Research</h2>
        <ProjectList items={projects.filter((project) => project.kind === "research")} />
      </section>

      <section className="portfolio-section contact-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="section-heading">Contact</h2>
        <div className="contact-row">
          <p>Always happy to talk about hardware, AI, and things worth building.</p>
          <a className="email-link" href="mailto:krishchhajer10@gmail.com">
            Email me
          </a>
        </div>
      </section>

      <PortfolioFooter />
    </main>
  )
}
