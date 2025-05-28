import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-full p-10 bg-background ">
      <nav className="flex gap-1 text-black capitalize font-semibold text-xl ">
        <Link
          className="transition-colors duration-300 hover:text-black/50"
          href="/articles"
        >
          My Work
        </Link>
        <Link
          className="transition-colors duration-300 hover:text-black/50"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
