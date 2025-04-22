'use client';
import Link from "next/link";
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Image from 'next/image';

type Experience = {
  photoUrl: string;
  title: string;
  company: string;
  dateRange: string;
  description: React.ReactNode;
  skills?: string;
}

export default function Experience() {
  const experienceData: Experience[] = [
    {
      photoUrl:'experience_images/meta.png',
      title:'Software Engineering Intern',
      company:'Meta',
      dateRange:'Incoming Summer 2025',
      description:
        <>
          • Menlo Park 🏠<br/>
        </>,
      skills: '',
    },
    {
      photoUrl:'experience_images/fetch.png',
      title:'Software Engineering Intern',
      company:'Fetch.ai',
      dateRange:'August 2024 - December 2024',
      description:
        <>
          • Worked on a TypeScript implementation of Fetch.ai&apos;s uAgents framework 🚀<br/>
        </>,
      skills: 'Skills: Python, TypeScript, Jest, CI/CD',
    },
    {
      photoUrl:'experience_images/usgs.png',
      title:'Software Engineering Intern',
      company:'United States Geological Survey (USGS)',
      dateRange:'May 2024 - September 2024',
      description:
        <>
          • Built an earthquake response platform for the Crustal Deformation Team 🌎<br/>
        </>,
      skills: 'Skills: HTML/CSS, React.js, Python, Folium, Docker, NGINX',
    },
    {
      photoUrl:'experience_images/ibm.png',
      title:'Software Track Participant',
      company:'IBM Accelerate',
      dateRange:'June 2024 - August 2024',
      description:
        <>
          • Participated in IBM&apos;s 8-week summer program focused on full-stack development 🖥️<br/>
        </>,
      skills: 'Skills: HTML/CSS, React.js, Jest',
    },
    {
      photoUrl:'experience_images/sjsu_coe.png',
      title:'Software Engineering Intern',
      company:'SJSU College of Engineering',
      dateRange:'December 2023 - January 2024',
      description:
        <>
          • Created a transit prediction service (SCEta) for a club of 500+ students 🚌<br/>
        </>,
      skills: 'Skills: Docker, React.js, TailwindCSS, FastAPI, Prometheus',
    },
    {
      photoUrl:'experience_images/sce.png',
      title:'Development Team Officer',
      company:'Software and Computer Engineering Society',
      dateRange:'March 2023 - Present',
      description:
        <>
          • Developing projects with aspiring software engineering students 🧠<br/>
        </>,
      skills: 'Skills: Git, HTML/CSS, Next.js, React.js, TailwindCSS, Docker',
    },
    {
      photoUrl:'experience_images/sjsu.png',
      title:'Instructional Student Assistant',
      company:'SJSU Computer Science Department',
      dateRange:'March 2023 - December 2023',
      description:
        <>
          • Student grader and mentor for SJSU&apos;s Introduction to Programming course (CS46A)<br/>
        </>,
      skills: 'Skills: Java, Eclipse IDE',
    },
    {
      photoUrl:'experience_images/google.png',
      title:'Google CSSI Participant',
      company:'Google',
      dateRange:'June 2022 - August 2022',
      description:
        <>
          • Partook in a 4-week computer science program led by software engineers at Google<br/>
        </>,
        skills: 'Skills: HTML/CSS, Bulma (CSS Framework), Javascript',
    },
  ];

  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#7C909A] to-gray-300" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">EXPERIENCES</h2>
          <p className="text-xl text-gray-600">My professional journey so far</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href='#projects'>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              View Projects
            </button>
          </Link>
        </div>
      </div>
      <ChevronDown className="animate-bounce mt-12 w-8 h-8 mx-auto text-gray-600" />
    </section>
  );
}

function ExperienceCard({ photoUrl, title, company, dateRange, description, skills }: { photoUrl: string; title: string; company: string; dateRange: string; description: React.ReactNode; skills?: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-sm mx-auto mb-2 cursor-pointer h-[400px]" onClick={handleClick}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front Side */}
        <div className="w-full h-[400px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col text-center">
          <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
            <Image
              src={photoUrl}
              alt={`${company} logo`}
              width={350}
              height={350}
              className="object-contain max-h-full"
            />
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{company}</p>
            <p className="text-sm text-gray-500">{dateRange}</p>
          </div>
          <div className="px-6 py-4 bg-gray-50 flex justify-between items-center mt-auto">
            <span className="text-sm text-gray-600">Click to view details</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Back Side */}
        <div className="w-full h-[400px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <div className="p-6 flex-grow overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{company}</p>
            <div className="text-sm text-gray-700 space-y-2 mb-4">{description}</div>
            {skills && (
              <div className="text-sm text-gray-600 font-medium mt-4">{skills}</div>
            )}
          </div>
          <div className="px-6 py-4 bg-gray-50 flex justify-between items-center mt-auto">
            <span className="text-sm text-gray-600">Click to go back</span>
            <ChevronRight className="w-5 h-5 text-gray-400 transform rotate-180" />
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
