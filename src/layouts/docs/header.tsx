// import Logo from '@/components/ui/logo'
// import ThemeToggle from './theme-toggle'
// import Search from './search'

import { Button } from "antd";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed z-30 w-full">
      <div
        className="absolute inset-0 -z-10 border-b border-slate-200 bg-white bg-opacity-70 backdrop-blur dark:border-slate-800 dark:bg-slate-900"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="grow">
            <div className="flex items-center">
              <Logo />
              {/* <Search /> */}
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="flex">
            {/* Right side elements links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <li className="ml-4">
                {/* <a className="btn-sm inline-flex items-center text-slate-100 bg-blue-600 hover:bg-blue-700 shadow-sm" href="#0">
                  Support
                </a> */}
                <Button type="primary" shape="round">
                  Support
                </Button>
              </li>
              {/* Lights switch */}
              <li>{/* <ThemeToggle /> */}</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
