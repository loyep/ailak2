import { type ReactNode } from "react";
import Header from "@/layouts/docs/header";
import Sidebar from "@/layouts/docs/sidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`font-aspekta bg-white font-[350] text-slate-800 antialiased dark:bg-slate-900 dark:text-slate-200`}
    >
      <div className="flex min-h-screen flex-col overflow-hidden">
        <Header />
        <main className="grow">
          <section className="relative">
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2">
              {/* <Image className="max-w-none" src={Illustration} priority alt="Page illustration" aria-hidden="true" /> */}
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              {/* Main content */}
              <div>
                {/* Sidebar */}
                <Sidebar />

                {/* Page container */}
                <div className="md:grow md:pl-64 lg:pr-6 xl:pr-0">
                  <div className="pb-8 pt-24 md:pl-6 md:pt-28 lg:pl-12">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
