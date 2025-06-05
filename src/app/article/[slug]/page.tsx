import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/form/Button";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { GoBackButton } from "@/components/form/GoBackButton";
import { OpenSiteButton } from "@/components/form/OpenSiteButton";
import { OpenRepoButton } from "@/components/form/OpenRepoButton";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="flex flex-col items-center justify-center px-1 sm:px-10 h-full max-w-[var(--content-w)] w-full">
      <article className="flex flex-col bg-background/30 p-6 sm:p-10 rounded-xl gap-6 sm:gap-10 items-center w-full">
        {/* Go Back, Title & Share Button */}
        <section className="w-full flex flex-col-reverse gap-6 sm:flex-row justify-between items-end sm:items-center">
          <GoBackButton />
          <h1 className="text-start w-fit text-xl sm:text-3xl">
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
              <OpenSiteButton siteLink={project.siteLink} />
              <OpenRepoButton repoLink={project.repoLink} />
            </div>
          </div>

          {project.image && (
            <div className="flex-2 w-full flex flex-col border-10 border-foreground/10 rounded-md h-full overflow-hidden">
              <div className="w-full h-full">
                <Image
                  src={project.image.url}
                  alt={project.image.alt}
                  className="object-top object-cover size-full"
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
          <h2 className="w-full text-xl">My Reflections</h2>
          {Array.isArray(project.mainContent) && (
            <>
              {project.mainContent.map((paragraph) => (
                <p className="font-serif" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </>
          )}
        </section>
      </article>
    </main>
  );
}
