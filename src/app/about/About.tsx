'use client';
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from 'lucide-react';

export default function About() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-gray-300 to-[#7C909A] flex flex-col justify-center" id="about">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:col-span-3 gap-6 md:gap-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">ABOUT</h2>
          <h3 className="text-2xl sm:text-3xl">Welcome!</h3>
          <div className="text-base sm:text-lg lg:text-xl space-y-4">
            <p>
              Thanks for visiting! My name is Steven Le.
            </p>
            <p>
              I&apos;m a junior at San Jose State University pursuing a bachelor&apos;s of science in computer science. I&apos;m most interested in web development and DevOps, but I&apos;m constantly exploring other areas of software engineering to find where my skills best apply.
            </p>
            <p>
              Outside of school, you can find me leading projects for SJSU&apos;s Software and Computer Engineering Society (<Link href="https://sce.sjsu.edu/" className="underline" target="_blank" rel="noopener noreferrer">SCE</Link>), bringing ideas to life at hackathons, or working on personal projects.
            </p>
            <p>
              I&apos;m working towards a career in software engineering, where I hope to advance projects that makes differences in people&apos;s lives. This website is intended to serve as a personal portfolio, documenting my progess towards that goal.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:col-span-2">
          <Image
            src="https://github.com/user-attachments/assets/2ca2853c-3ade-4e39-8ec3-541bd45d10a3"
            alt="steven"
            width={400}
            height={400}
            unoptimized
            className="w-full max-w-md h-auto border-4 border-black rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-xl sm:text-2xl mb-6">Click the button below to view my experiences.</p>
        <Link href='#experience'>
          <button className="btn bg-gray-300 hover:bg-gray-400 border-none text-center w-44 rounded-lg transition-colors duration-300">
            Experience
          </button>
        </Link>
      </div>
      <ChevronDown className="animate-bounce mt-8 w-8 h-8 mx-auto" />
    </section>
  );
}
