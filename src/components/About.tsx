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
          <div className="text-base sm:text-lg lg:text-xl space-y-4">
            <p>
              Thanks for visiting! My name is Steven Le 😄
            </p>
            <p>
              I&apos;m a senior at San Jose State University pursuing a bachelor&apos;s of science in computer science. My past experiences largely involve web development and building product infrastructure, but I&apos;m always exploring new technologies and tooling to sharpen my development skills.
            </p>
            <p>
              Outside of lectures, you can find me leading projects for SJSU&apos;s Software and Computer Engineering Society (<Link href="https://sce.sjsu.edu/" className="underline" target="_blank" rel="noopener noreferrer">SCE</Link>), bringing ideas to life at hackathons, or working on personal projects.
            </p>
            <p>
              I&apos;m working towards a career in software engineering, where I hope to advance projects that makes differences in people&apos;s lives. This website is intended to serve as a personal portfolio, documenting my progress towards that goal.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:col-span-2">
          <Image
            src="/me.jpg"
            alt="steven"
            width={400}
            height={400}
            unoptimized
            className="w-full max-w-md h-auto border-4 border-black rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href='#experience'>
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            My Experiences
          </button>
        </Link>
      </div>
      <ChevronDown className="animate-bounce mt-8 w-8 h-8 mx-auto" />
    </section>
  );
}
