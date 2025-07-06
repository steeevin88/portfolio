'use client';

import { useEffect, useState, useMemo } from "react";
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import About from "../components/About";
import Experience from '../components/Experience';
import Projects from '../components/Projects';

export default function Home() {
  const textOptions = useMemo(() => [
    'Attending hackathons 🤓',
    'Building projects for SCE 🧑‍🎓',
    'Developing personal projects 💻',
    'Driving to work/school 🚗',
    'Fixing my resume 📝',
    'Leetcoding 🧑‍💻',
    'Listening to a podcast 🎧',
    'Reading documentation 📖',
    'Scrolling on Linkedin 📲',
    'Studying for my CS courses 🎒',
    'Trying new technologies 🧠',
    'Watching Youtube 📺',
    'Working out at the gym 🏋️',
  ], []);
  const [randomText, setRandomText] = useState(() => {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    return textOptions[randomIndex];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setRandomText(textOptions[randomIndex]);
    }, 2750);

    return () => clearInterval(interval);
  }, [textOptions]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex flex-col justify-center items-center min-h-screen py-8 px-4 bg-gradient-to-b from-[#7C909A] via-[#7C909A] to-gray-300" id="home">
        <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mt-8 md:mb-5 h-32">
          <Typewriter onInit={(typewriter) => {typewriter.typeString("Hey! I'm Steven.").start()}} />
        </div>
        <div className="text-2xl sm:text-3xl md:text-5xl mb-16 font-semibold text-gray-700 text-center">Software Engineer</div>
        <div className="text-lg sm:text-xl md:text-3xl mb-4 text-center">As of right now, I&apos;m probably...</div>
        <div className="text-2xl sm:text-3xl md:text-5xl h-10 md:h-12 my-8 md:my-12 text-center">
          <p>{randomText}</p>
        </div>
        <div className="text-lg sm:text-xl md:text-3xl flex flex-col items-center text-center gap-4 mt-4 md:mt-8">
          <Link href='#about'>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-sm py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
             About Me
            </button>
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
