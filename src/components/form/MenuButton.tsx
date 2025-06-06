import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuButtonProps } from "@/types/button";

export const MenuButton = ({ page, children, link }: MenuButtonProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${
        (page === "/article"
          ? pathname === "/" || pathname.startsWith(page)
          : pathname.startsWith(page)) && "font-semibold border-b-racing-green"
      } py-1 px-3 border-transparent w-full h-fit border-b-3 transition-colors duration-300 hover:text-foreground hover:bg-foreground/10 rounded-t-xl`}
      href={link}
    >
      {children}
    </Link>
  );
};
