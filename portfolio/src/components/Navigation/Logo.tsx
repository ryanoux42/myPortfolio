import Link from "next/link";
import Image from 'next/image';

function Logo() {

  return (
   <div className="w-[104px]">
      <Link href="/" aria-label="Home">
         <Image
            src="/logo.png"
            alt="Ryan HERCULE's Logo"
            width={36}
            height={36}
         />
      </Link>
   </div>
  );
};

export default Logo;