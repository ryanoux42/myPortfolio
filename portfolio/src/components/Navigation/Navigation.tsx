import Logo from "./Logo";
import DesktopNavbar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import { NavLink } from "@/types/navigation";

const navLinks: readonly NavLink[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Experience", link: "/experience" },
  { name: "Project", link: "/project" },
] as const;

function Navigation() {
  return (
    <header role="banner">
      <nav className="h-16 w-full px-4 flex items-center">
         <Logo />
         <DesktopNavbar navLinks={navLinks} />
          <MobileNavBar navLinks={navLinks} />
      </nav>
    </header>
  );
};

export default Navigation;