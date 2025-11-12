import HardwareList from "@/components/About/Hardware/HardwareList";
import IntroductionSection from "@/components/About/IntroductionSection";
import SkillList from "@/components/About/Skill/SkillList";
import SoftwareList from "@/components/About/Software/SoftwareList";
import TitleSection from "@/components/TitleSection";

function About() {
   return (
   <div className="w-full space-y-4">
      <div>
         <TitleSection title="Want to know more about me" />
         <IntroductionSection />
      </div>
      <div className="flex flex-col items-center">
         <TitleSection title="Skill" description="Languages and technologies" />
         <SkillList />
      </div>
      <div className="flex flex-col items-center">
         <TitleSection title="Software" description="A showcase of software in my toolbox" />
         <SoftwareList />
      </div>
      <div className="flex flex-col items-center">
         <TitleSection title="Hardware" description="A peek into my hardware" />
         <HardwareList />
      </div>
   </div>
   );
}

export default About;