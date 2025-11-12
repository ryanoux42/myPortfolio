"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";

import { NavLink } from "@/types";
import Link from "next/link";
import { usePathname } from "next/dist/client/components/navigation";

interface MobileNavBarProps {
  navLinks: readonly NavLink[];
}

function MobileNavBar({ navLinks }: MobileNavBarProps) {
   const path = usePathname();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getSelectedPageClass = (link: string): string => {
    const style = "block px-4 py-2 text-text-primary hover:bg-blue-secondary rounded-md";
    return path === link ? `${style} text-blue-primary bg-blue-secondary` : `${style} text-text-primary`;
  };

  return (
    <div className="w-full flex md:hidden justify-end text-dark-blue">
        <IoMenu size={32} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-4 bg-white border border-gray-200 rounded-md shadow-lg w-48 z-50">
            <ul className="flex flex-col p-4 space-y-2">
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