'use client';
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-t from-gray-300 to-[#7C909A] grid md:grid-cols-2 lg:grid-cols-5 px-10 lg:px-40 gap-10">
      <div className="flex flex-col lg:col-span-3 lg:px-10 gap-12 pt-16">
        <div className="text-6xl">ABOUT</div>
        <div className="text-3xl">Welcome!</div>
        <p className="text-xl">
          Thanks for visiting! My name is Steven Le.
          <br/><br/>
          I&apos;m a junior at San Jose State University pursuing a bachelor&apos;s of science in computer science. I'm most interested in web development and DevOps, but I'm constantly exploring other areas of software engineering to find where my skills best apply.
          <br/><br/>
          Outside of school, you can find me leading projects for SJSU's Software and Computer Engineering Society (<Link href="https://sce.sjsu.edu/" className="underline">SCE</Link>), bringing ideas to life at hackathons, or working on personal projects.
          <br/><br/>
          I&apos;m working towards a career in software engineering, where I hope to advance projects that makes differences in people&apos;s lives. This website is intended to serve as a personal portfolio, documenting my progess towards that goal.
        </p>
        <div className="text-xl md:text-3xl flex flex-col items-center text-center gap-10">
          Click the button below to view my experiences.
          <Link href='/experience'>
            <button className="btn text-center w-44 rounded-lg">Experience</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:col-span-2 lg:px-10 pb-10">
        <Image src="https://github.com/steeevin88/portfolio/assets/59713070/0ad6177a-2c66-4903-ae5b-09f41f64a697" alt="steven" width="64" height="64" unoptimized className="w-full lg:min-w-96 h-auto border-4 border-black rounded-lg"/>
      </div>
    </div>
  );
}
