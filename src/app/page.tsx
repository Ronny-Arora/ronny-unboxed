import { Hero } from "@/components/hero";
import { WorkedWith } from "@/components/worked-with";
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
      <WorkedWith />
      <Experience />
      <Projects />
      <Fitness />
      <Education />
      <Skills />
      <Contact />
    </>
  );
}
