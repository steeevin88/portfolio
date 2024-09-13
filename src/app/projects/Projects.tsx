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
    photoUrl: 'https://github.com/user-attachments/assets/5bc50f30-46af-47cb-b924-796868fc9f64',
    title: 'Pantry Patrol',
    dateInfo: 'Created in April 2024',
    description: 'Before HackDavis began, our team really struggled to decide on a specific project. With so many ideas and technologies, we just weren\'t sure what to develop. However, we were able to talk to an individual representing Davis Community Meals & Housing (DCMH) and inquire about their initial application ideas. From there, we ideated, discussing potential new features and ultimately, we decided on our project: Pantry Patrol.\n\nPantry Patrol is an inventory management application designed specifically for DCMH\'s specifications. They wanted an application that facilitated inventory management to assist with managing donations that came in. Additionally, they wanted a user interface that allowed individuals to understand what products they had on their "wish list" and the number of such products, such that potential donors don\'t "over-donate" on certain products.\n\nPantry Patrol handles all of this and MORE. For example, one of the priorities of DCMH was being reachable to donors and incentivizing donations. To account for this, we added an email blast feature that emails individuals subscribed to the organization\'s mailing list, such that they would periodically receive assistance emails when products are low in stock. This way, donors are hopefully more inclined to donate to the organization as they are being reached out to directly.\n\nThis project was awarded MLH\'s Best Use of PropelAuth at HackDavis 2024. \n\nAfter the event, we worked with Davis Community Meals & Housing to integrate Pantry Patrol into their existing website. \n\nDonate to DCMH and view Pantry Patrol (now called DCMH Pantry)',
    repoUrl: 'https://github.com/Luceium/DCMH',
    extraLink: 'https://daviscommunitymeals.org/donate/',
    technologies: 'NextJS, Tailwind/ DaisyUI, Prisma, MongoDB, PropelAuth'
  },
  {
    photoUrl: 'https://github.com/user-attachments/assets/5ffd0691-964f-48c4-9715-1ba63a770a5c',
    title: 'Roomy',
    dateInfo: 'Created in April 2024',
    description: 'Roomy, originally named Harmonic Homes, aimed to apply the tool forming and auto GPT research paper concepts to build an intelligent smart home assistant, capable of handling simple and complex actions.\n\nTypically, when we deal with smart homes, there are a set of simple, predefined actions, such as turning the lights off. HarmonicHomes aims to use artificial intelligence to give greater capabilities to smart homes.\n\nWe mimicked smart home functionalities with a simple UI and preset functions (ex. turn all the lights on, turn the lights yellow). For the backend, we used Fetch.ai\'s uAgents Python framework and Google\'s Gemini API to create three “agents”: the orchestrator, the tool-former, and a tool-verifier. These agents would work together to create complex actions if needed. For example, if a user asked to “turn the lights UCLA themed”, this is a complex action that we didn\'t predefine. The backend would, then, create a new tool/function that builds on top of preset abilities, to carry out the complex interaction. In this case, a new function “turn_light_UCLA_themed” would be created. This function would combine the simple functions it already knows to make this new function. This includes turning the lights in every room on and changing the colors of these lights to yellow and blue (UCLA theme). This new function can now be reused and can be used to build even more functions.\n\nWith Roomy, smart homes aren\'t limited to their initial set of simple commands. This project is only a mockup, but we hope it serves as a glimpse into how artificial intelligence can revolutionize the smart home industry.\n\nThis project won Fetch.ai\'s Company Challenge at UCLA\'s LAHacks 2024. We have plans to continue developing Roomy, integrating it with existing smart home solutions like Matter.\n\nView our winning Devpost submission and a live demonstration',
    repoUrl: 'https://github.com/joshua-demo/simply-home',
    extraLink: 'https://devpost.com/software/harmonichomes',
    technologies: 'NextJS, Tailwind/ DaisyUI, Python, FastAPI, Google\'s Gemini API, uAgents'
  },
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
    description: 'Transit predictions application made for SJSU\'s Software and Computer Engineering Society (SCE) as part of it\'s collaborative winter internship program.\n\nRetrieves data from SF Bay\'s Open Data 511 API from nearby transit stations to SJSU (ex. VTA, BART), allowing SCE club members to view transit arrival times on the club website.\n\n Get local transit predictions to SJSU through SCEta by clicking',
    repoUrl: 'https://github.com/SCE-Development/SCEta',
    extraLink: "https://sce.sjsu.edu/transit/",
    technologies: 'React, Tailwind/ DaisyUI, Python, 511 API, Docker'
  },
  {
    photoUrl: 'https://github.com/steeevin88/portfolio/assets/59713070/18efee1f-70a1-49bb-a1f0-0bb5a22f5527',
    title: 'FaceToFace',
    dateInfo: 'Created in October 2023',
    description: 'NextJS application that allows users to coordinate events with friends by allowing them to upload personal .ics files from modern calendar applications (ex. Google Calendar). Users can register for accounts and add friends to access their availabilities and schedule (in-person) meetings. Additionally, users can be recommended events based on their preferences and their (stored) meeting history.\n\nThis project was a submission to CalHacks 2023.\n\nView the Devpost submission',
    repoUrl: 'https://github.com/steeevin88/schedulerAI',
    extraLink: 'https://devpost.com/software/safe-and-slug',
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
    description: 'Static web app made as part of Santa Clara University\'s Hack for Humanity (2023)\n\nView the Devpost submission',
    repoUrl: 'https://github.com/steeevin88/NutriCount',
    extraLink: 'https://devpost.com/software/nutricount-ol12bw',
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
    <div className="min-h-[100vh] bg-gradient-to-b from-gray-300 to-[#7C909A] flex flex-col pt-[17.5vh] xl:px-24 gap-8 items-center" id="projects">
      <div className="flex flex-col px-8 lg:px-12 text-center gap-4">
        <div className="text-5xl lg:text-6xl">PROJECTS</div>
        <div className="text-xl px-8 lg:px-12">A few things that I&apos;ve worked on...</div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {projectsData.map((project, index) => {
          return (
            <ProjectCard {...project} key={index}/>
          );
        })}
      </div>
      <Link href='#home' className="text-center">
        <button className="btn bg-gray-300 border-none text-center w-44 mb-2 rounded-lg">To Home</button>
      </Link>
    </div>
  )
}
