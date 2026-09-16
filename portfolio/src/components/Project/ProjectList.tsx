import Image from "next/image";
import { CiShare1 } from "react-icons/ci";

import ButtonWithLink from "../Button/ButtonWithLink";
import SkillList from "../SkillList";

interface ProjectDataItem {
  title: string;
  description: string;
  link: string;
  imgPath: string;
  skills: string[];
}

const PROJECTS: ProjectDataItem[] = [
  {
    title: "Area",
    description: "Project inspired by IFTTT and Zapier. AREA connects multiple third-party services through user-defined actions and reactions, featuring both a web and mobile interface",
    link: "https://github.com/ryanoux42/area",
    imgPath: "area.jpg",
    skills: ["Web", "Mobile", "Server", "Database", "OAuth2"]
  },
  {
    title: "Zappy",
    description: "3D real-time multiplayer simulation featuring a custom client-server architecture where AI agents and graphical clients communicate through a dedicated protocol",
    link: "https://github.com/ryanoux42/zappy",
    imgPath: "zappy.jpg",
    skills: ["Network Programming", "Client-Server Architecture", "AI", "Graphics 3D"]
  },
  {
    title: "Glados",
    description: "Glados is a programming language interpreter featuring lexical analysis, parsing, and interpretation. It supports variables, control structures, functions, and basic data types",
    link: "https://github.com/ryanoux42/glados",
    imgPath: "glados.jpg",
    skills: ["Lexical Analysis", "Parsing", "Interpretation", "Programming Languages"]
  },
  {
    title: "Arcade",
    description: "A project that implements a modular arcade gaming platform. It allows dynamic loading of games and graphical libraries at runtime",
    link: "https://github.com/ryanoux42/arcade",
    imgPath: "arcade.jpg",
    skills: ["C++", "Dynamic Libraries", "Modular Design", "Game Development"]
  },
];

function ProjectList() {
   return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {PROJECTS.map((project) => (
        <div
          key={project.title}
          className="flex flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-primary shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <div className="relative h-40 w-full">
            <Image
              src={`/project/${project.imgPath}`}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-4">
            <h2 className="text-xl font-bold text-text-primary">{project.title}</h2>
            <p className="text-text-secondary">{project.description}</p>
            {project.skills && project.skills.length > 0 && (
              <SkillList skills={project.skills} />
            )}
            <div className="mt-auto self-end pt-2">
              <ButtonWithLink
                text="See code Source"
                link={project.link}
                icon={<CiShare1 size={24} />}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
   );
}

export default ProjectList;