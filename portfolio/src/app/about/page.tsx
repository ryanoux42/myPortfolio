import HardwareList from "@/components/About/Hardware/HardwareList";
import IntroductionSection from "@/components/About/IntroductionSection";
import SkillList from "@/components/About/Skill/SkillList";
import SoftwareList from "@/components/About/Software/SoftwareList";

function About() {
   return (
   <div className="w-full space-y-6">
      <IntroductionSection />
      <div className="justify-center text-center">
         <h1 className="text-2xl text-text-secondary font-semibold mb-4">Skill</h1>
         <SkillList />
      </div>
      <div className="justify-center text-center">
         <h1 className="text-2xl text-text-secondary font-semibold mb-4">Software</h1>
         <SoftwareList />
      </div>
      <div className="justify-center text-center">
         <h1 className="text-2xl text-text-secondary font-semibold mb-4">Hardware</h1>
         <HardwareList />
      </div>
   </div>
   );
}

export default About;