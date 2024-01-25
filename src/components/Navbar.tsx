"use client"
import classNames from "classnames";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Image from "next/image"
import Link from "next/link";
import logo from "../app/icon.ico";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className={classNames("bg-primary fixed z-10 text-xl top-0 w-full lg:flex overflow-hidden lg:justify-between lg:items-center px-8 lg:px-20 xl:px-52 py-2 lg:py-6 pb-6 transition-all duration-200 ease-in-out", {"max-h-screen lg:max-h-20": toggled, "max-h-20": !toggled})}>
      <div className="flex justify-between">
        <Link className="flex gap-2 items-center" href="/">
          <Image src={logo} alt="logo" className="w-12 lg:w-14 h-16 lg:h-20 p-2" width="64" height="64"/>
        </Link>
        <div className="flex items-center lg:hidden" onClick={() => setToggled(!toggled)}>
          <IoMenu className="h-8 w-8"/>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 mt-4 mb-8 lg:my-0">
        <Link href="/about" onClick={() => setToggled(!toggled)}>About</Link>
        <Link href="/experience" onClick={() => setToggled(!toggled)}>Experience</Link>
        <Link href="/projects" onClick={() => setToggled(!toggled)}>Projects</Link>
      </div>
      <Link href="https://drive.google.com/file/d/1u5OYrfA5KvxIqd_Kjg8p15Z3sQNscePU/view" target="_blank" rel="noopener noreferrer"><button className="btn rounded-lg">Resume</button></Link>
    </nav>
  )
}
