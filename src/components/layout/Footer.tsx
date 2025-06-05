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
        variant="outline"
        onClick={ScrollToTop}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          size="sm"
          className="size-3"
        ></FontAwesomeIcon>
        To top
      </Button>
      <p className="text-xs">©Victor Winsjansen 2025</p>
    </footer>
  );
}
