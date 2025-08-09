"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { useFadeInAnimation } from "@/lib/utils"

interface Experience {
  title: string
  company: string
  companyLogo?: string
  location: string
  period: string
  description: string
}

export function Experience() {
  const titleRef = useRef<HTMLDivElement>(null)
  const { observeElement } = useFadeInAnimation()

  useEffect(() => {
    if (titleRef.current) {
      const observer = observeElement(titleRef.current)
      return () => observer.disconnect()
    }
  }, [observeElement])

  const experiences = [
    {
      title: "Robotics & RL Researcher",
      company: "Dynamic Optimization and Reinforcement Learning Lab",
      companyLogo: "/university_of_toronto_logo.jpeg",
      location: "Toronto, ON",
      period: "May 2025 - Present",
      description:
        "Working on developing LLM powered evaluation metrics for Robot policies. Researching and implementing advanced evaluation frameworks that leverage multimodal large language models to assess robotic policy performance (Supervisor: Prof. Chi-Guhn Lee).",
    },
    {
      title: "Student Researcher",
      company: "RBC Borealis",
      companyLogo: "/borealis_ai_logo.jpeg",
      location: "Toronto, ON",
      period: "February 2025 - May 2025",
      description:
        "Developed a Reinforcement Learning agent with Proximal Policy Optimization (PPO) for real-time microgrid management. Built comprehensive OpenAI Gym to simulate 3 different microgrid configurations, utilizing SOTA Transformer models for forecasting weather parameters, improving policy robustness. Designed an interactive dashboard for real-time monitoring and control of the microgrid. Work accepted at IEEE SEGE 2025.",
    },
    {
      title: "Machine Learning Researcher",
      company: "Neural Engineering Lab",
      companyLogo: "/bme_uoft_logo.jpeg",
      location: "Toronto, ON",
      period: "October 2024 - Present",
      description:
        "Developed and evaluated Random Forest, Decision Tree, and Linear Regression models to predict blood pressure using Electro-Vascular Gram signals. Applied window sampling and feature extraction signal processing techniques to preprocess the data. Optimized legacy models and identified top predictive features. Currently working on machine learning for physiological signal forecasting and improving lab's web infrastructure (Supervisor: Prof. Paul Yoo).",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        <div ref={titleRef} className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'
            return (
              <ExperienceItem 
                key={index} 
                exp={exp} 
                delayClass={delayClass}
                observeElement={observeElement}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Separate component for individual experience items with their own observer
function ExperienceItem({ exp, delayClass, observeElement }: { 
  exp: Experience, 
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
    <div ref={itemRef} className={`fade-in ${delayClass}`}>
      <Card className="border-0 bg-transparent">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
              <div className="flex items-center gap-3">
                {exp.companyLogo && (
                  <Image
                    src={exp.companyLogo}
                    alt={`${exp.company} logo`}
                    width={40}
                    height={40}
                    className="rounded-lg object-contain"
                  />
                )}
                <p className="gradient-text font-medium">{exp.company}</p>
              </div>
            </div>
            <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-gray-400">
              <div className="flex items-center mb-1">
                <Calendar className="h-4 w-4 mr-1" />
                {exp.period}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {exp.location}
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-justify">{exp.description}</p>
        </CardContent>
      </Card>
    </div>
  )
} 