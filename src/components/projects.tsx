"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filterTags = [
    { id: "all", label: "all projects" },
    { id: "deep-learning", label: "deep learning" },
    { id: "hardware", label: "hardware" },
    { id: "verilog", label: "verilog" },
    { id: "robotics", label: "robotics" },
    { id: "ai-agents", label: "ai agents" },
    { id: "software", label: "software" },
  ]

  const projects = [
    {
      title: "AIM: LLM agent powered Mapping Application",
      description:
        "LLM agent powered Mapping Application developed using OpenStreetMap in C++. Features intelligent route planning and semantic retrieval of points of interest.",
      image: "/aim.png",
      technologies: ["C++", "Djikstra", "TSP", "Langchain"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "ai-agents", "software"],
    },
    {
      title: "Pacman on FPGA",
      description:
        "A twist on the classic Pacman, implemented from scratch in Verilog on DE1-SoC. Features interactive gameplay with VGA display and audio feedback.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Verilog", "FSM", "Digital Logic"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "verilog", "hardware"],
    },
    {
      title: "AutoGrid AI",
      description:
        "Deep Reinforcement Learning Framework for Autonomous Microgrid Management. Built comprehensive OpenAI Gym environment with SOTA Transformer models for forecasting.",
      image: "/dashboard.png",
      technologies: ["RL", "Gym", "Next.js", "Transformers"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "deep-learning", "software"],
    },
    {
      title: "Fall Detection and Gait Pattern Analysis",
      description:
        "A Deep Learning Pipeline to detect Falls (tested IRL) from any phone using IMU sensors with 92%+ test accuracy. Implemented CNN-LSTM architecture.",
      image: "/dashboard.png",
      technologies: ["Python", "PyTorch", "CNN-LSTM"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "deep-learning", "software"],
    },
    {
      title: "VisionWise",
      description:
        "Currently working on LLM powered evaluation framework for evaluating VLA Policies in Robotics. Integrating Isaac-Sim for realistic simulation environments.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Isaac-Sim", "Transformers", "LLMs"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "ai-agents", "robotics"],
    },
    {
      title: "TrashTalker",
      description:
        "Arduino powered smart waste segregation garbage bin. Features intelligent sorting and IoT connectivity for waste management optimization.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["IoT", "Arduino", "C++"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "hardware", "robotics"],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This website built with modern web technologies. Features responsive design and smooth animations for optimal user experience.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["TypeScript", "Next.js", "Frontend"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "software"],
    },
    {
      title: "FPGA controlled Lego Robot",
      description:
        "2 wheel Lego Cart controlled using DE1-SoC and Nios V to move around and dance to some music. Features real-time motor control and audio synchronization.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["C", "Nios V", "FPGAs"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "hardware", "robotics"],
    },
    {
      title: "RespiraCheck",
      description:
        "Deep Learning Pipeline to detect Covid from Coughs. Built comprehensive ML pipeline with web interface for real-time analysis.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "PyTorch", "Next.js", "FastAPI"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "deep-learning", "software"],
    },
    {
      title: "J.O.S.H",
      description:
        "Jetson and STM32 powered Humanoid Robot in development. Features advanced firmware for real-time control and autonomous behavior.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Rust", "STM32", "Firmware"],
      githubUrl: "https://github.com/k-chhajer",
      tags: ["all", "hardware", "robotics"],
    },
  ]

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "all") return true
    return project.tags.includes(selectedFilter)
  })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            I love building products at the intersection of Machine Learning, Software and Hardware. Some of the stuff I&apos;ve built before are...
          </p>
        </div>

        {/* Filter Tags - Updated to match Experience section style */}
        <div className="mb-12">
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
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group">
              <Card className="border-0 bg-transparent hover:border-2 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-green-500 hover:p-[2px] transition-all duration-300 overflow-hidden h-full">
                <div className="bg-black h-full rounded-lg">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent flex-1"
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
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  )
} 