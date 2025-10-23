import SocialLinkList from "@/components/SocialLinkList";

import Navbar from "./NavBar";

function Navigation() {
  return (
    <header role="banner">
      <nav className="h-16 w-full px-4 flex justify-between items-center">
         <Navbar />
         <SocialLinkList />
      </nav>
    </header>
  );
};

export default Navigation;