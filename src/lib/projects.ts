export type Project = {
  title: string
  href: string
  description: string
  kind: "hardware" | "routing" | "fabrication" | "research" | "learning"
}

export const projects: Project[] = [
  {
    title: "TALOS",
    href: "https://www.talos.wtf/",
    description: "Building neural nets in hardware, really fast.",
    kind: "hardware",
  },
  {
    title: "A.I.M",
    href: "https://github.com/k-chhajer/A.I.M",
    description: "C++ maps for fast routing and agentic exploration.",
    kind: "routing",
  },
  {
    title: "Hackerfab Toronto",
    href: "https://www.torontohackerfab.com/projects",
    description: "Making chips in our backyard, backed by Emergent Ventures.",
    kind: "fabrication",
  },
  {
    title: "AutoGrid AI",
    href: "https://arxiv.org/abs/2509.03666",
    description: "Optimizing microgrids with RL and transformer forecasting, in collaboration with RBC Borealis AI.",
    kind: "research",
  },
  {
    title: "RLCDev",
    href: "https://www.rlcdev.app/",
    description: "LeetCode for electrical engineers.",
    kind: "learning",
  },
]
