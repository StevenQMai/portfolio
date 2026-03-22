"use client";

import React from "react";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";
import { careerMilestones, careerSteps, careerVision } from "@/data/siteContent";

const CareerGoalsPageContent: React.FC = () => {
  const { themeColors, darkMode } = usePortfolioTheme();
  const cardBg = darkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white shadow-sm";
  const border = darkMode ? "border-gray-800" : "border-gray-200";
  const muted = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <section className="mb-16 animate-fadeIn">
      <div className="flex items-center gap-1 mb-8">
        <span className={`inline-block size-1.5 rounded-full ${themeColors.primary}`} />
        <h1 className="text-3xl font-bold font-['Playfair_Display']">Career goals</h1>
      </div>

      <div className={`p-6 rounded-xl border mb-10 ${cardBg} ${border}`}>
        <h2 className="text-xl font-semibold mb-4">Long-term aspirations</h2>
        <p className="leading-relaxed opacity-90">{careerVision}</p>
      </div>

      <h2 className="text-2xl font-bold font-['Playfair_Display'] mb-6">Timeline &amp; milestones</h2>
      <div className="space-y-8 mb-12">
        {careerMilestones.map((m, i) => (
          <div key={i} className={`border-l-2 pl-6 relative ${themeColors.primaryBorder}`}>
            <div
              className={`absolute left-[-9px] top-1 size-4 rounded-full ${themeColors.accentBg} ring-4 ${darkMode ? "ring-gray-900" : "ring-white"}`}
            />
            <p className={`text-sm font-medium uppercase tracking-wide ${muted} mb-1`}>{m.timeframe}</p>
            <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
            <p className="opacity-90 leading-relaxed">{m.description}</p>
          </div>
        ))}
      </div>

      <div className={`p-6 rounded-xl border ${cardBg} ${border}`}>
        <h2 className="text-xl font-semibold mb-4">Concrete next steps</h2>
        <p className="opacity-80 mb-4">
          These are the repeatable actions I am taking now to bridge today&apos;s portfolio to the
          milestones above:
        </p>
        <ol className="list-decimal pl-5 space-y-3 opacity-90 leading-relaxed">
          {careerSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CareerGoalsPageContent;
