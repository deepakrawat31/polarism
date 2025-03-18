import Link from "next/link";

export default function Header() {
   return (
      <header className="flex items-center justify-between gap-4 p-6 sticky top-0 z-50 bg-neutral-900 border-b border-b-neutral-300/20 *:uppercase">
         <Link href={"/"}>home</Link>
         <ul className="flex items-center gap-4">
            <li>
               <Link href={"/"}>log in</Link>
            </li>
         </ul>
      </header>
   );
}
