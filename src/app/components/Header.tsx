import { Asterisk } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-b-neutral-300/10 bg-neutral-900 p-6 *:uppercase">
      <Link
        href={"/"}
        className="text-neutral-300/40 transition-colors duration-300 hover:text-neutral-300"
      >
        home
      </Link>
      <ul className="flex items-center gap-4">
        <li>
          <Link
            href={"/picture"}
            className="text-neutral-300/40 transition-colors duration-300 hover:text-neutral-300"
          >
            take picture
          </Link>
        </li>
        <li>
          <Asterisk className="size-4 text-neutral-300/40" />
        </li>
        <li>
          <Link
            href={"/auth"}
            className="text-neutral-300/40 transition-colors duration-300 hover:text-neutral-300"
          >
            log in
          </Link>
        </li>
      </ul>
    </header>
  );
}
