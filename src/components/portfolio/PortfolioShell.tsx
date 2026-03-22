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
      <div
        className={`fixed inset-0 bg-gradient-to-br ${themeColors.gradient} opacity-5 z-0`}
      />
      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        themeColors={themeColors}
      />
      <main className="max-w-3xl mx-auto px-6 py-12 relative z-10">{children}</main>
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
