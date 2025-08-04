import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"

export function Experience() {
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index}>
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
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 