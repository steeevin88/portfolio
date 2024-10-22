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
      photoUrl:'https://github.com/user-attachments/assets/ab9c455c-edc7-449c-bf61-06a16601f02a',
      title:'Software Engineering Intern',
      company:'Fetch.ai',
      dateRange:'August 2024 - December 2024',
      description:
        <>
          • Working with software engineers in developing Python&apos;s uAgents framework, supporting autonomous AI agent solutions <br/>
          • Developing an NPM package for the uAgents framework, enhancing cross-platform compatibility for TypeScript users <br/>
        </>,
      skills: 'Skills: Python, TypeScript, Jest, CI/CD',
    },
    {
      photoUrl:'https://github.com/user-attachments/assets/74dffcf0-a90f-44c4-b3fb-f0ba89aec65b',
      title:'Software Engineering Intern',
      company:'United States Geological Survey (USGS)',
      dateRange:'May 2024 - September 2024',
      description:
        <>
          • Developed an internal earthquake response platform to assist scientists in visualizing real-time seismic activity <br/>
          • Constructed interactive maps displaying GeoJSON data for 100+ earthquakes with Python&apos;s Folium and PyGDAL <br/>
          • Administered application deployment to an internal Rocky Linux Server accessed by 15+ inter-team researchers <br/>
          • Reduced search latency by approximately &#126;20% by optimizing AutoSSH and SQLAlchemy connection settings <br/>
        </>,
      skills: 'Skills: HTML/CSS, React.js, Python, Folium, Docker, NGINX',
    },
    {
      photoUrl:'https://github.com/user-attachments/assets/579c08d4-6674-4f6a-b81f-1dfd1eee54b1',
      title:'Software Track Participant',
      company:'IBM Accelerate',
      dateRange:'June 2024 - August 2024',
      description:
        <>
          • Participated in IBM&apos;s 8-week summer program focused on agile methodologies and cloud-native development <br/>
          • Redesigned frontend test suites written in Jest to ensure proper data retrieval from Express.js backends <br/>
          • Collaborated with engineers to develop scalable full-stack applications on IBM&apos;s cloud infrastructure <br/>
        </>,
      skills: 'Skills: HTML/CSS, React.js, Jest',
    },
    {
      photoUrl:'https://github.com/steeevin88/portfolio/assets/59713070/0738527b-ab14-4029-902a-4789e6a8dc60',
      title:'Software Engineering Intern',
      company:'SJSU College of Engineering',
      dateRange:'December 2023 - January 2024',
      description:
        <>
          • Built a transit prediction service with Python&apos;s FastAPI, 511 SF Bay&apos;s Portal, and Docker for a club of 500+ users<br/>
          • Used multithreading to update cached bus arrival data, minimizing API calls and request response time<br/>
          • Implemented API latency logging using Prometheus, providing performance metrics of 4000+ API calls monthly<br/>
          • Added custom Prometheus metrics for tracking API request latency and HTTP response codes<br/>
        </>,
      skills: 'Skills: Docker, React.js, TailwindCSS, FastAPI, Prometheus',
    },
    {
      photoUrl:'https://github.com/steeevin88/steeevin88/assets/59713070/c99b42e3-9718-43a0-8915-9c840dfe36f4',
      title:'Development Team Officer',
      company:'Software and Computer Engineering Society',
      dateRange:'March 2023 - Present',
      description:
        <>
          • Directed team of development officers in the complete overhaul of the Projects page UI for the club website <br/>
          • Refactoring club website to utilize Next.js, improving search engine optimization and user experience <br/>
          • Revamped printing system to reset printed page counts accurately, impacting over 100 club members <br/>
        </>,
      skills: 'Skills: Git, HTML/CSS, Next.js, React.js, TailwindCSS, Docker',
    },
    {
      photoUrl:'https://github.com/steeevin88/portfolio/assets/59713070/0738527b-ab14-4029-902a-4789e6a8dc60',
      title:'Instructional Student Assistant',
      company:'SJSU Computer Science Department',
      dateRange:'March 2023 - December 2023',
      description:
        <>
          • Student grader and mentor for SJSU&apos;s Introduction to Programming course (CS46A)<br/>
          • Offered personalized 1:1 tutoring to students, tailoring explanations to meet individual learning styles and needs<br/>
          • Led 8+ supplemental sessions reinforcing course material, emphasizing fundamental programming concepts in Java<br/>
        </>,
      skills: 'Skills: Java, Eclipse IDE',
    },
    {
      photoUrl:'https://github.com/steeevin88/steeevin88/assets/59713070/bbc5c054-efe4-41f1-b96a-a84da7397e77',
      title:'Google CSSI Participant',
      company:'Google',
      dateRange:'June 2022 - August 2022',
      description:
        <>
          • Partook in a 4-week CS summer program alongside Google engineers<br/>
          • Completed a project-based JavaScript processing curriculum, configuring 16 introductory coding projects<br/>
          • Reviewed product design, resume development, and technical interview techniques across 10+ workshops<br/>
        </>,
        skills: 'Skills: HTML/CSS, Bulma (CSS Framework), Javascript',
    },
  ];

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#7C909A] to-gray-300" id="experience">
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
