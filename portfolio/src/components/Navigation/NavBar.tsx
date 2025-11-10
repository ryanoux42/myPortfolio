"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLink } from "@/types";

import Logo from "./Logo";

const navLinks: readonly NavLink[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Experience", link: "/experience" },
  { name: "Project", link: "/project" },
] as const;

function Navbar() {
   const path = usePathname();

  const getSelectedPageClass = (link: string): string => {
   const style = "font-medium hover:text-blue-primary flex h-8 w-full items-center justify-center p-4";
    return path === link ? `${style} text-blue-primary bg-blue-secondary rounded-full` : `${style} text-text-primary`;
  };

  return (
   <div className="flex space-x-4">
      <Logo />
      <ul className="flex items-center space-x-2 text-sm text-text-primary">
      {navLinks.map((link) => (
         <li key={link.name}>
            <Link
               href={link.link}
               prefetch={true}
               className={`${getSelectedPageClass(link.link)}`}
            >
               {link.name}
            </Link>
         </li>
      ))}
      </ul>
   </div>

  );
};

export default Navbar;