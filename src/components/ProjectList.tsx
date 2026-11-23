import type { Project } from "@/lib/projects"

export default function ProjectList({ items }: { items: Project[] }) {
  return (
    <ul className="project-list">
      {items.map((project) => (
        <li key={project.title}>
          <a
            className="project-row"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="project-title">{project.title}</span>
            <span className="project-description">{project.description}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
