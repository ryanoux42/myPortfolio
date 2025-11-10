import ExperienceList from "@/components/Experience/ExperienceList";
import TitleSection from "@/components/TitleSection";


function Experience() {
   return (
       <div className="flex flex-col items-center mx-4 space-y-6">
        <TitleSection title="Experience" description="My professional journey" />
        <ExperienceList />
       </div>
   );
}

export default Experience;