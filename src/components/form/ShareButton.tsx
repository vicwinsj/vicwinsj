"use client";

import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ProjectProps } from "@/types/project";
import toast from "react-hot-toast";
import { Toaster } from "../utilities/Toaster";
import { BASE_URL } from "@/constants/url";

export default function ShareButton({
  title,
  description,
  shareLink,
}: ProjectProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const shareData = {
      title: title ? title : "Untitled Project | Victor Winsjansen",
      text: description?.short ? description?.short : "No description found.",
      url: shareLink ? shareLink : BASE_URL,
    };

    if (navigator.share) {
      try {
        navigator.share(shareData);
      } catch (err) {
        if (err) {
          toast.custom(<Toaster error={true} message="Sharing failed" />);
          console.error("Sharing failed", err);
        }
      }
    } else if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        toast.custom(<Toaster message="Link copied to clipboard!" />);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        if (err) {
          toast.custom(<Toaster error={true} message="Failed to copy link!" />);
          console.error("Failed to copy link", err);
        }
      }
    } else {
      toast.custom(
        <Toaster error={true} message="Sharing failed. Try again later." />
      );
    }
  };

  return (
    <Button variant="transparent" onClick={handleShare}>
      {copied ? (
        <>
          <FontAwesomeIcon
            icon={faCheck}
            size="sm"
            className="size-3"
          ></FontAwesomeIcon>
        </>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            size="sm"
            className="size-3"
          ></FontAwesomeIcon>
        </>
      )}
    </Button>
  );
}
