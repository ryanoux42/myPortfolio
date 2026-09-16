import Image from "next/image";

import { ExperienceCardInfo, ExperienceDate } from "@/types";
import SkillList from "../SkillList";


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
    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={`/experience/${logoPath}`}
          alt={companyName}
          width={48}
          height={48}
          className="rounded-full border border-border-primary shadow-sm"
        />
        <div className="flex flex-col gap-1">
          <h5 className="text-lg font-bold text-text-primary sm:text-xl">
            {companyName}
          </h5>
          <h5 className="text-base font-semibold text-text-secondary sm:text-lg">
            {role}
          </h5>
          <h5 className="text-xs font-medium text-text-tertiary sm:text-sm">
            {dateString}
          </h5>
        </div>
      </div>
      <div className="self-start rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-500 sm:self-center">
        {status}
      </div>
    </div>
  );
}

interface ExperienceCardProps {
  cardInfo: ExperienceCardInfo;
}

function ExperienceCard({ cardInfo }: ExperienceCardProps) {
  return (
    <div className="w-4/5 rounded-2xl border border-border-primary bg-bg-primary shadow-sm transition-shadow duration-300 hover:shadow-md md:w-full">
      <ExperienceCardHeader
        companyName={cardInfo.company}
        logoPath={cardInfo.companylogo}
        role={cardInfo.role}
        date={cardInfo.date}
        status={cardInfo.status}
      />

      <ul className="list-disc space-y-2 px-9 pb-3 text-start text-base text-text-secondary">
        {cardInfo.desc.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {cardInfo.skills && cardInfo.skills.length > 0 && (
        <div className="px-9 pb-5">
          <SkillList skills={cardInfo.skills} />
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;