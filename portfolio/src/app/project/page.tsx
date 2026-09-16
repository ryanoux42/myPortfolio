import type { Metadata } from "next";

import ProjectList from "@/components/Project/ProjectList";
import TitleSection from "@/components/TitleSection";
import Link from "next/link";

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
        <div className="flex justify-center text-xl text-text-secondary mt-6 mb-4 hover:text-blue-500 hover:underline">
         <Link
            href="https://github.com/ryanoux42?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            >
               See more...
            </Link>
         </div>
      </div>
   );
}

export default Project;