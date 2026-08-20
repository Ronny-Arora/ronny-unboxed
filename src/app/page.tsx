import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Fitness } from "@/components/fitness";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Fitness />
      <Education />
      <Skills />
      <Contact />
    </>
  );
}
