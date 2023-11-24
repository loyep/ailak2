import Link from "next/link";
// import { Button } from "antd";
import Header from '../../layouts/landing/header'

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Ai Lak
        </h1>
        <Header />
        <Link href="/docs/test">Docs</Link>
        {/* <Button>Ant Design</Button> */}
      </div>
    </main>
  );
}
