import Image from 'next/image';
import ProjectModalComponent from './ProjectModal';

export default function ProjectCard({photoUrl, title, dateInfo, description, repoUrl, extraLink, technologies} : {photoUrl : string, title : string, dateInfo : string, description : string, repoUrl : string, extraLink? : string, technologies : string}) {
    
  return (
    <div className="bg-gray-500 w-[270px] h-[270px] rounded-lg flex flex-col gap-6 items-center p-4 truncate justify-center">
      <div className="flex flex-col truncate gap-2">
        <div className="text-2xl md:text-3xl font-bold">{title}</div>
        <ProjectModalComponent
          photoUrl={photoUrl}
          title={title}
          dateInfo={dateInfo}
          description={description}
          repoUrl={repoUrl}
          extraLink={extraLink}
          technologies={technologies}
        />
      </div>
      <Image src={photoUrl} alt="logo" width="64" height="64" className="w-auto h-32"/>
    </div>
  );
}