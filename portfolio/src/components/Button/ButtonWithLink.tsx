import Link from "next/link";

import { JSX } from "react/jsx-dev-runtime";

interface ButtonWithLinkProps {
   text: string;
   link: string;
   icon: JSX.Element;
}

function ButtonWithLink({ text, link, icon }: ButtonWithLinkProps) {
  return (
    <button className="inline-block rounded-xl text-l bg-blue-primary px-5 py-2 text-white border border-transparent hover:bg-blue-secondary hover:text-blue-primary hover:border-blue-primary transition-colors duration-200">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        {icon}
        <span className="m-0">{text}</span>
      </Link>
    </button>
  );
}

export default ButtonWithLink;