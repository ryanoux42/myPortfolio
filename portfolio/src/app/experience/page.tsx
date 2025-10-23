import ExperienceCard from "@/components/Experience/ExperienceCard";
import { ExperienceCardInfo } from "@/types";


const experienceData: ExperienceCardInfo[] = [
   {
      colorBanner: "#000000",
      company: "Quantfox",
      companylogo: "quantfox.png",
      role: "Full Stack Developer",
      date: { start: new Date("2025-04-01"), end: new Date("2025-08-01") },
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   },
   {
      colorBanner: "#f5633f",
      company: "Jungle Bike",
      companylogo: "jungle_bike.jpeg",
      role: "Data Scientist",
      date: { start: new Date("2023-07-01"), end: new Date("2023-12-31") },
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      skills: ["Python", "PostgreSQL"],
   }
]

function Experience() {
   return (
       <div className="flex flex-col justify-start space-y-6 sm:w-[60%]">
         {experienceData.map((cardInfo, index) => (
            <ExperienceCard key={index} cardInfo={cardInfo} />
         ))}
       </div>
   );
}

export default Experience;