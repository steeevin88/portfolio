"use client"
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import classNames from "classnames";

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
              <Link href="https://www.linkedin.com/in/steeevin/" target="_blank" rel="noopener noreferrer" className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill={linkColor}><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8.339 18.337H5.667v-8.59h2.672zM7.003 8.574a1.548 1.548 0 1 1 0-3.096a1.548 1.548 0 0 1 0 3.096m11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277c-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387c2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
              </Link>
              <Link href="https://github.com/steeevin88" target="_blank" rel="noopener noreferrer" className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill={linkColor}><path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336a9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2" clipRule="evenodd"></path></svg>
              </Link>
              <Link href="mailto:stevenleusa79@yahoo.com" target="_blank" rel="noopener noreferrer" className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20" fill={linkColor}><path d="m1.574 5.286l7.5 4.029c.252.135.578.199.906.199s.654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286m17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199s-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219"></path></svg>
              </Link>
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
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                {/* You can add a profile image here if you have one */}
              </div>
              <div className="ml-3">
                <div className={classNames("text-base font-medium leading-none", linkColor)}>Steven Le</div>
                <div className={classNames("text-sm font-medium leading-none", linkColor)}>stevenleusa79@yahoo.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/in/steven-le-90b28b23b/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill={linkColor}><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8.339 18.337H5.667v-8.59h2.672zM7.003 8.574a1.548 1.548 0 1 1 0-3.096a1.548 1.548 0 0 1 0 3.096m11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277c-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387c2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
                </Link>
                <Link href="https://github.com/steeevin88" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill={linkColor}><path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336a9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2" clipRule="evenodd"></path></svg>
                </Link>
                <Link href="mailto:stevenleusa79@yahoo.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20" fill={linkColor}><path d="m1.574 5.286l7.5 4.029c.252.135.578.199.906.199s.654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286m17.039 2.203l-7.727  4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199s-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
