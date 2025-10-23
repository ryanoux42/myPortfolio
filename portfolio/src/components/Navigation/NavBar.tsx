"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLink } from "@/types";

import Logo from "./Logo";

const navLinks: readonly NavLink[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Experience", link: "/experience" },
] as const;

function Navbar() {
   const path = usePathname();

  const getSelectedPageClass = (link: string): string => {
   const style = "font-medium hover:text-blue-600 flex h-8 w-full items-center justify-center p-4";
    return path === link ? `${style} text-blue-600 bg-blue-100 rounded-full` : `${style} text-black-500`;
  };

  return (
   <div className="flex space-x-4">
      <Logo />
      <ul className="flex items-center space-x-2 text-sm">
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