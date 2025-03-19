import Link from "next/link";

export default function Header() {
   return (
      <header className="flex items-center justify-between gap-4 p-6 sticky top-0 z-50 bg-neutral-900 border-b border-b-neutral-300/10 *:uppercase">
         <Link
            href={"/"}
            className="hover:text-neutral-300 transition-colors duration-300 text-neutral-300/40"
         >
            home
         </Link>
         <ul className="flex items-center gap-4">
            <li>
               <Link
                  href={"/"}
                  className="hover:text-neutral-300 transition-colors duration-300 text-neutral-300/40"
               >
                  take picture
               </Link>
            </li>
            <li>
               <Link
                  href={"/"}
                  className="hover:text-neutral-300 transition-colors duration-300 text-neutral-300/40"
               >
                  log in
               </Link>
            </li>
         </ul>
      </header>
   );
}
