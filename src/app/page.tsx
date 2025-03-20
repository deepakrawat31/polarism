import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[40rem] flex-col items-center justify-center gap-8 p-4 md:p-8">
      <h1 className="font-ampunsuhu text-9xl">polarism</h1>
      <p className="flex w-full max-w-3xl flex-col gap-8"></p>
      <Link href={"/"}></Link>
    </main>
  );
}
