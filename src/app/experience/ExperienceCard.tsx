'use client';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Image from 'next/image';

export default function ExperienceCard({ photoUrl, title, company, dateRange, description, skills }: { photoUrl: string; title: string; company: string; dateRange: string; description: React.ReactNode; skills?: string }) {
  const [flip, setFlip] = useState(false);

  return (
    <div onClick={() => setFlip(!flip)} className="mx-4 mb-4 cursor-pointer">
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        
        {/* Front Side */}
        <div>
          <div className="bg-gray-400 w-[90vw] md:w-[500px] h-[450px] rounded-lg flex flex-col justify-center gap-2 md:gap-6 border-black border-2">
          <div className="flex justify-center align-top px-6 h-72">
            <Image 
              src={photoUrl} 
              alt="logo" 
              width="64" 
              height="64" 
              className="object-contain h-full w-full" 
            />
          </div>
            <div className="flex flex-col p-4">
              <div className="text-2xl font-bold">{title}</div>
              <div className="text-l md:text-xl">{company}</div>
              <div className="text-l">{dateRange}</div>
            </div>
          </div>
        </div>
        
        {/* Back Side */}
        <div>
          <div className="bg-gray-400 w-[90vw] md:w-[500px] h-[450px] rounded-lg flex flex-col p-4 text-left gap-6 overflow-auto border-black border-2">
            <div>
              <div className="text-l md:text-2xl font-bold">{title}</div>
              <div className="text-l md:text-xl">{company}</div>
            </div>
            <div className="text-sm md:text-xl">{description}</div>
            <div className="text-sm md:text-l">{skills}</div>
          </div>
        </div>

      </ReactCardFlip>
    </div>
  );
}
