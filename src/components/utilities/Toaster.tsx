import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Toaster = ({
  message,
  error,
}: {
  message: string;
  error?: boolean;
}) => {
  return (
    <div className="text-foreground bg-background shadow-lg rounded-md px-6 py-3 flex items-center gap-3">
      {error ? (
        <FontAwesomeIcon
          className="text-red-500"
          icon={faXmark}
        ></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon
          className="text-racing-green"
          icon={faCheck}
        ></FontAwesomeIcon>
      )}
      <strong>{message}</strong>
    </div>
  );
};
