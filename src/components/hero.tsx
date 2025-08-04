import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      
      {/* Animated gradient line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 gradient-line-animation"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
                         <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              <span className="gradient-text">Krish Chhajer</span>
             </h1>

             <div className="mb-8">
               <p className="text-xl text-gray-300 mb-4">ECE @ University of Toronto</p>
               <p className="text-lg text-gray-400 leading-relaxed">
                 Third year Computer Engineering student at the University of Toronto. Building intelligent systems around AI, Robotics and Hardware. 
               </p>
             </div>

             {/* Social Links */}
             <div className="flex space-x-4">
               <Link 
                 href="https://github.com/k-chhajer" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 group"
               >
                 <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
               </Link>
               <Link 
                 href="https://www.linkedin.com/in/krish-chhajer/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
               >
                 <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
               </Link>
               <Link 
                 href="mailto:krish.chhajer@mail.utoronto.ca"
                 className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-green-500 hover:text-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 group"
               >
                 <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
               </Link>
             </div>
          </div>

          {/* Right side - Picture */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden gradient-border glow-effect">
                <div className="gradient-border-content rounded-full">
                                     <Image
                     src="/myphoto.png"
                     alt="Krish Chhajer"
                     width={400}
                     height={400}
                     className="w-full h-full object-cover object-top rounded-full"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 