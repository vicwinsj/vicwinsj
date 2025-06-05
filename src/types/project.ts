import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";

export type ProjectProps = {
  title?: string;
  slug?: string;
  image?: { url: string | StaticImageData; alt: string };
  caption?: string;
  description?: {
    short: string;
    detailed: string;
  };
  mainContent?: string[];
  articleLink?: Url;
  siteLink?: string | URL | undefined;
  repoLink?: string;
};
