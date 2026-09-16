import SocialLinkList from "./SocialLinkList";

function Footer () {
  return (
    <footer className="flex justify-between w-full border-t border-gray-200 px-4 py-6 text-sm">
      <p className="text-gray-500">
         © {new Date().getFullYear()} Ryan HERCULE
      </p>
      <div className="md:hidden">
        <SocialLinkList />
      </div>
    </footer>
  );
}

export default Footer;