"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useFadeInAnimation } from "@/lib/utils"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  tags: string[]
  date: string
}

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const titleRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)
  const { observeElement } = useFadeInAnimation()

  useEffect(() => {
    if (titleRef.current) {
      const observer = observeElement(titleRef.current)
      return () => observer.disconnect()
    }
  }, [observeElement])

  useEffect(() => {
    if (filterRef.current) {
      const observer = observeElement(filterRef.current)
      return () => observer.disconnect()
    }
  }, [observeElement])

  const filterTags = [
    { id: "all", label: "all projects" },
    { id: "deep-learning", label: "deep learning" },
    { id: "hardware", label: "hardware" },
    { id: "verilog", label: "verilog" },
    { id: "robotics", label: "robotics" },
    { id: "ai-agents", label: "ai agents" },
    { id: "software", label: "software" },
  ]

  const projects: Project[] = [
    {
      title: "AIM: LLM powered GIS Maps",
      description:
        "LLM powered Mapping Application developed using OpenStreetMap in C++. Features intelligent route planning and semantic retrieval of points of interest.",
      image: "/aim.png",
      technologies: ["C++", "Djikstra", "OpenGL", "Langchain"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "ai-agents", "software"],
      date: "2025",
    },
    {
      title: "AutoGrid AI (IEEE SEGE 2025)",
      description:
        "Deep Reinforcement Learning Framework for Autonomous Microgrid Management with Transformer based Forecasting and real time monitoring dashboard",
      image: "/autogrid_ai.png",
      technologies: ["RL", "Gym", "Next.js", "Transformers"],
      githubUrl: "https://github.com/kennykguo/autogrid-ai",
      tags: ["all", "deep-learning", "software"],
      date: "2025",
    },
    {
      title: "VisionWise",
      description:
        "Currently working on LLM powered evaluation framework for evaluating VLA Policies in Robotics. Integrating Isaac-Sim for realistic simulation environments.",
      image: "/visionwise.png",
      technologies: ["Python", "Isaac-Sim", "Transformers", "LLMs"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "ai-agents", "robotics"],
      date: "2025",
    },
    {
      title: "J.O.S.H",
      description:
        "Jetson and STM32 powered Humanoid Robot in development. Features advanced firmware for real-time control and autonomous behavior.",
      image: "/josh.jpg",
      technologies: ["Rust", "STM32", "Firmware"],
      githubUrl: "https://github.com/k-chhajer/J.O.S.H",
      tags: ["all", "hardware", "robotics"],
      date: "2025",
    },
    {
      title: "Pacman (Verilog Edition)",
      description:
        "A twist on the classic Pacman, implemented from scratch in Verilog on DE1-SoC. Features interactive gameplay with VGA display and audio feedback.",
      image: "/placeholder.svg",
      technologies: ["Verilog", "FPGAs", "Digital Logic"],
      githubUrl: "https://github.com/k-chhajer/pacman_on_verilog",
      tags: ["all", "verilog", "hardware"],
      date: "2024",
    },
    {
      title: "FPGA controlled Lego Robot",
      description:
        "2 wheel Lego Cart controlled using DE1-SoC and Nios V to move around and dance to some music. Features real-time motor control and audio synchronization.",
      image: "/placeholder.svg",
      technologies: ["C", "Nios V", "FPGAs"],
      githubUrl: "https://github.com/k-chhajer/lego-robot-nios-v",
      tags: ["all", "hardware", "robotics"],
      date: "2025",
    },
    {
      title: "RespiraCheck",
      description:
        "Deep Learning Pipeline to detect Covid from Coughs. Built comprehensive ML pipeline with web interface for real-time analysis.",
      image: "/RespiraCheck.png",
      technologies: ["Python", "PyTorch", "Next.js", "FastAPI"],
      githubUrl: "https://github.com/jnnchi/RespiraCheck",
      tags: ["all", "deep-learning", "software"],
      date: "2024",
    },
    {
      title: "Fall Detection and Gait Pattern Analysis",
      description:
        "A CNN-LSTM based Deep Learning Pipeline to detect Falls (tested IRL) from any phone using IMU sensors with 92%+ test accuracy.",
      image: "/fall_detection.png",
      technologies: ["Python", "PyTorch", "Neural Networks"],
      githubUrl: "https://github.com/k-chhajer/gaitanalysis",
      tags: ["all", "deep-learning", "software"],
      date: "2024",
    },
    {
      title: "TrashTalker",
      description:
        "Arduino powered smart waste segregation garbage bin. Features intelligent sorting and IoT connectivity for waste management optimization.",
      image: "/trashtalker.jpg",
      technologies: ["C++", "Arduino", "IoT"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "hardware", "robotics"],
      date: "2024",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This website built with modern web technologies. Features responsive design and smooth animations for optimal user experience.",
      image: "/personal_website.png",
      technologies: ["TypeScript", "Next.js", "Frontend"],
      githubUrl: "https://github.com/k-chhajer/krishchhajer",
      tags: ["all", "software"],
      date: "2025",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "all") return true
    return project.tags.includes(selectedFilter)
  })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            I love building products at the intersection of Machine Learning, Software and Hardware. Some of the stuff I&apos;ve built before are...
          </p>
        </div>

        {/* Filter Tags - Updated to match Experience section style */}
        <div ref={filterRef} className="mb-12 fade-in delay-200">
          <div className="flex flex-wrap justify-center gap-3">
            {filterTags.map((tag) => (
              <Button
                key={tag.id}
                variant="ghost"
                size="sm"
                onClick={() => setSelectedFilter(tag.id)}
                className={
                  selectedFilter === tag.id
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold hover:bg-transparent"
                    : "text-gray-300 hover:text-white bg-transparent hover:bg-transparent"
                }
              >
                {tag.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            // Calculate row-based delays: items in same row get same delay
            const row = Math.floor(index / 3) // 3 columns per row
            const delayClass = `delay-${(row + 1) * 100}`
            return (
              <ProjectItem 
                key={index} 
                project={project} 
                delayClass={delayClass}
                observeElement={observeElement}
              />
            )
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 fade-in">
            <p className="text-gray-400 text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}

// Separate component for individual project items with their own observer
function ProjectItem({ project, delayClass, observeElement }: { 
  project: Project, 
  delayClass: string,
  observeElement: (element: HTMLElement) => IntersectionObserver
}) {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (itemRef.current) {
      const observer = observeElement(itemRef.current)
      return () => observer.disconnect()
    }
  }, [observeElement])

  return (
    <div ref={itemRef} className={`project-item group/project fade-in ${delayClass} transition-all duration-300`}>
      <Card className="border border-gray-700 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 overflow-hidden h-full opacity-100 brightness-100 hover:opacity-100 hover:brightness-100">
        <div className="h-full rounded-lg">
          <div className="relative overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className={`w-full h-64 transition-all duration-500 group-hover:scale-110 ${
                project.title === "Fall Detection and Gait Pattern Analysis" 
                  ? "object-cover object-top" 
                  : "object-cover"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute top-3 right-3 bg-black/60 rounded-full px-3 py-1">
              <span className="text-white text-xs font-medium">{project.date}</span>
            </div>
          </div>
          <CardContent className="p-5">
            <h3 className="text-lg font-semibold text-white mb-2 transition-colors duration-300">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 transition-colors duration-300">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.map((tech: string, techIndex: number) => (
                <Badge key={techIndex} variant="outline" className="badge border-gray-600 text-gray-300 text-xs transition-all duration-300">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="project-button border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent flex-1 transition-all duration-300"
              >
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
} 