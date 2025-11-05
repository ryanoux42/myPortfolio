import { JSX } from 'react/jsx-dev-runtime';

import {
   SiJavascript, 
   SiLinux,
   SiTypescript,
   SiPython,
   SiReact,
   SiCplusplus,
   SiC,
   SiGit,
   SiPostgresql,
   SiDocker,
   SiNestjs,
   SiNextdotjs,
   SiTailwindcss,
   SiHtml5,
   SiCss3,
   SiExpress,
} from 'react-icons/si';

interface SkillDataItem {
   name: string;
   icon: JSX.Element;
}


export const SKILLS: SkillDataItem[] = [
   {name: "TypeScript", icon: <SiTypescript />},
   {name: "JavaScript", icon: <SiJavascript />},
   {name: "Python", icon: <SiPython />},
   {name: "C++", icon: <SiCplusplus />},
   {name: "C", icon: <SiC /> },
   {name: "Git", icon: <SiGit /> },
   {name: "Linux", icon: <SiLinux /> },
   {name: "React Native", icon: <SiReact />},
   {name: "PostgreSQL", icon: <SiPostgresql /> },
   {name: "Docker", icon: <SiDocker /> },
   {name: "React", icon: <SiReact />},
   {name: "NestJS", icon: <SiNestjs /> },
   {name: "Next.js", icon: <SiNextdotjs /> },
   {name: "Tailwind CSS", icon: <SiTailwindcss /> },
   {name: "HTML", icon: <SiHtml5 /> },
   {name: "CSS", icon: <SiCss3 /> },
   {name: "Express", icon: <SiExpress /> },
];
