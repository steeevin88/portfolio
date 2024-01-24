'use client';
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import Link from 'next/link';


export default function Home() {
  const [randomText, setRandomText] = useState('Working on projects!');
  const typewriterOptions = {
    strings: ['Hey, I\'m Steven.'],
    autoStart: true,
    loop: true,
    pauseFor: 30000,
  };

  useEffect(() => {
    const textOptions = [
      'Leetcoding',
      'Working on projects',
      'Practicing new interview techniques',
      'Learning new technologies',
      'Studying for my CS courses',
      'Debugging',
    ];

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setRandomText(textOptions[randomIndex]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="flex flex-col justify-top text-center items-center h-[calc(100vh-80px)] py-12 md:py-24 gap-12 md:gap-16 
      bg-gradient-to-t from-gray-300 to-secondary">
        <div className="text-6xl md:text-8xl">
          {/* tailwind styling in Typewriter component didn't work */}
          <Typewriter options={typewriterOptions}/>
        </div>
        <div className="text-xl md:text-3xl">CS Major @ SJSU + aspiring software engineer</div>
        <div className="text-xl md:text-3xl">As of right now, I am probably...</div>
        <div className="text-4xl md:text-5xl h-10 md:h-12 mb-6 lg:mb-0">
          <p>{randomText}</p>
        </div>
        <div className="text-xl md:text-3xl flex flex-col items-center text-center gap-10">
          Click the button below to learn more about me.
          <Link href='/about'>
            <button className="btn text-center w-44 rounded-lg">About Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
