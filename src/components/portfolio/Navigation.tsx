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

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/career-goals", label: "Career Goals" },
  { href: "/projects", label: "Projects" },
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
      className={`sticky top-0 z-50 ${navClasses} py-4 border-b ${borderClasses} backdrop-blur-md`}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {navItems.map(({ href, label }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm ${active ? `font-semibold ${themeColors.primary}` : "opacity-70 hover:opacity-100"} transition-all duration-300 hover:scale-105`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <button
            type="button"
            onClick={toggleDarkMode}
            className={`${themeColors.primary} cursor-pointer transition-all duration-300 hover:scale-110 self-start sm:self-auto`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
