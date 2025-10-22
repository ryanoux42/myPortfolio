import Link from "next/link";

import { JSX } from "react/jsx-dev-runtime";

interface ButtonWithIconProps {
   text: string;
   link: string;
   icon: JSX.Element;
   download?: boolean;
}

function ButtonWithIcon({ text, link, icon, download }: ButtonWithIconProps) {
  return (
    <Link
      href={link}
      download={download}
      className="inline-block rounded text-xl bg-blue-500 px-5 py-2 text-white border border-transparen hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors duration-200"
    >
      <div className="flex items-center space-x-2">
      {icon}
      <span className="m-0">{text}</span>
      </div>
    </Link>
  );
}

export default ButtonWithIcon;