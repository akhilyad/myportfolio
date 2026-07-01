import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { ResearchPapers } from "@/components/research-papers";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <ResearchPapers />
    </main>
  );
}