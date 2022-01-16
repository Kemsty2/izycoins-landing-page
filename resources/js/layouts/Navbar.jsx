import { UserGroupIcon } from "@heroicons/react/outline";

import Toggle from "../components/ThemeToggle";
const navItems = [];

export default function Navbar() {
  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-primary-cobalt-blue-100 dark:bg-dark-mn-blue-bold transition-all py-2">
        <nav className="container flex justify-end items-center z-20">
          <div className="hidden lg:block text-sm text-neutral-grayish-blue">
            {navItems.map((navItem) => (
              <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
                {navItem}
              </a>
            ))}
          </div>

          <div className="flex flex-row gap-2">
            <button className="hidden lg:flex lg:items-center lg:justify-between bg-primary-cobalt-blue-600 dark:bg-primary-cobalt-blue-100  px-7 py-3 rounded-full text-neutral-white text-xs hover:button-brightness focus:outline-none focus:ring ring-blue-400 dark:ring-blue-800">
              <UserGroupIcon className="w-6 h-6" />
              <span>Teams</span>
            </button>
            <button
              className="lg:hidden flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-cobalt-blue-600 dark:bg-primary-cobalt-blue-100 border border-transparent rounded-lg active:bg-dark-gold-web hover:bg-primary-gold-web focus:outline-none focus:shadow-outline-purple"
              aria-label="Like"
              title="Teams"
            >
              <UserGroupIcon className="w-6 h-6" />
            </button>

            <Toggle />
          </div>
        </nav>
      </div>
    </>
  );
}
