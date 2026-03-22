"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { personalInfo } from "@/data/personalInfo";
import type { PersonalInfoData, ThemeColors } from "@/components/portfolio/types";

interface PortfolioThemeContextValue {
  darkMode: boolean;
  toggleDarkMode: () => void;
  themeColors: ThemeColors;
  personalInfo: PersonalInfoData;
}

const PortfolioThemeContext = createContext<PortfolioThemeContextValue | null>(
  null,
);

export function PortfolioThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
      }
      return next;
    });
  }, []);

  const themeColors: ThemeColors = useMemo(
    () => ({
      primary: darkMode ? "text-amber-400" : "text-violet-600",
      primaryHover: darkMode ? "hover:text-amber-300" : "hover:text-amber-700",
      primaryBg: darkMode ? "bg-amber-900/20" : "bg-violet-50",
      primaryBorder: darkMode ? "border-amber-800" : "border-violet-200",
      accent: darkMode ? "text-amber-400" : "text-amber-600",
      accentBg: darkMode ? "bg-amber-900/20" : "bg-violet-50",
      gradient: darkMode ? "from-gray-900 to-gray-950" : "from-gray-50 to-gray-100",
      socialIcon: darkMode
        ? "text-amber-400 hover:text-amber-300"
        : "text-violet-600 hover:text-violet-700",
    }),
    [darkMode],
  );

  const value = useMemo(
    () => ({
      darkMode,
      toggleDarkMode,
      themeColors,
      personalInfo,
    }),
    [darkMode, toggleDarkMode, themeColors],
  );

  return (
    <PortfolioThemeContext.Provider value={value}>
      {children}
    </PortfolioThemeContext.Provider>
  );
}

export function usePortfolioTheme() {
  const ctx = useContext(PortfolioThemeContext);
  if (!ctx) {
    throw new Error("usePortfolioTheme must be used within PortfolioThemeProvider");
  }
  return ctx;
}
