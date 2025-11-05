import { ExperienceCardInfo } from "@/types";
import ExperienceCard from "./ExperienceCard";


const experienceData: ExperienceCardInfo[] = [
   {
      company: "Quantfox",
      companylogo: "quantfox.png",
      role: "Full Stack Developer",
      status: "Internship",
      date: { start: new Date("2025-04-01"), end: new Date("2025-08-01") },
      desc: [
         "Developed and enhanced interactive data-driven widgets for a fintech trading platform",
         "Integrated live and historical market data using Redis and PostgreSQL",
         "Built new admin site and optimized UI/UX across dashboards",
      ],
      skills: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "CI/CD"],
   },
   {
   company: "Jungle Bike",
   companylogo: "jungle_bike.jpeg",
   role: "Data Scientist",
   status: "Internship",
   date: { start: new Date("2023-07-01"), end: new Date("2023-12-31") },
   desc: [
      "Processed and enriched large datasets to improve data quality and team performance",
      "Built NLP models to extract technical details of bike parts from product names",
      "Optimized databases and developed predictive and smart purchasing algorithms",
   ],
   skills: ["Python", "PostgreSQL", "Machine Learning", "NLP", "Automation", "Method Scrum"],
   }
]

function ExperienceList() {
  return (
    <div className="relative flex flex-col justify-start space-y-6 sm:w-[60%]">
      {experienceData.map((cardInfo, index) => (
        <div key={index} className="relative flex ml-4 items-start space-y-4">
          <ExperienceCard cardInfo={cardInfo} />
        </div>
      ))}
    </div>
  );
}
export default ExperienceList;