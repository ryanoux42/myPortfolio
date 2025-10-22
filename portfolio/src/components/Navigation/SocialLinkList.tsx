import Link from "next/link";
import Image from 'next/image';

import { NavLink } from "@/types";

const navLinks: readonly NavLink[] = [
  { name: "Github", link: "https://github.com/ryanoux42" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/ryan-hercule/" },
] as const;

function SocialLinkList() {
  return (
    <ul className="flex items-center space-x-4 text-sm">
      {navLinks.map((link) => (
         <li key={link.name}>
            <Link
               href={link.link}
               prefetch={true}
            >
               <Image
                  src={`icons/icon-${link.name.toLowerCase()}.svg`}
                  alt={`${link.name}'s Logo`}
                  width={36}
                  height={36}
               />
            </Link>
         </li>
      ))}
   </ul>
  );
};

export default SocialLinkList;