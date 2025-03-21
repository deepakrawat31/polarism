import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[40rem] flex-col items-center justify-center gap-8 p-4 md:p-8">
      <h1 className="font-ampunsuhu text-9xl">polarism</h1>
      <p className="uppercase">get goofy and click some memorable pictures.</p>
      <Link
        href={"/"}
        className="flex items-center gap-2 uppercase *:rounded-full *:bg-neutral-300 *:text-neutral-900"
      >
        <span className="px-4 py-1.5">get your pose ready</span>
        <span className="p-2">
          <ArrowUpRight className="size-5" weight="light" />
        </span>
      </Link>
    </main>
  );
}
