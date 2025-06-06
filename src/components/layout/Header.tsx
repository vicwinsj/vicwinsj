"use client";

import Image from "next/image";
import portrait from "@/assets/img/portrait.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { MenuButton } from "../form/MenuButton";

export default function Header() {
  return (
    <header className="bg-radial-[circle_at_0%_10%]! from-racing-green/30 via-transparent to:transparent relative max-w-[var(--content-w)] min-h-dvh flex flex-col justify-center gap-10 items-center w-full">
      <nav className="mt-10 relative self-end w-99/100 sm:w-10/12 lg:w-9/12 h-25 pt-3 pl-3 bg-foreground/10 flex flex-col justify-between items-end gap-3 text-foreground/70 capitalize text-xl rounded-tl-3xl overflow-clip backdrop-blur-xs">
        <div className="w-11/12 h-1/2 rounded-bl-xl absolute top-0 left-10 sm:left-15 bg-linear-to-r from-background/30 via-background/10 to-transparent" />
        <div className="mx-10 flex gap-3 z-10 text-sm h-fit">
          <a
            href="https://www.linkedin.com/in/victor-winsjansen-71773a83/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit h-fit z-100 flex gap-1 items-center transition-colors duration-300 hover:text-foreground"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>LinkedIn
          </a>
          <a
            href="https://www.fiverr.com/vicwins"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit h-fit z-100 flex gap-1 items-center transition-colors duration-300 hover:text-foreground fill-foreground/70 hover:fill-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="15"
              height="15"
              viewBox="0 0 50 50"
            >
              <path
                fill="currentColor"
                d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34,36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z"
              ></path>
            </svg>
            Fiverr
          </a>
        </div>
        <div className="self-start w-fit h-fit flex gap-3">
          <MenuButton page="/article" link="/">
            Work
          </MenuButton>
          <MenuButton page="/contact" link="/contact">
            Contact
          </MenuButton>
          <MenuButton page="/about" link="/about">
            About
          </MenuButton>
        </div>
      </nav>
      <div className="-z-10 absolute -top-25 right-0 sm:top-0 sm:right-0 w-5/6 sm:w-2/3 lg:w-2/3 h-90 overflow-clip rounded-bl-3xl">
        <Image className="object-cover size-full" src={portrait} alt=""></Image>
      </div>
      <strong className="w-1/2 text-2xl sm:text-3xl">
        <h1 className="text-3xl sm:text-5xl">I&apos;m Victor Winsjansen,</h1>a
        front end developer into logic and aesthetics.
      </strong>
    </header>
  );
}
