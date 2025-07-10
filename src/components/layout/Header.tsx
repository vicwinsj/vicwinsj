"use client";

import Image from "next/image";
import hero from "@/assets/img/hero.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { MenuButton } from "../form/MenuButton";
import { usePathname } from "next/navigation";
import { Button } from "../form/Button";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`${
        pathname === "/"
          ? "bg-radial-[circle_at_0%_10%]! from-racing-green/30 via-transparent to:transparent sm:border-b-ginger/10 sm:border-b-1"
          : "bg-transparent"
      } w-full`}
    >
      <div
        className={`${
          pathname === "/" ? "min-h-dvh" : "h-full"
        } justify-start w-full relative flex flex-col items-center gap-10 max-w-[var(--content-w)]`}
      >
        <div
          className={`relative ${
            pathname === "/" ? "mt-50 sm:mt-80" : "mt-10"
          } self-end w-99/100 sm:w-10/12 lg:w-9/12 h-25 bg-foreground/10 flex flex-col justify-between items-end gap-3 text-foreground/70 capitalize text-xl rounded-tl-3xl overflow-clip backdrop-blur-xs`}
        >
          <svg
            className="absolute top-3 sm:top-2 left-2 sm:left-4 size-5 sm:size-7 lg:size-10 text-racing-green"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.908 6.71412C38.972 6.82212 38.144 7.09212 37.424 7.52412C36.74 7.95612 36.344 8.24412 36.236 8.38812C36.128 8.49612 35.966 8.67612 35.75 8.92812C35.57 9.14412 35.354 9.48612 35.102 9.95412C34.85 10.3861 34.544 10.9441 34.184 11.6281C33.86 12.3121 33.482 13.1761 33.05 14.2201C32.33 15.9481 31.538 17.8921 30.674 20.0521C29.81 22.1761 28.928 24.3721 28.028 26.6401C27.128 28.9081 26.228 31.1941 25.328 33.4981C24.464 35.7661 23.636 37.9261 22.844 39.9781L20.198 45.3781H19.55C18.362 42.4621 17.246 39.6901 16.202 37.0621C15.194 34.3981 14.204 31.8421 13.232 29.3941C12.26 26.9461 11.324 24.5881 10.424 22.3201C9.524 20.0161 8.62401 17.7121 7.72401 15.4081C7.47201 14.7241 7.23801 14.1301 7.02201 13.6261C6.80601 13.1221 6.59001 12.6541 6.37401 12.2221C6.19401 11.7901 5.99601 11.3761 5.78 10.9801C5.60001 10.5841 5.40201 10.1701 5.18601 9.73812C5.07801 9.52212 4.91601 9.25212 4.70001 8.92812C4.48401 8.60412 4.178 8.28012 3.782 7.95612C3.422 7.63212 2.97201 7.36212 2.432 7.14612C1.892 6.89412 1.208 6.75012 0.380005 6.71412V6.12012H16.526V6.66012C16.346 6.69612 16.022 6.75012 15.554 6.82212C15.086 6.89412 14.6 7.03812 14.096 7.25412C13.628 7.43412 13.196 7.70412 12.8 8.06412C12.44 8.42412 12.26 8.87412 12.26 9.41412C12.26 9.73812 12.458 10.5121 12.854 11.7361C13.25 12.9241 13.754 14.3821 14.366 16.1101C15.014 17.8021 15.734 19.6741 16.526 21.7261C17.318 23.7421 18.092 25.7401 18.848 27.7201C19.64 29.6641 20.378 31.4821 21.062 33.1741C21.746 34.8661 22.286 36.2521 22.682 37.3321C22.862 36.9361 23.186 36.1081 23.654 34.8481C24.158 33.5881 24.77 32.0221 25.49 30.1501C26.246 28.2781 27.074 26.1541 27.974 23.7781C28.874 21.4021 29.81 18.9181 30.782 16.3261C31.502 14.3461 31.97 12.8521 32.186 11.8441C32.402 10.8001 32.51 10.0801 32.51 9.68412C32.51 9.14412 32.33 8.69412 31.97 8.33412C31.61 7.97412 31.16 7.68612 30.62 7.47012C30.08 7.21812 29.504 7.03812 28.892 6.93012C28.316 6.78612 27.794 6.69612 27.326 6.66012V6.12012H39.908V6.71412Z"
              fill="currentColor"
            />
            <path
              d="M49.908 6.71412C48.972 6.82212 48.144 7.09212 47.424 7.52412C46.74 7.95612 46.344 8.24412 46.236 8.38812C46.128 8.49612 45.966 8.67612 45.75 8.92812C45.57 9.14412 45.354 9.48612 45.102 9.95412C44.85 10.3861 44.544 10.9441 44.184 11.6281C43.86 12.3121 43.482 13.1761 43.05 14.2201C42.33 15.9481 41.538 17.8921 40.674 20.0521C39.81 22.1761 38.928 24.3721 38.028 26.6401C37.128 28.9081 36.228 31.1941 35.328 33.4981C34.464 35.7661 33.636 37.9261 32.844 39.9781L30.198 45.3781H29.55C28.362 42.4621 27.246 39.6901 26.202 37.0621C25.194 34.3981 24.204 31.8421 23.232 29.3941C22.26 26.9461 21.324 24.5881 20.424 22.3201C19.524 20.0161 18.624 17.7121 17.724 15.4081C17.472 14.7241 17.238 14.1301 17.022 13.6261C16.806 13.1221 16.59 12.6541 16.374 12.2221C16.194 11.7901 15.996 11.3761 15.78 10.9801C15.6 10.5841 15.402 10.1701 15.186 9.73812C15.078 9.52212 14.916 9.25212 14.7 8.92812C14.484 8.60412 14.178 8.28012 13.782 7.95612C13.422 7.63212 12.972 7.36212 12.432 7.14612C11.892 6.89412 11.208 6.75012 10.38 6.71412V6.12012H26.526V6.66012C26.346 6.69612 26.022 6.75012 25.554 6.82212C25.086 6.89412 24.6 7.03812 24.096 7.25412C23.628 7.43412 23.196 7.70412 22.8 8.06412C22.44 8.42412 22.26 8.87412 22.26 9.41412C22.26 9.73812 22.458 10.5121 22.854 11.7361C23.25 12.9241 23.754 14.3821 24.366 16.1101C25.014 17.8021 25.734 19.6741 26.526 21.7261C27.318 23.7421 28.092 25.7401 28.848 27.7201C29.64 29.6641 30.378 31.4821 31.062 33.1741C31.746 34.8661 32.286 36.2521 32.682 37.3321C32.862 36.9361 33.186 36.1081 33.654 34.8481C34.158 33.5881 34.77 32.0221 35.49 30.1501C36.246 28.2781 37.074 26.1541 37.974 23.7781C38.874 21.4021 39.81 18.9181 40.782 16.3261C41.502 14.3461 41.97 12.8521 42.186 11.8441C42.402 10.8001 42.51 10.0801 42.51 9.68412C42.51 9.14412 42.33 8.69412 41.97 8.33412C41.61 7.97412 41.16 7.68612 40.62 7.47012C40.08 7.21812 39.504 7.03812 38.892 6.93012C38.316 6.78612 37.794 6.69612 37.326 6.66012V6.12012H49.908V6.71412Z"
              fill="currentColor"
            />
            <path
              d="M44.908 6.71412C43.972 6.82212 43.144 7.09212 42.424 7.52412C41.74 7.95612 41.344 8.24412 41.236 8.38812C41.128 8.49612 40.966 8.67612 40.75 8.92812C40.57 9.14412 40.354 9.48612 40.102 9.95412C39.85 10.3861 39.544 10.9441 39.184 11.6281C38.86 12.3121 38.482 13.1761 38.05 14.2201C37.33 15.9481 36.538 17.8921 35.674 20.0521C34.81 22.1761 33.928 24.3721 33.028 26.6401C32.128 28.9081 31.228 31.1941 30.328 33.4981C29.464 35.7661 28.636 37.9261 27.844 39.9781L25.198 45.3781H24.55C23.362 42.4621 22.246 39.6901 21.202 37.0621C20.194 34.3981 19.204 31.8421 18.232 29.3941C17.26 26.9461 16.324 24.5881 15.424 22.3201C14.524 20.0161 13.624 17.7121 12.724 15.4081C12.472 14.7241 12.238 14.1301 12.022 13.6261C11.806 13.1221 11.59 12.6541 11.374 12.2221C11.194 11.7901 10.996 11.3761 10.78 10.9801C10.6 10.5841 10.402 10.1701 10.186 9.73812C10.078 9.52212 9.91601 9.25212 9.70001 8.92812C9.48401 8.60412 9.178 8.28012 8.782 7.95612C8.422 7.63212 7.97201 7.36212 7.432 7.14612C6.892 6.89412 6.208 6.75012 5.38 6.71412V6.12012H21.526V6.66012C21.346 6.69612 21.022 6.75012 20.554 6.82212C20.086 6.89412 19.6 7.03812 19.096 7.25412C18.628 7.43412 18.196 7.70412 17.8 8.06412C17.44 8.42412 17.26 8.87412 17.26 9.41412C17.26 9.73812 17.458 10.5121 17.854 11.7361C18.25 12.9241 18.754 14.3821 19.366 16.1101C20.014 17.8021 20.734 19.6741 21.526 21.7261C22.318 23.7421 23.092 25.7401 23.848 27.7201C24.64 29.6641 25.378 31.4821 26.062 33.1741C26.746 34.8661 27.286 36.2521 27.682 37.3321C27.862 36.9361 28.186 36.1081 28.654 34.8481C29.158 33.5881 29.77 32.0221 30.49 30.1501C31.246 28.2781 32.074 26.1541 32.974 23.7781C33.874 21.4021 34.81 18.9181 35.782 16.3261C36.502 14.3461 36.97 12.8521 37.186 11.8441C37.402 10.8001 37.51 10.0801 37.51 9.68412C37.51 9.14412 37.33 8.69412 36.97 8.33412C36.61 7.97412 36.16 7.68612 35.62 7.47012C35.08 7.21812 34.504 7.03812 33.892 6.93012C33.316 6.78612 32.794 6.69612 32.326 6.66012V6.12012H44.908V6.71412Z"
              fill="currentColor"
            />
          </svg>
          <div className="w-11/12 h-1/2 rounded-bl-xl bg-linear-to-r from-background/30 via-background/20 to-background/10 z-10 text-sm ">
            <div className="h-full mx-1 sm:mx-10 flex items-center justify-end gap-3 ">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/victor-winsjansen-71773a83/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit h-fit z-100 flex gap-1 items-center transition-colors duration-300 hover:text-foreground"
                >
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>LinkedIn
                </a>
                <a
                  href="https://github.com/vicwinsj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit h-fit z-100 flex gap-1 items-center transition-colors duration-300 hover:text-foreground"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>GitHub
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
            </div>
          </div>
          <nav className="transition-all duration-300 self-start w-fit h-fit flex">
            <MenuButton page="/" link="/">
              Portfolio
            </MenuButton>
            <MenuButton page="/about" link="/about">
              About
            </MenuButton>
            <MenuButton page="/contact" link="/contact">
              Contact
            </MenuButton>
          </nav>
        </div>
        {pathname == "/" && (
          <>
            <div className="-z-10 absolute top-0 right-0 sm:top-0 sm:right-0 w-5/6 sm:w-2/3 lg:w-2/3 h-60 sm:h-90 overflow-clip rounded-bl-3xl">
              <Image
                className="object-cover size-full"
                src={hero}
                alt=""
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-10">
              <strong className="w-fit text-2xl sm:text-3xl">
                <h1 className="text-3xl sm:text-5xl">
                  I&apos;m Victor Winsjansen,
                </h1>
                a front end developer into logic and aesthetics.
              </strong>
              <div className="flex gap-3">
                <Button asChild variant="primary">
                  <Link href="/about">Read bio</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#projects">
                    My work{" "}
                    <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                  </Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
