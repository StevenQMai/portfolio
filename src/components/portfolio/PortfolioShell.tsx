"use client";

import React from "react";
import {
  PortfolioThemeProvider,
  usePortfolioTheme,
} from "@/context/PortfolioThemeContext";
import Navigation from "./Navigation";
import Footer from "./Footer";

function PortfolioShellInner({ children }: { children: React.ReactNode }) {
  const { darkMode, themeColors, toggleDarkMode, personalInfo } =
    usePortfolioTheme();

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}
    >
      <a
        href="#main-content"
        className={`skip-to-main ${darkMode ? "skip-to-main--dark" : "skip-to-main--light"}`}
      >
        Skip to main content
      </a>
      <div
        className={`fixed inset-0 bg-gradient-to-br ${themeColors.gradient} opacity-5 z-0`}
      />
      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        themeColors={themeColors}
      />
      <main
        id="main-content"
        tabIndex={-1}
        className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-12 relative z-10 text-base leading-relaxed"
      >
        {children}
      </main>
      <Footer
        personalInfo={personalInfo}
        themeColors={themeColors}
        darkMode={darkMode}
      />
    </div>
  );
}

export default function PortfolioShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortfolioThemeProvider>
      <PortfolioShellInner>{children}</PortfolioShellInner>
    </PortfolioThemeProvider>
  );
}
