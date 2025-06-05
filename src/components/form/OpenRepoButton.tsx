"use client";

import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "@/types/project";

export const OpenRepoButton = ({ repoLink }: ProjectProps) => {
  const handleOpenRepo = () => {
    if (repoLink) {
      window.open(repoLink, "_blank");
    }
  };

  return (
    <Button
      onClick={handleOpenRepo}
      className="flex items-center gap-3"
      variant="secondary"
    >
      <FontAwesomeIcon
        className="size-3"
        icon={faGithub}
        size="lg"
      ></FontAwesomeIcon>
      GitHub repo
    </Button>
  );
};
