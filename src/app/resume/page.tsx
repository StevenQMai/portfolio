import type { Metadata } from "next";
import ResumePageContent from "@/components/portfolio/ResumePageContent";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Steven Mai — on-page resume and downloadable resume PDF for applications.",
};

export default function ResumePage() {
  return <ResumePageContent />;
}
