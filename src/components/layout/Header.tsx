"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import portrait from "@/assets/img/portrait.jpeg";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-radial-[circle_at_0%_10%]! from-racing-green/30 via-transparent to:transparent relative max-w-[var(--content-w)] h-[620px] sm:h-[800px] flex flex-col justify-center gap-15 items-center w-full">
      <nav className="relative mb-20 self-end w-99/100 sm:w-11/12 xl:w-9/12 h-30 pt-3 pl-3 bg-foreground/10 flex flex-col justify-between items-end sm:items-center gap-3 text-foreground/70 capitalize text-xl rounded-tl-3xl overflow-clip">
        <div className="w-11/12 h-1/2 sm:h-7/10 rounded-bl-xl absolute top-0 left-10 sm:left-15 xl:left-20 bg-radial-[circle_at_10%_50%] from-ginger/30 via-ginger/10 to-transparent" />
        <strong className="text-transparent bg-ginger bg-clip-text mix-blend-screen z-20 uppercase flex gap-3 tracking-widest w-fit text-[26px] sm:text-3xl lg:text-5xl h-fit">
          Victor Winsjansen
        </strong>
        <div className="self-start w-fit h-fit flex gap-3">
          <Link
            className={`${
              (pathname === "/" || pathname.startsWith("/article")) &&
              "font-semibold border-b-racing-green"
            } border-transparent w-full h-fit border-b-3 transition-colors duration-300 hover:text-white`}
            href="/"
          >
            Portfolio
          </Link>
          <Link
            className={`${
              pathname === "/contact" && "font-semibold border-b-racing-green"
            } border-transparent w-full h-fit border-b-3 transition-colors duration-300 hover:text-white`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
      <div className="-z-10 absolute -top-25 right-0 sm:top-0 sm:right-0 w-5/6 sm:w-2/3 lg:w-2/3 h-90 overflow-clip rounded-bl-3xl">
        <Image className="object-cover size-full" src={portrait} alt=""></Image>
      </div>
    </header>
  );
}
