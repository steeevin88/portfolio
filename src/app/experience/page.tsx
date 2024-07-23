import Link from "next/link";
import ExperienceCard from './ExperienceCard';

type Experience = {
  photoUrl : string;
  title : string;
  company: string;
  dateRange : string;
  description : React.ReactNode;
  skills? : string;
}

export default function Experience() {
  const experienceData : Experience[] = [
    {
      photoUrl:'https://github.com/user-attachments/assets/ab9c455c-edc7-449c-bf61-06a16601f02a',
      title:'Software Engineering Intern (Incoming)',
      company:'Fetch.ai',
      dateRange:'August 2024 - December 2024',
      description:
        <>
          • Working with software engineers in the development of autonomous AI agents and decentralized AI solutions <br/>
        </>,
      skills: '',
    },
    {
      photoUrl:'https://github.com/user-attachments/assets/74dffcf0-a90f-44c4-b3fb-f0ba89aec65b',
      title:'Software Engineering Intern',
      company:'United States Geological Survey (USGS)',
      dateRange:'May 2024 - August 2024',
      description:
        <>
          • Developed an internal earthquake response platform to assist scientists in visualizing real-time seismic activity <br/>
          • Constructed interactive maps displaying GeoJSON data for 100+ earthquakes with Python&apos;s Folium and PyGDAL <br/>
          • Administered application deployment to an internal Apache HTTP Server accessed by 15+ inter-team researchers <br/>
          • Optimized search latency on large queries by &#126;20% by refactoring internal SQL scripts and adding B-Tree indexing <br/>
        </>,
      skills: 'Skills: HTML/CSS, React.js',
    },
    {
      photoUrl:'https://github.com/user-attachments/assets/579c08d4-6674-4f6a-b81f-1dfd1eee54b1',
      title:'Software Track Participant',
      company:'IBM Accelerate',
      dateRange:'June 2024 - August 2024',
      description:
        <>
          • Participated in IBM&apos;s 8-week summer program focused on agile methodologies and cloud-native development <br/>
          • Collaborated with engineers to develop scalable full-stack applications on IBM&apos;s cloud infrastructure <br/>
        </>,
      skills: 'Skills: HTML/CSS, React.js',
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
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-t from-gray-300 to-[#7C909A] flex flex-col lg:px-24 gap-12 py-1 md:pt-16">
      <div className="flex flex-row justify-between px-8 lg:px-12">
        <div className="flex flex-col">
          <div className="text-center text-5xl lg:text-left lg:text-6xl">EXPERIENCES</div>
          <div className="text-md lg:text-left lg:text-md pl-1 md:hidden">Scroll to view more...</div>
        </div>
        <Link href='/projects' className="hidden md:block">
          <button className="btn text-center w-44 rounded-lg">View Projects</button>
        </Link>
      </div>
      <div className="flex overflow-x-scroll md:flex-wrap md:justify-center">
        {experienceData.map((experience, index) => {
          return (
            <ExperienceCard {...experience} key={index}/>
          );
        })}
      </div>
      <Link href='/projects' className="md:hidden text-center">
        <button className="btn text-center w-44 rounded-lg">View Projects</button>
      </Link>
    </div>
  );
}