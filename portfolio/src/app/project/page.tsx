import type { Metadata } from "next";

import ProjectList from "@/components/Project/ProjectList";
import TitleSection from "@/components/TitleSection";

export const metadata: Metadata = {
   title: "Projects",
   description: "A showcase of software projects built by Ryan HERCULE.",
   alternates: {
      canonical: "/project",
   },
};

function Project() {
   return (
      <div>
        <TitleSection title="Projects" description="A showcase of my projects" />
        <ProjectList />
      </div>
   );
}

export default Project;