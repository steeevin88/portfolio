import Link from "next/link";
import ProjectCard from "./ProjectCard";

type Project = {
  photoUrl: string;
  title: string;
  dateInfo: string;
  description: string;
  repoUrl: string;
  technologies: string;
};

const projectsData: Project[] = [
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