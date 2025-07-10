import Image from "next/image";
import portrait from "@/assets/img/portrait.jpeg";

export default function AboutPage() {
  return (
    <main className="px-6 sm:px-10 py-1 sm:py-3 main-page flex-col-reverse sm:flex-row gap-6 sm:gap-10">
      <article className="page-bg flex flex-col gap-1 sm:gap-3 w-full">
        <h1>About Victor</h1>
        <p className="w-full">
          <p className="mt-6 sm:mt-10">
            I’m a frontend developer with a background in journalism, content
            writing and translation. After years of working with words, I’ve
            transitioned into writing code – and I’ve found a new creative
            outlet in building user-friendly and accessible web interfaces.
          </p>
          <div className="float-none sm:float-right m-6 sm:m-10 size-70 sm:size-100 img-border">
            <Image
              className="object-cover size-full"
              src={portrait}
              alt="Portrait of Victor"
            ></Image>
          </div>
          <p className="mt-3">
            I specialize in modern frontend technologies like React, Tailwind,
            and TypeScript, and enjoy crafting responsive, visually appealing
            and accessible websites. I value clean code and design systems that
            scale.
          </p>
          <p className="mt-3">
            My approach combines logic and visual thinking – I’m
            detail-oriented, curious by nature, and thrive when turning complex
            ideas into simple, intuitive interfaces.
          </p>
          <p className="mt-3">
            I recently finished my frontend development studies, and I’m
            currently looking to apply my skills in collaborative teams where I
            can grow further as a developer while contributing from day one.
          </p>
          <p className="mt-3">
            When I’m not coding, I’m usually reading, writing, gaming, listening
            to music or taking a break studying the beauty of nature – always
            looking for inspiration in both words and visuals.
          </p>
        </p>
      </article>
    </main>
  );
}
