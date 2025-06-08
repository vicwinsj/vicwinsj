"use client";

import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { ProjectProps } from "@/types/project";

export const OpenSiteButton = ({ siteLink }: ProjectProps) => {
  const handleOpenSite = () => {
    if (siteLink) {
      window.open(siteLink, "_blank");
    }
  };

  return (
    <Button onClick={handleOpenSite}>
      <FontAwesomeIcon
        className="size-3"
        icon={faWindowRestore}
        size="lg"
      ></FontAwesomeIcon>
      Live site
    </Button>
  );
};
