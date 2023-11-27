"use client";

import Link from "next/link";
import { Button } from "@ailak/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Ai Lak
        </h1>
        <Link href="/docs/test">Docs</Link>
        <Button>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </main>
  );
}
