import { SKILLS } from "./SkillData";

function SkillList() {
   return (
      <div className="w-3/4 sm:w-5/8 sm:mx-auto">
         <div className="flex flex-wrap items-center">
            {SKILLS.map((skill) => (
               <div className="flex ml-6 items-center font-light p-2 mb-4 text-center text-lg md:text-xl border border-border-primary text-text-tertiary rounded-full transform transition-transform duration-200 hover:scale-120 hover:text-blue-primary hover:bg-blue-secondary hover:border-transparent" key={skill.name}>
                  {skill.icon}
                  <span className="flex items-center ml-2">{skill.name}</span> 
               </div>
            ))}
         </div>
      </div>
   );
}

export default SkillList;