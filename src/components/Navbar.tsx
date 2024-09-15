"use client"
import classNames from "classnames";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className={classNames("bg-[#7C909A] lg:flex lg:flex-row lg:justify-between fixed z-10 text-lg w-full overflow-hidden px-8 pt-2 lg:py-6 lg:pb-12 transition-all duration-200 ease-in-out", {"max-h-screen lg:max-h-12": toggled, "max-h-12": !toggled})}>
      <div className="flex items-center lg:hidden" onClick={() => setToggled(!toggled)}>
        <IoMenu className="h-8 w-8"/>
      </div>
      {/* Social Icons */}
      <div className="hidden lg:flex flex-row gap-4">
        <Link href="https://www.linkedin.com/in/steven-le-90b28b23b/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" fill="#000000"><path fill="#000000" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8.339 18.337H5.667v-8.59h2.672zM7.003 8.574a1.548 1.548 0 1 1 0-3.096a1.548 1.548 0 0 1 0 3.096m11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277c-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387c2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
        </Link>
        <Link href="https://github.com/steeevin88" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="2m" height="2em" viewBox="0 0 24 24" fill="#000000"><path fill="#000000" fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336a9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2" clipRule="evenodd"></path></svg>
        </Link>
        <Link href="mailto:stevenleusa79@yahoo.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 20"><path fill="#000000" d="m1.574 5.286l7.5 4.029c.252.135.578.199.906.199s.654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286m17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199s-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219"></path></svg>
        </Link>

      </div>
      {/* Nav Links */}
      <div className="flex justify-end flex-col gap-4 mt-3 mb-8 lg:flex-row lg:gap-12 lg:mt-1">
        <Link href="#home" onClick={() => setToggled(!toggled)}>Home</Link>
        <Link href="#about" onClick={() => setToggled(!toggled)}>About</Link>
        <Link href="#experience" onClick={() => setToggled(!toggled)}>Experience</Link>
        <Link href="#projects" onClick={() => setToggled(!toggled)}>Projects</Link>
        <Link href="https://drive.google.com/file/d/1dB6AlarknwgvHGMbZal8BAXrUnX5cYvn/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</Link>
      </div>
    </nav>
  )
}
