import { projects } from "@/lib/projects"

// Served at /llms.txt (https://llmstxt.org): a plain-text summary of the site for language models.
// Projects come from src/lib/projects.ts, so this stays in sync with the homepage.

export const dynamic = "force-static"

const SITE_URL = "https://krishchhajer.com"

const formatProjects = (items: typeof projects) =>
  items.map((project) => `- [${project.title}](${project.href}): ${project.description}`).join("\n")

export function GET() {
  const body = `# Krish Chhajer

> Electrical & Computer Engineering student at the University of Toronto and incoming Embedded Software Engineer at Qualcomm. Works on machine learning, hardware, and AI systems.

Krish researches multi-agent systems, reinforcement learning, and performance engineering, and is engineering lead at [Toronto Hacker Fab](https://torontohackerfab.com/).

## Projects

${formatProjects(projects.filter((project) => project.kind !== "research"))}

## Research

${formatProjects(projects.filter((project) => project.kind === "research"))}

## Contact

- [Email](mailto:krishchhajer10@gmail.com): Always happy to talk about hardware, AI, and things worth building.
- [X](https://x.com/krish_chhajer)
- [GitHub](https://github.com/k-chhajer)
- [Google Scholar](https://scholar.google.com/citations?user=m-YwESAAAAAJ&hl=en&oi=ao)

## Optional

- [Homepage](${SITE_URL}/): Bio, projects, research, and contact.
- [All projects](${SITE_URL}/projects): Full project list.
`

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
