import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[40rem] flex-col items-center justify-center gap-8 p-4 md:p-8">
      <h1 className="font-cervanttis text-7xl text-amber-400 md:text-[10rem]">
        polarism
      </h1>
      <p className="max-w-xl text-center text-neutral-300/40 uppercase">
        a place to click some memorable pictures. goof up and start taking
        pictures.
      </p>
      <Link href={"/"} className="flex items-center gap-2 uppercase">
        <span className="">take picture</span>
        <ArrowUpRight className="size-5" />
      </Link>
    </main>
  );
}
