'use client';
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import Image from 'next/image';
import Link from "next/link";

export default function ProjectModalComponent({photoUrl, title, dateInfo, description, repoUrl, technologies} : {photoUrl : string, title : string, dateInfo : string, description : string, repoUrl : string, technologies : string}) {
  const [isToggled, toggle] = useState(false);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggle(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isToggled]);
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target === ref.current) {
        toggle(false);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [ref]);
  
  return(
    <div className="col-span-5 gap-0 text-center">
      <button className="bg-gray-700 rounded-lg text-primary-content text-sm p-2 border:none" onClick={()=>toggle(true)}>View more...</button>
      {<dialog ref={ref} className={classNames("modal", {"modal-open": isToggled})}>
          <div className="modal-box bg-secondary text-black text-wrap max-w-none md:w-[70%] flex flex-col gap-4">
            <div className="flex flex-col gap-4 text-left">
              <h3 className="font-bold text-5xl">{title}</h3>
              <div className="text-sm">{dateInfo} - <Link href={repoUrl} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-cyan-400">VIEW ON GITHUB</Link></div>
              <div className="text-2xl">{description}</div>
            </div>
            <Image src={photoUrl} alt="logo" width="64" height="64" className="w-auto h-auto border-4 border-gray-700 rounded-lg"/>
            <div className="text-2xl text-left">Technologies Used: {technologies}</div>
            <div className="modal-action col-span-2 justify-center">
              <form method="dialog">
                <button onClick={() => toggle(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-3xl">X</button>
              </form>
            </div>
          </div>
      </dialog>}
    </div>
  )
}
