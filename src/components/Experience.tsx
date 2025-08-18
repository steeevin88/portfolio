"use client"
import Link from "next/link"

import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import ReactCardFlip from "react-card-flip"
import Image from "next/image"

type Experience = {
  photoUrl: string
  title: string
  company: string
  dateRange: string
  description: string
  skills?: string
  brandColor: string
}

export default function Experience() {
  const experienceData: Experience[] = [
    {
      photoUrl: "experience_images/tesla.png",
      title: "Software Engineer Intern",
      company: "Tesla",
      dateRange: "August 2025 - December 2025",
      description: "Vehicle Software (<b>Infotainment</b>) 🚗",
      skills: "Linux, Jenkins, Docker",
      brandColor: "from-red-800 to-red-700",
    },
    {
      photoUrl: "experience_images/meta.png",
      title: "Software Engineer Intern",
      company: "Meta",
      dateRange: "May 2025 - August 2025",
      description: "Built third-party ticketing platform integrations for <b>Facebook's Events Product Team</b> 🗓️",
      skills: "PHP/Hack, React, React Native",
      brandColor: "from-blue-800 to-blue-700",
    },
    {
      photoUrl: "experience_images/fetch.png",
      title: "Software Engineer Intern",
      company: "Fetch.ai",
      dateRange: "August 2024 - December 2024",
      description: "Worked on a TypeScript implementation of Fetch.ai's <b>uAgents</b> package 🚀",
      skills: "Python, TypeScript, Jest, CI/CD",
      brandColor: "from-purple-900 to-purple-800",
    },
    {
      photoUrl: "experience_images/usgs.png",
      title: "Software Engineer Intern",
      company: "United States Geological Survey (USGS)",
      dateRange: "May 2024 - September 2024",
      description: "Built an <b>earthquake response platform</b> for the Crustal Deformation Team 🌎",
      skills: "HTML/CSS, React.js, Python, GeoJSON, Docker, NGINX",
      brandColor: "from-green-800 to-green-700",
    },
    {
      photoUrl: "experience_images/ibm.png",
      title: "Software Track Participant",
      company: "IBM Accelerate",
      dateRange: "June 2024 - August 2024",
      description: "Participated in IBM's <b>8-week summer program</b> focused on full-stack development 🖥️",
      skills: "HTML/CSS, React.js, Jest",
      brandColor: "from-blue-900 to-blue-800",
    },
    {
      photoUrl: "experience_images/sjsu_coe.png",
      title: "Software Engineer Intern",
      company: "SJSU College of Engineering",
      dateRange: "December 2023 - January 2024",
      description: "Created a transit prediction service (SCEta) for a club of 500+ students 🚌",
      skills: "Docker, React.js, TailwindCSS, FastAPI, Prometheus",
      brandColor: "from-amber-700 to-amber-600",
    },
    {
      photoUrl: "experience_images/sce.png",
      title: "Development Team Officer",
      company: "Software and Computer Engineering Society",
      dateRange: "March 2023 - Present",
      description: "Developed projects with aspiring software engineering students 🧠",
      skills: "Git, HTML/CSS, Next.js, React.js, TailwindCSS, Docker",
      brandColor: "from-indigo-800 to-indigo-700",
    },
    {
      photoUrl: "experience_images/sjsu.png",
      title: "Instructional Student Assistant",
      company: "SJSU Computer Science Department",
      dateRange: "March 2023 - December 2023",
      description: "Student grader and mentor for SJSU's Introduction to Programming course (CS46A) 🏫",
      skills: "Java, Eclipse IDE",
      brandColor: "from-blue-900 to-blue-800",
    },
    {
      photoUrl: "experience_images/google.png",
      title: "Google CSSI Participant",
      company: "Google",
      dateRange: "June 2022 - August 2022",
      description: "Partook in a 4-week computer science program led by software engineers at Google ☀️",
      skills: "HTML/CSS, Bulma (CSS Framework), Javascript",
      brandColor: "from-red-700 to-orange-600",
    },
  ]

  return (
    <section
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#7C909A] to-gray-300"
      id="experience"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">EXPERIENCES</h2>
          <p className="text-xl text-gray-600">My professional journey so far</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="#projects">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              View Projects
            </button>
          </Link>
        </div>
      </div>
      <ChevronDown className="animate-bounce mt-12 w-8 h-8 mx-auto text-gray-600" />
    </section>
  )
}

function ExperienceCard({
  photoUrl,
  title,
  company,
  dateRange,
  description,
  skills,
  brandColor,
}: {
  photoUrl: string
  title: string
  company: string
  dateRange: string
  description: string
  skills?: string
  brandColor: string
}) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  const skillsArray = skills ? skills.split(", ").map((skill) => skill.trim()) : []

  return (
    <div
      className="w-full max-w-sm mx-auto mb-2 cursor-pointer h-[400px] group transition-all duration-500 hover:-translate-y-2"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front Side */}
        <div className="w-full h-[400px] bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-2xl overflow-hidden flex flex-col text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-500 relative [backface-visibility:hidden] [transform-style:preserve-3d]">
          <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
            <Image
              src={photoUrl || "/placeholder.svg"}
              alt={`${company} logo`}
              width={300}
              height={350}
              className="object-contain max-h-full relative z-10 drop-shadow-sm transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight group-hover:text-gray-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 mb-2 font-medium">{company}</p>
            <p className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">{dateRange}</p>
          </div>
          <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 flex justify-center items-center mt-auto border-t border-gray-200">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Back Side */}
        <div className="w-full h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-500 relative [backface-visibility:hidden] [transform-style:preserve-3d]">
          {/* Header with company branding */}
          <div className={`bg-gradient-to-r ${brandColor} p-4 text-white`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={photoUrl || "/placeholder.svg"}
                  alt={`${company} logo`}
                  width={24}
                  height={24}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">{title}</h3>
                <p className="text-white/80 text-sm">{company}</p>
              </div>
            </div>
            <div className="text-xs text-white/70 bg-black/15 px-2 py-1 rounded-full inline-block">
              {dateRange}
            </div>{" "}
          </div>

          {/* Content area */}
          <div className="p-5 flex-grow flex flex-col">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">What I Did</h4>
              <div
                className="text-gray-800 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            {skillsArray.length > 0 && (
              <div className="mt-auto">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {skillsArray.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gradient-to-r from-gray-400 to-gray-500 text-white text-xs font-medium rounded-full shadow-sm hover:shadow-md transition-shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 bg-white/90 flex justify-center items-center border-t border-gray-200">
            <ChevronRight className="w-5 h-5 text-gray-400 transform rotate-180" />
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}
