import Link from "next/link";
import ExperienceCard from '../components/ExperienceCard';

type Experience = {
  photoUrl : string;
  title : string;
  dateRange : string;
  description : React.ReactNode;
  skills? : string;
}

export default function Experience() {
  const experienceData : Experience[] = [
    {
      photoUrl:'https://github.com/steeevin88/steeevin88/assets/59713070/c99b42e3-9718-43a0-8915-9c840dfe36f4',
      title:'SCE Winter Intern',
      dateRange:'December 2023 - January 2024',
      description:
        <>
          • Built a transit prediction service with Python’s FastAPI, 511 SF Bay’s Portal, and Docker for a club of 500+ users<br/>
          • Used multithreading to update cached bus arrival data, minimizing API calls and request response time<br/>
          • Added custom Prometheus metrics for tracking API request latency and HTTP response codes<br/>
        </>,
      skills: 'Skills: HTML/CSS, React.js, Docker',
    },
    {
      photoUrl:'https://github.com/steeevin88/portfolio/assets/59713070/0738527b-ab14-4029-902a-4789e6a8dc60',
      title:'CS46A Course Grader',
      dateRange:'August 2023 - December 2023',
      description:
        <>
          • Student grader and mentor for SJSU’s Introduction to Programming course (CS46A)<br/>
        </>
    },
    {
      photoUrl:'https://github.com/steeevin88/steeevin88/assets/59713070/c99b42e3-9718-43a0-8915-9c840dfe36f4',
      title:'SCE Development Team Officer',
      dateRange:'March 2023 - Present',
      description:
        <>
          • Directed team of development officers in the complete overhaul of the Projects page UI for the club website <br/>
          • Refactoring club website to utilize Next.js, improving search engine optimization and user experience <br/>
          • Revamped printing system to reset printed page counts accurately, impacting over 100 club members <br/>
        </>,
      skills: 'Skills: HTML/CSS, React.js, Docker',
    },
    {
      photoUrl:'https://github.com/steeevin88/portfolio/assets/59713070/0738527b-ab14-4029-902a-4789e6a8dc60',
      title:'Instructional Student Assistant',
      dateRange:'March 2023 - May 2023',
      description:
        <>
          • Offered personalized 1:1 tutoring to students, tailoring explanations to meet individual learning styles and needs<br/>
          • Led 8+ supplemental sessions reinforcing course material, emphasizing fundamental programming concepts in Java<br/>
        </>,
      skills: 'Skills: Java, Eclipse IDE',
    },
    {
      photoUrl:'https://github.com/steeevin88/steeevin88/assets/59713070/bbc5c054-efe4-41f1-b96a-a84da7397e77',
      title:'Google CSSI Participant',
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
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-t from-gray-300 to-secondary flex flex-col lg:px-24 gap-12 pt-16">
      <div className="flex flex-row justify-between px-8 lg:px-12">
        <div className="text-center text-5xl lg:text-left lg:text-6xl">EXPERIENCES</div>
        <Link href='/projects' className="hidden md:block">
          <button className="btn text-center w-44 rounded-lg">View Projects</button>
        </Link>
      </div>
      <div className="flex overflow-x-scroll">
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