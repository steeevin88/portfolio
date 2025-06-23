'use client';
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import { X, ExternalLink, Github, ChevronUp } from 'lucide-react';

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
    photoUrl: 'project_images/medlm.png',
    title: 'MedLM',
    dateInfo: 'Created in April 2025',
    description: 'Healthcare disparities affect millions across racial and ethnic lines, with research consistently showing that people of color receive fewer medication prescriptions, less pain management, and lower quality care than white patients with similar symptoms and conditions. MedLM was built to combat these racial inequities by creating a platform where care decisions are based on medical needs rather than racial identity. By removing visual cues and patient information that hold the potential to trigger implicit biases from doctor\'s, we\'re tackling one of healthcare\'s most persistent injustices.',
    repoUrl: 'https://github.com/steeevin88/medLM',
    extraLink: 'https://med-lm.vercel.app/',
    technologies: 'Next.js, TypeScript, LangGraph, Letta, Google\'s Gemini API, MongoDB'
  },
  {
    photoUrl: 'project_images/lmk.png',
    title: 'lmk',
    dateInfo: 'Created in February 2025',
    description: 'In today\'s world, staying informed about local incidents and safety concerns is crucial. Whether it is a house fire, suspicious activity, or even something as extreme as a nuclear threat, timely updates can help people make better decisions for their safety. However, many incidents go unreported or fail to reach the people who need to know. Without an efficient way to share and access real-time alerts, communities are left vulnerable to unforeseen dangers.\n\nThis inspired us to create lmk, a platform that enables community-driven safety reporting. Rather than relying solely on official emergency channels, lmk allows people to contribute real-time updates about local incidents, making it easier for others to stay informed. The platform provides an interactive way for users to track reports, assess potential risks, and respond accordingly. \n\nlmk is a real-time incident tracking platform that allows users to report and view local incidents through a dynamic map-based interface. Users can submit reports detailing incidents such as fires, suspicious activity, and public disturbances, providing key details like location, description, and urgency level. Each report is processed by an AI system that categorizes the severity and determines the appropriate response level.\n\nThrough an interactive Mapbox interface, users can view incidents near them, filter reports by severity, and receive warnings if an event poses a significant risk. The AI-driven system helps streamline information by summarizing key details, ensuring that users can quickly assess and respond to nearby events.',
    repoUrl: 'https://github.com/NicholasLe04/hackforhumanity',
    extraLink: 'https://lmk-kappa.vercel.app/',
    technologies: 'Next.js, TypeScript, shadcn, Supabase, Mapbox'
  },
  {
    photoUrl: 'project_images/angelshot.png',
    title: 'AngelShot',
    dateInfo: 'Created in October 2024',
    description: 'Whether it\'s at a college party, a public outing, or during a simple stroll downtown, individuals often find themselves in uncomfortable, unwanted situations due to unwanted attention. In these moments, a discreet way to seek help is crucial.\n\nIn the bartending world, this concept is known as an "angel shot"—a code word or drink order that discreetly signals to staff that a customer needs assistance.\n\nPhone calls are a powerful tool in these uncomfortable situations, as they not only deter unwanted attention by creating an external conversation but also offer a lifeline to contact emergency services or trusted individuals. Thus, they server as angel shots outside of a bartending context.\n\nBut what if no one is available to answer the call? How can individuals ensure they\'ll have someone to talk to when they need help the most?\n\n At CalHacks 2024, we built AngelShot: an application that simulates a realistic phone call a variety of user-customizable AI-based assistants\n\nUsers will pre-define assistants that they can request a call from whenever they\'re placed in an unwanted situation. These assistants can take on roles; for instance, user\'s can create an assistant meant to be \'an uncle that they haven\'t seen in awhile\'. Additionally, assistants can be given a conversation starter. This could range from topics like sports, gardening, etc... anything that the user will feel comfortable talking about in an uncomfortable situation. \n\nWhen an individual is in an uncomfortable situation, they can request a call from any of their created assistants to start a normal conversation. However, with each response, the assistant provides the user two discreet, context-based code words.\n\nThese code words trigger pre-configured safety actions of two levels. For example, in a gardening-themed conversation, the assistant may provide the words "monstera" and "weeding".\nIf the user says the first keyword "monstera" in their response, the assistant will know to share the user\'s live conversation with emergency contacts.If the user says the second keyword "weeding" in their response, the assistant will know to forward you to emergency services instantly.\n\n View our Devpost subsmission or try out AngelShot for yourself',
    repoUrl: 'https://github.com/mikieyx/SafeTalk',
    extraLink: 'https://devpost.com/software/angelshot',
    technologies: 'Next.js, TypeScript, shadcn, VAPI, ElevenLabs, Deepgram, Twilio, MongoDB'
  },
  {
    photoUrl: 'project_images/dcmh.png',
    title: 'Pantry Patrol',
    dateInfo: 'Created in April 2024',
    description: 'Before HackDavis began, our team really struggled to decide on a specific project. With so many ideas and technologies, we just weren\'t sure what to develop. However, we were able to talk to an individual representing Davis Community Meals & Housing (DCMH) and inquire about their initial application ideas. From there, we ideated, discussing potential new features and ultimately, we decided on our project: Pantry Patrol.\n\nPantry Patrol is an inventory management application designed specifically for DCMH\'s specifications. They wanted an application that facilitated inventory management to assist with managing donations that came in. Additionally, they wanted a user interface that allowed individuals to understand what products they had on their "wish list" and the number of such products, such that potential donors don\'t "over-donate" on certain products.\n\nPantry Patrol handles all of this and MORE. For example, one of the priorities of DCMH was being reachable to donors and incentivizing donations. To account for this, we added an email blast feature that emails individuals subscribed to the organization\'s mailing list, such that they would periodically receive assistance emails when products are low in stock. This way, donors are hopefully more inclined to donate to the organization as they are being reached out to directly.\n\nThis project was awarded MLH\'s Best Use of PropelAuth at HackDavis 2024. \n\nAfter the event, we worked with Davis Community Meals & Housing to integrate Pantry Patrol into their existing website. \n\nDonate to DCMH and view Pantry Patrol (now called DCMH Pantry)',
    repoUrl: 'https://github.com/Luceium/DCMH',
    extraLink: 'https://daviscommunitymeals.org/donate/',
    technologies: 'NextJS, Tailwind/ DaisyUI, Prisma, MongoDB, PropelAuth'
  },
  {
    photoUrl: 'project_images/roomy.png',
    title: 'Roomy',
    dateInfo: 'Created in April 2024',
    description: 'Roomy, originally named Harmonic Homes, aimed to apply the tool forming and auto GPT research paper concepts to build an intelligent smart home assistant, capable of handling simple and complex actions.\n\nTypically, when we deal with smart homes, there are a set of simple, predefined actions, such as turning the lights off. HarmonicHomes aims to use artificial intelligence to give greater capabilities to smart homes.\n\nWe mimicked smart home functionalities with a simple UI and preset functions (ex. turn all the lights on, turn the lights yellow). For the backend, we used Fetch.ai\'s uAgents Python framework and Google\'s Gemini API to create three “agents”: the orchestrator, the tool-former, and a tool-verifier. These agents would work together to create complex actions if needed. For example, if a user asked to “turn the lights UCLA themed”, this is a complex action that we didn\'t predefine. The backend would, then, create a new tool/function that builds on top of preset abilities, to carry out the complex interaction. In this case, a new function “turn_light_UCLA_themed” would be created. This function would combine the simple functions it already knows to make this new function. This includes turning the lights in every room on and changing the colors of these lights to yellow and blue (UCLA theme). This new function can now be reused and can be used to build even more functions.\n\nWith Roomy, smart homes aren\'t limited to their initial set of simple commands. This project is only a mockup, but we hope it serves as a glimpse into how artificial intelligence can revolutionize the smart home industry.\n\nThis project won Fetch.ai\'s Company Challenge at UCLA\'s LAHacks 2024. We have plans to continue developing Roomy, integrating it with existing smart home solutions like Matter.\n\nView our winning Devpost submission and a live demonstration',
    repoUrl: 'https://github.com/joshua-demo/simply-home',
    extraLink: 'https://devpost.com/software/harmonichomes',
    technologies: 'NextJS, Tailwind/ DaisyUI, Python, FastAPI, Google\'s Gemini API, uAgents'
  },
  {
    photoUrl: 'project_images/safeandslug.png',
    title: 'Safe And Slug',
    dateInfo: 'Created in January 2024',
    description: 'Safe and Slug allows individuals to host and create events, or join already-created events through scanning an event-tied QR code. When users attend events and request assistance we forward their contact information to admins who can then assist as needed. Requiring authentication to join an event, admins are given greater flexibility with the information they have on their attendees. For example, health risks, allergy information, contact information, etc... are all provided, ensuring that in the case of an emergency, event admins can react accordingly.\n\nThis project was awarded MLH\'s Best Domain Name from GoDaddy Registry at CruzHacks 2024.\n\nView our winning Devpost submission',
    repoUrl: 'https://github.com/steeevin88/SafeAndSlug',
    extraLink: 'https://devpost.com/software/safe-and-slug',
    technologies: 'NextJS, Tailwind/ DaisyUI, Prisma, MongoDB, Auth0, Express.js, Websocketing'
  },
  {
    photoUrl: 'project_images/sceta.png',
    title: 'SCEta',
    dateInfo: 'Created in December 2023',
    description: 'Transit predictions application made for SJSU\'s Software and Computer Engineering Society (SCE) as part of it\'s collaborative winter internship program.\n\nRetrieves data from SF Bay\'s Open Data 511 API from nearby transit stations to SJSU (ex. VTA, BART), allowing SCE club members to view transit arrival times on the club website.\n\n Get local transit predictions to SJSU through SCEta by clicking',
    repoUrl: 'https://github.com/SCE-Development/SCEta',
    extraLink: "https://sce.sjsu.edu/transit/",
    technologies: 'React, Tailwind/ DaisyUI, Python, 511 API, Docker'
  },
  {
    photoUrl: 'project_images/facetoface.png',
    title: 'FaceToFace',
    dateInfo: 'Created in October 2023',
    description: 'NextJS application that allows users to coordinate events with friends by allowing them to upload personal .ics files from modern calendar applications (ex. Google Calendar). Users can register for accounts and add friends to access their availabilities and schedule (in-person) meetings. Additionally, users can be recommended events based on their preferences and their (stored) meeting history.\n\nThis project was a submission to CalHacks 2023.\n\nView the Devpost submission',
    repoUrl: 'https://github.com/steeevin88/schedulerAI',
    extraLink: 'https://devpost.com/software/hum-ex-scheduler',
    technologies: 'NextJS, Tailwind, Prisma, CockroachDB, TogetherAI'
  },
  {
    photoUrl: 'project_images/polyomino.png',
    title: 'Polyomino Frenzy',
    dateInfo: 'Created in June 2023',
    description: 'Rendition of Tetris that allows user-inputted Tetris pieces (polyominoes)',
    repoUrl: 'https://github.com/steeevin88/polyomino-frenzy',
    technologies: 'HTML/CSS, Javascript'
  },
  {
    photoUrl: 'project_images/nutricount.png',
    title: 'NutriCount',
    dateInfo: 'Created in February 2023',
    description: 'Static web app made as part of Santa Clara University\'s Hack for Humanity (2023)\n\nView the Devpost submission',
    repoUrl: 'https://github.com/steeevin88/NutriCount',
    extraLink: 'https://devpost.com/software/nutricount-ol12bw',
    technologies: 'HTML/CSS, Bulma, Javascript'
  },
  {
    photoUrl: 'project_images/gymratz.png',
    title: 'Gym Ratz',
    dateInfo: 'Created in September 2022',
    description: 'Group project created for Google\'s CSSI (2022)',
    repoUrl: 'https://github.com/steeevin88/CSSI-Final-Project',
    technologies: 'HTML/CSS, Bulma, Javascript'
  }
];

function ProjectModalComponent({photoUrl, title, dateInfo, description, repoUrl, extraLink, technologies}: Project) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 text-sm"
      >
        View Details
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div ref={modalRef} className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-600 mb-4">{dateInfo}</p>
              <div className="prose max-w-none mb-6">
                {description.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mb-6">
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition duration-300">
                  <Github size={20} />
                  View on GitHub
                </Link>
                {extraLink && (
                  <Link href={extraLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition duration-300">
                    <ExternalLink size={20} />
                    View Project
                  </Link>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                <p className="text-gray-700">{technologies}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProjectCard(props: Project) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="h-48 bg-gray-200 flex items-center justify-center p-4">
        <Image src={props.photoUrl} alt={props.title} width={500} height={400} className="object-contain max-h-full" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{props.title}</h3>
        <p className="text-gray-600 mb-4">{props.dateInfo}</p>
        <ProjectModalComponent {...props} />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-300 to-[#7C909A] py-24 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">PROJECTS</h2>
          <p className="text-xl text-gray-600">A few things that I&apos;ve worked on...</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href='#home'>
            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
      <ChevronUp className="animate-bounce mt-12 w-8 h-8 mx-auto text-gray-600" />
    </section>
  );
}
