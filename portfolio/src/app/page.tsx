import ProfilePic from "@/components/Home/ProfilePic";
import ReachMeSection from "@/components/Home/ReachMeSection";
import Role from "@/components/Home/Role";

function Home() {
  return (
    <div className="flex flex-wrap justify-between items-center sm:p-16 p-4 sm:mb-26 sm:mx-12"> 
      <div className="flex flex-col space-y-12">
        <div className="mx-auto max-w-2xl text-left text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl">
          <h1>
            Hi! 👋🏻<br />
            <span className="text-dark-blue">Ryan HERCULE</span>
          </h1>
        </div>
        <div className="text-dark-blue text-2xl">
          <Role />
        </div>
        <ReachMeSection />
      </div>
      <div className="pr-24">
        <ProfilePic />
      </div>
    </div>
  );
}

export default Home;
