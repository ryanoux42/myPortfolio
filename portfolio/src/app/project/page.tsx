import type { Metadata } from "next";
import { FiArrowRight } from "react-icons/fi";

import ButtonWithLink from "@/components/Button/ButtonWithLink";
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
        <div className="flex justify-center mt-8 mb-4">
          <ButtonWithLink
            text="See more on GitHub"
            link="https://github.com/ryanoux42?tab=repositories"
            icon={<FiArrowRight size={20} />}
          />
        </div>
      </div>
   );
}

export default Project;