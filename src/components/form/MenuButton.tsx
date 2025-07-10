import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuButtonProps } from "@/types/button";

export const MenuButton = ({ page, children, link }: MenuButtonProps) => {
  const pathname = usePathname();

  const isActive =
    page === "/"
      ? pathname === "/" || pathname.startsWith("/article")
      : pathname.startsWith(page);

  return (
    <Link
      className={`${
        isActive ? "font-semibold border-b-racing-green" : ""
      } py-1 px-3 border-transparent w-full h-fit border-b-[3px] transition-colors duration-300 hover:text-foreground hover:bg-foreground/10`}
      href={link}
    >
      {children}
    </Link>
  );
};
