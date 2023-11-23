'use client'

import { useRef, useEffect, useState } from 'react'
import { usePathname, useRouter, useSelectedLayoutSegments } from 'next/navigation'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import SidebarLinkGroup from './sidebar-link-group'
import SidebarLink from './sidebar-link'
import SidebarLinkSubgroup from './sidebar-link-subgroup'
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
  // {
  //   label: 'Navigation Three - Submenu',
  //   key: 'SubMenu',
  //   icon: <SettingOutlined />,
  //   children: [
  //     {
  //       type: 'group',
  //       label: 'Item 1',
  //       children: [
  //         {
  //           label: 'Option 1',
  //           key: 'setting:1',
  //         },
  //         {
  //           label: 'Option 2',
  //           key: 'setting:2',
  //         },
  //       ],
  //     },
  //     {
  //       type: 'group',
  //       label: 'Item 2',
  //       children: [
  //         {
  //           label: 'Option 3',
  //           key: 'setting:3',
  //         },
  //         {
  //           label: 'Option 4',
  //           key: 'setting:4',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: (
  //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //       Navigation Four - Link
  //     </a>
  //   ),
  //   key: 'alipay',
  // },
]

export default function Sidebar() {
  const sidebar = useRef<HTMLDivElement>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const segments = useSelectedLayoutSegments()
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

      {/* Sidebar */}
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
          {/* Gradient bg displaying on light layout only */}
          <div
            className="absolute inset-0 -left-[9999px] bg-gradient-to-b from-slate-50 to-white pointer-events-none -z-10 dark:hidden"
            aria-hidden="true"
          ></div>

          <div className="fixed top-0 bottom-0 w-64 px-4 sm:px-6 md:pl-0 md:pr-8 overflow-y-auto no-scrollbar">
            <div className="pt-24 md:pt-28 pb-8">
              {/* Docs nav */}
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