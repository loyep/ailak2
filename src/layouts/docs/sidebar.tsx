'use client'

import { useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Transition } from '@headlessui/react'
import { Menu, type MenuProps } from 'antd'

const sidebars: MenuProps['items'] = [
  {
    label: 'Indroduction',
    key: '/docs/introduction',
  },
  {
    label: 'Getting Started',
    key: '/docs/getting-started',
  },
  {
    label: 'FAQ',
    key: '/docs/faq',
    children: [
      {
        label: 'Install FAQ',
        key: '/docs/faq/install-faq',
      },
    ],
  }
]

export default function Sidebar() {
  const sidebar = useRef<HTMLDivElement>(null)
  const [sidebarOpen] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  const [current, setCurrent] = useState(pathname);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    router.push(e.key)
  };

  return (
    <>
      {/* Backdrop */}
      <Transition
        className="md:hidden fixed inset-0 z-10 bg-slate-900 bg-opacity-20 transition-opacity"
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
          className="fixed left-0 top-0 bottom-0 w-64 h-screen border-r border-slate-200 md:left-auto md:shrink-0 z-10 md:!opacity-100 md:!block dark:border-slate-800 dark:bg-slate-900"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="absolute inset-0 -left-[9999px] bg-gradient-to-b from-slate-50 to-white pointer-events-none -z-10 dark:hidden"
            aria-hidden="true"
          ></div>

          <div className="fixed top-0 bottom-0 w-64 px-4 sm:px-6 md:pl-0 md:pr-8 overflow-y-auto no-scrollbar">
            <div className="pt-24 md:pt-28 pb-8">
              <nav className="md:block">
                <Menu onClick={onClick} selectedKeys={[current]} theme='dark' mode="inline" items={sidebars} />
              </nav>
            </div>
          </div>
        </Transition>
      </div>           
    </>
  )
}