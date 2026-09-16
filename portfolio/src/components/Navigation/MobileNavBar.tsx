"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";

import { NavLink } from "@/types";

interface MobileNavBarProps {
  navLinks: readonly NavLink[];
}

function MobileNavBar({ navLinks }: MobileNavBarProps) {
   const path = usePathname();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getSelectedPageClass = (link: string): string => {
    const style = "block px-4 py-2 text-text-primary hover:bg-blue-secondary hover:text-blue-primary rounded-xl transition-colors duration-200";
    return path === link ? `${style} text-blue-primary bg-blue-secondary` : `${style} text-text-primary`;
  };

  return (
    <div className="w-full flex md:hidden justify-end text-text-primary">
        <IoMenu
          size={32}
          className="cursor-pointer transition-colors duration-200 hover:text-blue-primary"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        />
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-4 w-48 rounded-2xl border border-border-primary bg-background/95 shadow-lg backdrop-blur-md z-50">
            <ul className="flex flex-col p-3 space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className={`${getSelectedPageClass(link.link)}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
  );
}

export default MobileNavBar;