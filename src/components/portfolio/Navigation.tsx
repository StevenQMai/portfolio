"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ThemeColors } from "./types";

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  themeColors: ThemeColors;
}

/** Order follows a natural visitor path: introduction → background → work samples → contact → credentials. */
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
  { href: "/experience", label: "Experience" },
  { href: "/career-goals", label: "Career goals" },
] as const;

const Navigation: React.FC<NavigationProps> = ({
  darkMode,
  toggleDarkMode,
  themeColors,
}) => {
  const pathname = usePathname();
  const navClasses = darkMode ? "bg-gray-950/80" : "bg-white/80";
  const borderClasses = darkMode ? "border-gray-800" : "border-gray-200";

  return (
    <nav
      aria-label="Primary"
      className={`sticky top-0 z-50 ${navClasses} py-3 sm:py-4 border-b ${borderClasses} backdrop-blur-md`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          <div className="-mx-1 flex flex-nowrap gap-x-3 gap-y-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0 scroll-smooth [scrollbar-width:thin]">
            {navItems.map(({ href, label }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`shrink-0 text-sm sm:text-[0.9375rem] px-1 py-1 rounded-md ${active ? `font-semibold ${themeColors.primary}` : "opacity-75 hover:opacity-100"} transition-opacity duration-200`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <button
            type="button"
            onClick={toggleDarkMode}
            className={`${themeColors.primary} cursor-pointer transition-opacity duration-200 hover:opacity-90 self-start sm:self-auto rounded-md p-1`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
