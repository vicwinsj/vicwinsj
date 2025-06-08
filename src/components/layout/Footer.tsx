"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../form/Button";

export default function Footer() {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="p-10 max-w-[var(--content-w)] text-white w-full flex flex-col gap-10 items-center">
      <Button
        className="flex items-center gap-3"
        variant="transparent"
        onClick={ScrollToTop}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          size="sm"
          className="size-3"
        ></FontAwesomeIcon>
      </Button>
      <p className="text-xs">©2025 Victor Winsjansen</p>
    </footer>
  );
}
