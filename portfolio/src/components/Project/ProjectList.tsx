import ButtonWithLink from "../Button/ButtonWithLink";
import { CiShare1 } from "react-icons/ci";
import { GoRepo } from "react-icons/go";
import SkillList from "../SkillList";

const PROJECTS = [
  {
    title: "Area",
    description: "Project inspired by IFTTT and Zapier. AREA connects multiple third-party services through user-defined actions and reactions, featuring both a web and mobile interface",
    link: "https://github.com/ryanoux42/area",
    skills: ["Web", "Mobile", "Server", "Database", "OAuth2"]
  },
  {
    title: "Zappy",
    description: "3D real-time multiplayer simulation featuring a custom client-server architecture where AI agents and graphical clients communicate through a dedicated protocol",
    link: "https://github.com/ryanoux42/zappy",
    skills: ["Network Programming", "Client-Server Architecture", "AI", "Graphics 3D"]
  },
  {
    title: "Glados",
    description: "Glados is a programming language interpreter featuring lexical analysis, parsing, and interpretation. It supports variables, control structures, functions, and basic data types",
    link: "https://github.com/ryanoux42/glados",
    skills: ["Lexical Analysis", "Parsing", "Interpretation", "Programming Languages"]
  },
  {
    title: "Arcade",
    description: "A project that implements a modular arcade gaming platform. It allows dynamic loading of games and graphical libraries at runtime",
    link: "https://github.com/ryanoux42/arcade",
    skills: ["C++", "Dynamic Libraries", "Modular Design", "Game Development"]
  },
];

function ProjectList() {
   return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="flex flex-col rounded-xl border border-gray-200 p-4 min-h-64"
        >
          <div className="flex flex-row gap-4">
            <GoRepo size={24} />
            <h2 className="text-xl font-bold mb-4">{project.title}</h2>
          </div>
          <p>{project.description}</p>
          {project.skills && project.skills.length > 0 && (
            <SkillList skills={project.skills} />
          )}
          <div className="self-end">
            <ButtonWithLink
              text="See code Source"
              link={project.link}
              icon={<CiShare1 size={24} />}
            />
          </div>
        </div>
      ))}
    </div>
   );
}

export default ProjectList;