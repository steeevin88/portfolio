import Link from "next/link";
import ProjectCard from "./ProjectCard";

type Project = {
  photoUrl: string;
  title: string;
  dateInfo: string;
  description: string;
  repoUrl: string;
  extraLink?: string;
  technologies: string;
};

const projectsData: Project[] = [
  {
    photoUrl: 'https://github.com/steeevin88/portfolio/assets/59713070/1a476f07-ae34-4527-bcce-55b9ede94d32',
    title: 'Safe And Slug',
    dateInfo: 'Created in January 2024',
    description: 'Safe and Slug allows individuals to host and create events, or join already-created events through scanning an event-tied QR code. When users attend events and request assistance we forward their contact information to admins who can then assist as needed. Requiring authentication to join an event, admins are given greater flexibility with the information they have on their attendees. For example, health risks, allergy information, contact information, etc... are all provided, ensuring that in the case of an emergency, event admins can react accordingly.\n\nThis project was awarded MLH\'s Best Domain Name from GoDaddy Registry at CruzHacks 2024.\n\nView our winning Devpost submission',
    repoUrl: 'https://github.com/steeevin88/SafeAndSlug',
    extraLink: 'https://devpost.com/software/safe-and-slug',
    technologies: 'NextJS, Tailwind/ DaisyUI, Prisma, MongoDB, Auth0, Express.js, Websocketing'
  },
  {
    photoUrl: 'https://github.com/steeevin88/portfolio/assets/59713070/2ffc648d-abec-4e6e-be8a-d8329eeb72e8',
    title: 'SCEta',
    dateInfo: 'Created in December 2023',
    description: 'Transit predictions application made for SJSU\'s Software and Computer Engineering Society (SCE) as part of it\'s collaborative winter internship program.\n\nRetrieves data from SF Bay\'s Open Data 511 API from nearby transit stations to SJSU (ex. VTA, BART), allowing SCE club members to view transit arrival times on the club website.',
    repoUrl: 'https://github.com/SCE-Development/SCEta',
    technologies: 'React, Tailwind/ DaisyUI, Python, 511 API, Docker'
  },
  {
    photoUrl: 'https://github.com/steeevin88/portfolio/assets/59713070/18efee1f-70a1-49bb-a1f0-0bb5a22f5527',
    title: 'FaceToFace',
    dateInfo: 'Created in October 2023',
    description: 'NextJS application that allows users to coordinate events with friends by allowing them to upload personal .ics files from modern calendar applications (ex. Google Calendar). Users can register for accounts and add friends to access their availabilities and schedule (in-person) meetings. Additionally, users can be recommended events based on their preferences and their (stored) meeting history.\n\nThis project was a submission to CalHacks 2023.',
    repoUrl: 'https://github.com/steeevin88/schedulerAI',
    technologies: 'NextJS, Tailwind, Prisma, CockroachDB, TogetherAI'
  },
  {
    photoUrl: 'https://github.com/steeevin88/stevens-webpage/assets/59713070/5e7f6945-c28d-4dd0-8a91-661a6e349134',
    title: 'Polyomino Frenzy',
    dateInfo: 'Created in June 2023',
    description: 'Rendition of Tetris that allows user-inputted Tetris pieces (polyominoes)',
    repoUrl: 'https://github.com/steeevin88/polyomino-frenzy',
    technologies: 'HTML/CSS, Javascript'
  },
  {
    photoUrl: 'https://github.com/steeevin88/steeevin88/assets/59713070/e22c5ddd-6788-45e3-afc4-d4cc71460dfe',
    title: 'NutriCount',
    dateInfo: 'Created in February 2023',
    description: 'Web app made as part of Santa Clara University\'s Hack for Humanity (2023)',
    repoUrl: 'https://github.com/steeevin88/NutriCount',
    technologies: 'HTML/CSS, Bulma, Javascript'
  },
  {
    photoUrl: 'https://github.com/steeevin88/steeevin88/assets/59713070/33a0982e-8709-44c4-abf4-083d13afce6f',
    title: 'Gym Ratz',
    dateInfo: 'Created in September 2022',
    description: 'Group project created for Google\'s CSSI (2022)',
    repoUrl: 'https://github.com/steeevin88/CSSI-Final-Project',
    technologies: 'HTML/CSS, Bulma, Javascript'
  }
];


export default function Projects() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-t from-gray-300 to-secondary flex flex-col xl:px-24 gap-8 items-center">
      <div className="flex flex-col px-8 lg:px-12 text-center gap-4">
        <div className="text-5xl lg:text-6xl">PROJECTS</div>
        <div className="text-xl px-8 lg:px-12">A few things that I&apos;ve worked on...</div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-space-between gap-8">
        {projectsData.map((project, index) => {
          return (
            <ProjectCard {...project} key={index}/>
          );
        })}
      </div>
      <Link href='/projects' className="text-center">
        <button className="btn text-center w-44 rounded-lg">Contact Me</button>
      </Link>
    </div>
  )
}