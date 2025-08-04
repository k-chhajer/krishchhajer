import Link from "next/link"

export function Resume() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I&apos;m looking for Summer 2026 PEY/Internships and would love to discuss any opportunities in Machine Learning, Robotics and Hardware Engineering
          </p>
        </div>

        {/* Direct PDF Display */}
        <div className="w-full h-[1000px] rounded-lg overflow-hidden">
          <object
            data="/Chhajer_Krish_Resume.pdf"
            type="application/pdf"
            className="w-full h-full"
          >
            <p className="text-gray-400 p-8 text-center">
              Your browser doesn&apos;t support PDF viewing. 
              <Link href="/Chhajer_Krish_Resume.pdf" target="_blank" className="text-cyan-400 hover:text-cyan-300 ml-2">
                Click here to view the PDF
              </Link>
            </p>
          </object>
        </div>
      </div>
    </section>
  )
} 