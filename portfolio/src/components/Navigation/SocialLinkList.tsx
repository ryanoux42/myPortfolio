import Link from "next/link";

import { FaLinkedin, FaGithub } from 'react-icons/fa6';

import { NavLink } from "@/types";
import { JSX } from "react/jsx-dev-runtime";

interface SocialLink extends NavLink {
   icon: JSX.Element;
}

const navLinks: readonly SocialLink[] = [
  { 
      name: "Github",
      link: "https://github.com/ryanoux42",
      icon: <FaGithub size={24} />,
   },
  { 
      name: "Linkedin",
      link: "https://www.linkedin.com/in/ryan-hercule/",
      icon: <FaLinkedin size={24}/> 
   },
] as const;

function SocialLinkList() {
  return (
    <ul className="flex items-center space-x-4 text-sm">
      {navLinks.map((link) => (
         <li key={link.name}>
            <Link
               href={link.link}
               prefetch={true}
               target="_blank"
            >
               <span className="inline-block transform transition-transform duration-200 hover:scale-120 hover:text-blue-500">
                  {link.icon}
               </span>
            </Link>
         </li>
      ))}
   </ul>
  );
};

export default SocialLinkList;