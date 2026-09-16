"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLink } from "@/types";
import SocialLinkList from "../SocialLinkList";

interface DesktopNavbarProps {
  navLinks: readonly NavLink[];
}

function DesktopNavbar({ navLinks }: DesktopNavbarProps) {
   const path = usePathname();

  const getSelectedPageClass = (link: string): string => {
   const style = "font-medium hover:text-blue-primary transition-colors duration-200 flex h-8 w-full items-center justify-center px-4 rounded-full";
    return path === link ? `${style} text-blue-primary bg-blue-secondary` : `${style} text-text-primary`;
  };

  return (
   <div className="w-full hidden md:flex px-4 justify-between gap-x-6">
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
      <SocialLinkList />
   </div>

  );
};

export default DesktopNavbar;