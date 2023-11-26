"use client";

import { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Transition } from "@headlessui/react";
import { Menu, type MenuProps } from "antd";

const sidebars: MenuProps["items"] = [
  {
    label: "Indroduction",
    key: "/docs/introduction",
  },
  {
    label: "Getting Started",
    key: "/docs/getting-started",
  },
  {
    label: "FAQ",
    key: "/docs/faq",
    children: [
      {
        label: "Install FAQ",
        key: "/docs/faq/install-faq",
      },
    ],
  },
];

export default function Sidebar() {
  const sidebar = useRef<HTMLDivElement>(null);
  const [sidebarOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const [current, setCurrent] = useState(pathname);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    router.push(e.key);
  };

  return (
    <>
      {/* Backdrop */}
      <Transition
        className="fixed inset-0 z-10 bg-slate-900 bg-opacity-20 transition-opacity md:hidden"
        show={sidebarOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        aria-hidden="true"
      />

      <div ref={sidebar}>
        <Transition
          show={sidebarOpen}
          unmount={false}
          as="aside"
          id="sidebar"
          className="fixed bottom-0 left-0 top-0 z-10 h-screen w-64 border-r border-slate-200 dark:border-slate-800 dark:bg-slate-900 md:left-auto md:!block md:shrink-0 md:!opacity-100"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="pointer-events-none absolute inset-0 -left-[9999px] -z-10 bg-gradient-to-b from-slate-50 to-white dark:hidden"
            aria-hidden="true"
          ></div>

          <div className="no-scrollbar fixed bottom-0 top-0 w-64 overflow-y-auto px-4 sm:px-6 md:pl-0 md:pr-8">
            <div className="pb-8 pt-24 md:pt-28">
              <nav className="md:block">
                <Menu
                  onClick={onClick}
                  selectedKeys={[current]}
                  theme="dark"
                  mode="inline"
                  items={sidebars}
                />
              </nav>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}
