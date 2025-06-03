"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/form/Button";
import { projects } from "@/data/projects";

type PageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <div>Project not found.</div>;

  const handleOpenSite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (project.siteLink) {
      window.open(project.siteLink, "_blank");
    }
  };

  const handleOpenRepo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (project.repoLink) {
      window.open(project.repoLink, "_blank");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center px-1 sm:px-10 h-full max-w-[var(--content-w)] w-full">
      <article className="flex flex-col bg-background/30 p-6 sm:p-10 rounded-xl gap-6 sm:gap-10 items-center w-full">
        {/* Title & Share Button */}
        <section className="w-full flex flex-col-reverse gap-6 sm:flex-row justify-between items-end sm:items-center">
          <h1 className="text-start w-full text-xl sm:text-3xl">
            {project.title}
          </h1>
          <Button className="flex items-center gap-3" variant="outline">
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              size="sm"
              className="size-3"
            ></FontAwesomeIcon>
            Share
          </Button>
        </section>

        {/* Description, Links & Image */}
        <section className="w-full flex flex-col sm:flex-row border-y-[.1px] border-foreground/30 py-6 sm:py-10 gap-6 sm:gap-10">
          <div className="flex flex-col gap-6 sm:gap-10 flex-1 w-full h-fit">
            <strong className="font-serif flex-1 w-full text-xl sm:text-2xl">
              {project.description.detailed}
            </strong>

            <div className="w-full flex gap-3 items-center">
              <Button
                onClick={handleOpenSite}
                className="flex items-center gap-3"
              >
                <FontAwesomeIcon
                  className="size-3"
                  icon={faWindowRestore}
                  size="lg"
                ></FontAwesomeIcon>
                Live site
              </Button>
              <Button
                onClick={handleOpenRepo}
                className="flex items-center gap-3"
              >
                <FontAwesomeIcon
                  className="size-3"
                  icon={faGithub}
                  size="lg"
                ></FontAwesomeIcon>
                GitHub repo
              </Button>
            </div>
          </div>

          {project.image && (
            <div className="flex-2 w-full flex flex-col border-10 border-foreground/10 rounded-md h-full overflow-hidden">
              <div className="w-full h-full">
                <Image
                  src={project.image.url}
                  alt={project.image.alt}
                  className="object-cover size-full"
                ></Image>
              </div>
              <p className="pt-3 italic text-md bg-foreground/10">
                {project.image.alt}.
              </p>
            </div>
          )}
        </section>

        {/* Main Content, Improvements, Reflections */}
        <section className="flex flex-col gap-3 w-full">
          <h2 className="w-full text-xl">Reflection</h2>
          <p className="font-serif">{project.content}</p>
        </section>
      </article>
    </main>
  );
}
