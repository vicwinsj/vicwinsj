"use client";

import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ProjectProps } from "@/types/project";

export default function ShareButton({ title, description }: ProjectProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: description?.short,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Sharing failed", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Clipboard copy failed", err);
      }
    }
  };

  return (
    <Button
      className="flex items-center gap-3"
      variant="outline"
      onClick={handleShare}
    >
      {copied ? (
        <>
          <FontAwesomeIcon
            icon={faCheck}
            size="sm"
            className="size-3"
          ></FontAwesomeIcon>
          Copied link!
        </>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            size="sm"
            className="size-3"
          ></FontAwesomeIcon>
          Share
        </>
      )}
    </Button>
  );
}
