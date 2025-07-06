"use client"
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import classNames from "classnames";
import SocialIcons from "./SocialIcons";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      const sections = ["home", "about", "experience", "projects"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const bottom = top + element.offsetHeight;
          if (position >= top && position < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarColor = () => {
    switch (activeSection) {
      case "home":
        return "bg-[#7C909A]";
      case "about":
        return "bg-gray-300";
      case "experience":
        return "bg-[#7C909A]";
      case "projects":
        return "bg-gray-300";
      default:
        return "bg-[#7C909A]";
    }
  };

  const linkColor = activeSection === "about" || activeSection === "projects" ? "text-gray-800" : "text-white";

  return (
    <nav className={classNames(
      "fixed z-10 w-full transition-all duration-300 ease-in-out",
      navbarColor(),
      {"shadow-md": scrollPosition > 0}
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Home", "About", "Experience", "Projects"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={classNames(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    linkColor,
                    {"bg-opacity-25 bg-white": activeSection === item.toLowerCase()}
                  )}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/steven_le_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={classNames("px-3 py-2 rounded-md text-sm font-medium", linkColor)}
              >
                Resume
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <SocialIcons />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setToggled(!toggled)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {toggled ? <IoClose className="block h-6 w-6" /> : <IoMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {toggled && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "About", "Experience", "Projects"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={classNames(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  linkColor,
                  {"bg-opacity-25 bg-white": activeSection === item.toLowerCase()}
                )}
                onClick={() => setToggled(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/steven_le_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classNames("block px-3 py-2 rounded-md text-base font-medium", linkColor)}
              onClick={() => setToggled(false)}
            >
              Resume
            </Link>
          </div>
          <div className="pb-3 border-t border-gray-700">
            <div className="mt-3 px-2 space-y-1">
              <div className="flex space-x-4">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
