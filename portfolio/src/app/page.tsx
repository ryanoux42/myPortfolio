import ProfilePic from "@/components/Home/ProfilePic";
import ReachMeSection from "@/components/Home/ReachMeSection";
import Role from "@/components/Home/Role";

function Home() {
  return (
    <div className="flex flex-col space-y-8 md:flex-row justify-between items-center sm:p-16 sm:mb-20 sm:mx-12"> 
      <div className="flex flex-col items-start space-y-12">
        <div className="mx-auto max-w-2xl text-left font-medium leading-tight tracking-tighter text-text-primary text-6xl">
          <h1>
            Hi! 👋🏻<br />
            <span className="text-dark-blue">Ryan HERCULE</span>
          </h1>
        </div>
        <div className="text-dark-blue text-4xl">
          <Role />
        </div>
        <ReachMeSection />
      </div>
      <ProfilePic />
    </div>
  );
}

export default Home;
