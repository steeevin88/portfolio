'use client';

import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import About from "./about/About";
import Experience from './experience/Experience';
import Projects from './projects/Projects';

export default function Home() {
  const [randomText, setRandomText] = useState('Working on projects!');

  useEffect(() => {
    const textOptions = [
      'Leetcoding...',
      'Working on projects!',
      'Studying Neetcode 150...',
      'Practicing new technologies!',
      'Studying for my CS courses...',
      'Building projects for SCE!',
      'Scrolling through Linkedin...',
      'Attending hackathons!',
      'Fixing my resume...',
      'Working out at the gym!',
    ];

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setRandomText(textOptions[randomIndex]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex flex-col justify-center items-center min-h-screen py-8 px-4 bg-gradient-to-b from-[#7C909A] via-[#7C909A] to-gray-300" id="home">
        <div className="text-4xl sm:text-6xl md:text-8xl mb-8 h-32 text-center">
          <Typewriter onInit={(typewriter) => {typewriter.typeString('Hey! I\'m Steven.').start();}}/>
        </div>
        <div className="text-lg sm:text-xl md:text-3xl mb-4 text-center">CS Major @ San Jose State University, aspiring software engineer</div>
        <div className="text-lg sm:text-xl md:text-3xl mb-4 text-center">As of right now, I am probably...</div>
        <div className="text-2xl sm:text-3xl md:text-5xl h-10 md:h-12 my-12 md:my-16 text-center">
          <p>{randomText}</p>
        </div>
        <div className="text-lg sm:text-xl md:text-3xl flex flex-col items-center text-center gap-4 mt-4 md:mt-8">
          <p>Click the button below to learn more about me.</p>
          <Link href='#about'>
            <button className="btn bg-gray-300 hover:bg-gray-400 border-none text-center w-44 rounded-lg transition-colors duration-300">About Me</button>
          </Link>
        </div>
        <ChevronDown className="animate-bounce mt-8 w-8 h-8" />
      </section>

      <About />
      <Experience />
      <Projects />
    </div>
  );
}
