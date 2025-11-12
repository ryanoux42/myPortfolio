import Image from "next/image";

import { ExperienceCardInfo, ExperienceDate } from "@/types";


interface ExperienceCardHeaderProps {
  companyName: string;
  logoPath: string;
  role: string;
  date: ExperienceDate;
  status: string;
}

function ExperienceCardHeader({ companyName, logoPath, role, date, status }: ExperienceCardHeaderProps) {
  const formatDate = (date: ExperienceDate): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    const startDate = new Intl.DateTimeFormat('en-US', options).format(date.start);
    const endDate = date.end ? new Intl.DateTimeFormat('en-US', options).format(date.end) : 'Present';

    return `${startDate} - ${endDate}`;
  };

  const dateString = formatDate(date);
  return (
    <>
      <div className="relative flex items-center h-16 px-4 space-x-4">
        <Image
          src={`/experience/${logoPath}`}
          alt={companyName}
          width={48}
          height={48}
          className="absolute rounded-full border border-black shadow-lg"
        />
        <div className="w-72 bg-gray-200 rounded-full">
          <h5 className="text-xl text-center font-bold text-text-primary">
            {companyName}
          </h5>
        </div>
        <div className="text-red-500 text-sm bg-red-200 rounded-full p-2">{status}</div>
      </div>
      <div className="flex flex-col justify-start space-x-6 p-4">
          <h5 className={`text-2xl font-bold text-black sm:text-l`}>
            {role}
          </h5>
          <h5 className={`text-l font-semibold mt-3 text-gray-400 sm:text-xs`}>
            {dateString}
          </h5>
      </div>
    </>
  );
}

interface ExperienceCardSkillsProps {
  skills: string[];
}

function ExperienceCardSkills({ skills }: ExperienceCardSkillsProps) {
  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-2 justify-start">
        {skills.map((skill, index) => (
          <span key={index} className="text-blue-primary text-xs bg-blue-secondary rounded-full p-2">{skill}</span>
        ))}
      </div>
    </div>
  );
}

interface ExperienceCardProps {
  cardInfo: ExperienceCardInfo;
}

function ExperienceCard({ cardInfo }: ExperienceCardProps) {
  return (
    <div className={"rounded-xl border bg-white border-gray-200 px-2"}>
      <ExperienceCardHeader
        companyName={cardInfo.company}
        logoPath={cardInfo.companylogo}
        role={cardInfo.role}
        date={cardInfo.date}
        status={cardInfo.status}
      />

      <ul className="list-disc pl-12 text-start text-base text-gray-600">
        {cardInfo.desc.map((point, index) => (
          <li key={index} className="mt-2">
            {point}
          </li>
        ))}
      </ul>
      {cardInfo.skills && cardInfo.skills.length > 0 && (
        <ExperienceCardSkills skills={cardInfo.skills} />
      )}
    </div>
  );
}

export default ExperienceCard;