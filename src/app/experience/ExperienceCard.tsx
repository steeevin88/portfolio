'use client';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Image from 'next/image';


export default function ExperienceCard({ photoUrl, title, dateRange, description, skills }: { photoUrl: string; title: string; dateRange: string; description: React.ReactNode; skills?: string }) {
  const [flip, setFlip] = useState(false);
    
  return (
    <button onClick={() => setFlip(!flip)} className="mx-4 mb-4">
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">

        {/* Front Side */}
        <button onClick={() => setFlip(!flip)}>
          <div className="bg-gray-500 min-w-[300px] min-h-[300px] md:min-w-[450px] md:min-h-[450px] rounded-lg flex flex-col justify-center gap-2 md:gap-6">
            <div className="flex justify-center align-top"><Image src={photoUrl} alt="logo" width="64" height="64" className="w-auto h-48 lg:h-72"/></div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold">{title}</div>
              <div className="text-l">{dateRange}</div>
            </div>
          </div>
        </button>

        {/* Back Side */}
        <button onClick={() => setFlip(!flip)}>
          <div className="bg-gray-500 min-w-[300px] min-h-[300px] md:min-w-[450px] md:min-h-[450px] rounded-lg flex flex-col p-4 text-left gap-6">
            <div className="text-l md:text-2xl font-bold">{title}</div>
            <div className="text-sm md:text-xl">{description}</div>
            <div className="text-sm md:text-l">{skills}</div>
          </div>
        </button>

      </ReactCardFlip>
    </button>
  );
}