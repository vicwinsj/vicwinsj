"use client";

import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button
      onClick={handleGoBack}
      variant="outline"
      className="flex capitalize items-center gap-3"
    >
      <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>Go back
    </Button>
  );
};
