import SocialLinkList from "./SocialLinkList";
import Navbar from "./NavBar";


// add a button "contact me" after social links list

function Navigation() {
  return (
    <header role="banner">
      <nav className="h-16 w-full px-4 flex justify-between items-center border-b border-gray-200">
         <Navbar />
         <SocialLinkList />
      </nav>
    </header>
  );
};

export default Navigation;