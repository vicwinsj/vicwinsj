import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/types/project";

export const ProjectCard = ({
  image,
  title,
  description,
  articleLink,
}: ProjectProps) => {
  return (
    <>
      {articleLink && (
        <Link
          title="Click to open article"
          href={articleLink}
          className="w-full h-full bg-background/30 hover:bg-background/50 hover:scale-101 rounded-xl overflow-hidden"
        >
          <article className="relative w-full h-full flex flex-col gap-6 sm:gap-10 p-6 sm:p-10 text-foreground">
            <div className="absolute inset-0 w-full h-full sm:active:bg-racing-green/10"></div>

            <div className="w-full h-50 border-10 border-foreground/10 rounded-md">
              {image && (
                <Image
                  className="object-top object-cover size-full"
                  src={image.url}
                  alt={image.alt}
                />
              )}
            </div>

            <div className="h-full flex flex-col gap-3">
              <h3 className="text-xl">{title}</h3>
              <p className=" ">{description?.short}</p>
            </div>
          </article>
        </Link>
      )}
    </>
  );
};
