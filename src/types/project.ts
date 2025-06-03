import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";

export type ProjectProps = {
  title: string;
  slug?: string;
  image?: { url: string | StaticImageData; alt: string };
  caption?: string;
  description: {
    short: string;
    detailed: string;
  };
  content?: string;
  articleLink?: Url;
  siteLink?: string;
  repoLink?: string;
};
