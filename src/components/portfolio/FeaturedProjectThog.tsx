"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";
import { discoveryProject } from "@/data/siteContent";

const PIPELINE_STEPS = [
  { num: "01", label: "Capture",   sub: "Scapy\nsniff()" },
  { num: "02", label: "Parse",     sub: "Fields\nextracted" },
  { num: "03", label: "Aggregate", sub: "Pandas\nDataFrame" },
  { num: "04", label: "Visualize", sub: "Matplotlib\nPNG chart" },
  { num: "05", label: "Report",    sub: "HTML\nself-contained" },
];

const FeaturedProjectThog: React.FC = () => {
  const { themeColors, darkMode } = usePortfolioTheme();
  const cardBg = darkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white shadow-sm";
  const border = darkMode ? "border-gray-800" : "border-gray-200";
  const muted = darkMode ? "text-gray-400" : "text-gray-600";
  const codeBg = darkMode ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-200";
  const stepBg = darkMode ? "bg-gray-900/60" : "bg-gray-50";
  const linkClasses = `${themeColors.primary} ${themeColors.primaryHover}`;
  const [openQa, setOpenQa] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox]);

  interface ScreenshotProps {
    src: string | undefined;
    alt: string;
    label: string;
    description: string;
    aspectClass?: string;
  }

  const Screenshot: React.FC<ScreenshotProps> = ({
    src,
    alt,
    label,
    description,
    aspectClass = "aspect-video",
  }) => {
    if (src) {
      return (
        <figure className="w-full">
          <button
            type="button"
            onClick={() => setLightbox({ src, alt })}
            className={`group relative w-full ${aspectClass} rounded-lg overflow-hidden border ${border} block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
            aria-label={`Expand image: ${label}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 48rem"
            />
            <span className="absolute inset-0 flex items-end justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className={`flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-md ${darkMode ? "bg-gray-900/80 text-gray-200" : "bg-white/80 text-gray-700"}`}>
                <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
                Expand
              </span>
            </span>
          </button>
          <figcaption className={`mt-2 text-xs text-center ${muted}`}>{label}</figcaption>
        </figure>
      );
    }

    return (
      <figure className="w-full">
        <div
          role="img"
          aria-label={`Placeholder: ${label}`}
          className={`relative w-full ${aspectClass} rounded-lg border-2 border-dashed
            ${darkMode ? "border-gray-700 bg-gray-900/40" : "border-gray-300 bg-gray-50"}
            flex flex-col items-center justify-center gap-2 p-4`}
        >
          <svg
            className={`size-8 opacity-40 ${muted}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className={`text-xs font-semibold text-center ${muted}`}>{label}</p>
          <p className={`text-[11px] text-center leading-relaxed max-w-[220px] ${muted} opacity-70`}>
            {description}
          </p>
        </div>
        <figcaption className={`mt-2 text-xs text-center ${muted} opacity-50`}>
          Screenshot coming soon
        </figcaption>
      </figure>
    );
  };

  return (
    <>
    {/* ── Lightbox ── */}
    {lightbox && (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={lightbox.alt}
        className="fixed inset-0 z-50 flex flex-col p-4 gap-3 bg-black/80 backdrop-blur-sm"
        onClick={closeLightbox}
      >
        {/* Close button — in-flow so it takes real vertical space */}
        <div className="flex justify-end shrink-0">
          <button
            onClick={closeLightbox}
            aria-label="Close image"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image area — takes all remaining space between button and hint */}
        <div className="flex-1 flex items-center justify-center min-h-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* Hint text — in-flow so it takes real vertical space */}
        <p className="shrink-0 text-center text-white/60 text-xs">
          Click outside or press Esc to close
        </p>
      </div>
    )}
    <section className="mb-16 animate-fadeIn" aria-labelledby="discovery-heading">

      {/* ── Header ── */}
      <div className="mb-8">
        <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${themeColors.primary}`}>
          {discoveryProject.sectionHeading}
        </p>
        <h2 id="discovery-heading" className="text-2xl sm:text-3xl font-bold font-['Playfair_Display']">
          {discoveryProject.title}
        </h2>
        <p className={`mt-2 text-base italic ${muted}`}>{discoveryProject.tagline}</p>
        <p className={`mt-3 leading-relaxed max-w-2xl ${muted}`}>{discoveryProject.sectionSubheading}</p>
      </div>

      <div className="space-y-6">

        {/* ── Overview / Project Idea ── */}
        <div className={`p-6 md:p-8 rounded-xl border ${cardBg} ${border}`}>
          <h3 className={`text-lg font-semibold mb-4 ${themeColors.primary}`}>Project idea &amp; journey</h3>
          <div className="space-y-4 leading-relaxed opacity-90">
            {discoveryProject.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* ── Architecture + Outputs ── */}
        <div className={`p-6 md:p-8 rounded-xl border ${cardBg} ${border}`}>
          <h3 className={`text-lg font-semibold mb-4 ${themeColors.primary}`}>How it works</h3>
          <p className="text-sm mb-5 opacity-80">
            The tool follows a linear pipeline: capture → parse → aggregate → output.
          </p>

          {/* Pipeline diagram — pure CSS, no image needed */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex items-center gap-0 min-w-max mx-auto w-fit">
              {PIPELINE_STEPS.map((step, i) => (
                <React.Fragment key={step.num}>
                  <div
                    className={`flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-lg border ${border} ${stepBg} min-w-[88px]`}
                  >
                    <span className={`text-base font-mono font-bold leading-none ${themeColors.primary}`}>
                      {step.num}
                    </span>
                    <span className="text-xs font-semibold text-center leading-tight">{step.label}</span>
                    <span className={`text-[10px] text-center leading-tight ${muted} whitespace-pre-line`}>
                      {step.sub}
                    </span>
                  </div>
                  {i < PIPELINE_STEPS.length - 1 && (
                    <div className={`flex items-center px-1 ${muted}`}>
                      <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className={`text-[11px] text-center mt-3 ${muted} opacity-70`}>
              Linear pipeline — each stage feeds directly into the next
            </p>
          </div>

          {/* Architecture bullets */}
          <ul className="space-y-4">
            {discoveryProject.architecture.map((item) => (
              <li key={item.label} className="flex gap-3">
                <span className={`mt-1 size-1.5 rounded-full shrink-0 ${themeColors.accentBg}`} />
                <div>
                  <span className="font-semibold text-sm">{item.label} — </span>
                  <span className="opacity-90 text-sm leading-relaxed">{item.detail}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Chart screenshot — contextually placed after the architecture list that describes it */}
          <div className="mt-6">
            <Screenshot
              src={discoveryProject.screenshots.chart}
              alt="Matplotlib 3-panel chart showing protocol distribution, top talkers, and traffic over time"
              label="traffic_report_YYYY-MM-DD.png — the auto-generated 3-panel chart"
              description="Protocol distribution pie, top-N destination IPs by packet count, packets per 10-second bin"
              aspectClass="aspect-[4/3]"
            />
          </div>

          {/* Output files table */}
          <h4 className={`text-base font-semibold mt-8 mb-3 ${themeColors.primary}`}>Output files</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${border}`}>
                  <th className="text-left py-2 pr-4 font-semibold opacity-80">File</th>
                  <th className="text-left py-2 font-semibold opacity-80">Description</th>
                </tr>
              </thead>
              <tbody className="opacity-90">
                {discoveryProject.outputs.map((o) => (
                  <tr key={o.file} className={`border-b ${border}`}>
                    <td className={`py-2 pr-4 font-mono text-xs ${themeColors.primary}`}>{o.file}</td>
                    <td className="py-2 leading-relaxed">{o.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* HTML report screenshot — appears right after the table that lists it as an output */}
          <div className="mt-6">
            <Screenshot
              src={discoveryProject.screenshots.htmlReport}
              alt="Browser showing the generated HTML traffic report with summary stats and embedded chart"
              label="Generated HTML report — opens in any browser, no server needed"
              description="Self-contained report with summary stats block and the embedded PNG chart"
              aspectClass="aspect-video"
            />
          </div>

          {/* Output folder screenshot — confirms the three files from the table actually exist */}
          <div className="mt-4">
            <Screenshot
              src={discoveryProject.screenshots.outputFolder}
              alt="Finder window showing the three generated output files in ~/Downloads/network_traffic_monitor/"
              label="~/Downloads/network_traffic_monitor/ — all three outputs from a single run"
              description="CSV, PNG chart, and HTML report side by side after one capture session"
              aspectClass="aspect-[16/7]"
            />
          </div>
        </div>

        {/* ── ECE Skills ── */}
        <div className={`p-6 md:p-8 rounded-xl border ${cardBg} ${border}`}>
          <h3 className={`text-lg font-semibold mb-4 ${themeColors.primary}`}>ECE skills gained</h3>
          <div className="space-y-5">
            {discoveryProject.ecaSkills.map((item, i) => (
              <div key={i} className={`rounded-lg border ${border} p-4`}>
                <p className="font-semibold text-sm mb-2">{item.skill}</p>
                <p className="text-sm leading-relaxed opacity-90">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Project Progress: milestones + challenges ── */}
        <div className={`p-6 md:p-8 rounded-xl border ${cardBg} ${border}`}>
          <h3 className={`text-lg font-semibold mb-4 ${themeColors.primary}`}>Project progress</h3>

          <h4 className="text-base font-semibold mb-3">Milestones</h4>
          <ol className="space-y-2 mb-8">
            {discoveryProject.milestones.map((m, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed opacity-90">
                <span className={`font-bold shrink-0 ${themeColors.primary}`}>{i + 1}.</span>
                <span>{m}</span>
              </li>
            ))}
          </ol>

          <h4 className="text-base font-semibold mb-3">Setbacks &amp; how I solved them</h4>
          <div className="space-y-4">
            {discoveryProject.challenges.map((c, i) => (
              <div key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className={`mt-1 size-1.5 rounded-full shrink-0 ${themeColors.accentBg}`} />
                <div>
                  <span className="font-semibold">{c.title} — </span>
                  <span className="opacity-90">{c.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-base font-semibold mt-8 mb-3">Key insights</h4>
          <ul className="space-y-2">
            {discoveryProject.insights.map((ins, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed opacity-90">
                <span className={`mt-1 size-1.5 rounded-full shrink-0 ${themeColors.accentBg}`} />
                <span>{ins}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Ethics & Privacy ── */}
        <div className={`p-6 md:p-8 rounded-xl border ${cardBg} ${border}`}>
          <h3 className={`text-lg font-semibold mb-4 ${themeColors.primary}`}>Ethics &amp; privacy</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm font-semibold mb-2">What this tool captures (metadata only)</p>
              <ul className="space-y-1">
                {discoveryProject.ethics.captures.map((c, i) => (
                  <li key={i} className="flex gap-2 text-sm opacity-90">
                    <span className={`mt-1 size-1.5 rounded-full shrink-0 ${themeColors.accentBg}`} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold mb-2">What it does NOT capture</p>
              <ul className="space-y-1">
                {discoveryProject.ethics.doesNotCapture.map((c, i) => (
                  <li key={i} className="flex gap-2 text-sm opacity-90">
                    <span className="mt-1 size-1.5 rounded-full shrink-0 bg-gray-400 rounded-full" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className={`text-sm leading-relaxed p-4 rounded-lg border ${border} opacity-90`}>
            {discoveryProject.ethics.note}
          </p>
        </div>

        {/* ── How to Run ── */}
        <div className={`p-6 md:p-8 rounded-xl border ${cardBg} ${border}`}>
          <h3 className={`text-lg font-semibold mb-4 ${themeColors.primary}`}>How to run it</h3>
          <pre className={`rounded-lg border p-4 overflow-x-auto text-xs leading-relaxed font-mono ${codeBg}`}>
            <code>{discoveryProject.howToRunCommands}</code>
          </pre>
          <p className={`text-xs mt-3 ${muted}`}>
            Default output directory:{" "}
            <span className="font-mono">~/Downloads/network_traffic_monitor/</span>
          </p>

          {/* Terminal screenshot — follows the exact command that produces it */}
          <div className="mt-5">
            <Screenshot
              src={discoveryProject.screenshots.terminal}
              alt="Terminal showing the Network Traffic Monitor capturing live packets with packet count updating in real time"
              label="Live capture — packets intercepted and logged to stdout in real time"
              description="Terminal output during a 60-second capture session on the en0 interface"
              aspectClass="aspect-video"
            />
          </div>
        </div>

        {/* ── Future Work ── */}
        <div className={`p-6 md:p-8 rounded-xl border ${cardBg} ${border}`}>
          <h3 className={`text-lg font-semibold mb-4 ${themeColors.primary}`}>Future work</h3>
          <ul className="space-y-3">
            {discoveryProject.futureWork.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed opacity-90">
                <span className={`mt-1 size-1.5 rounded-full shrink-0 ${themeColors.accentBg}`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Overall Experience ── */}
        <div className={`p-6 md:p-8 rounded-xl border ${cardBg} ${border}`}>
          <h3 className={`text-lg font-semibold mb-4 ${themeColors.primary}`}>Overall experience</h3>
          <p className="leading-relaxed opacity-90">{discoveryProject.overallExperience}</p>
        </div>

        {/* ── Q&A ── */}
        <div className={`p-6 md:p-8 rounded-xl border ${cardBg} ${border}`}>
          <h3 className={`text-lg font-semibold mb-4 ${themeColors.primary}`}>FAQ</h3>
          <div className="space-y-2">
            {discoveryProject.qa.map((item, i) => (
              <div key={i} className={`rounded-lg border ${border} overflow-hidden`}>
                <button
                  className="w-full text-left px-4 py-3 flex justify-between items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                  onClick={() => setOpenQa(openQa === i ? null : i)}
                  aria-expanded={openQa === i}
                >
                  <span>{item.q}</span>
                  <svg
                    className={`size-4 shrink-0 transition-transform ${openQa === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQa === i && (
                  <div className={`px-4 pb-4 text-sm leading-relaxed opacity-90 border-t ${border} pt-3`}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── GitHub link ── */}
        <div className="pt-2">
          <a
            href={discoveryProject.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-sm ${linkClasses} transition-all hover:translate-x-1`}
          >
            View on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
    </>
  );
};

export default FeaturedProjectThog;
