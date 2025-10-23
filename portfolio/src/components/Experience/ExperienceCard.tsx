"use client";

import { useState } from "react";

import Image from "next/image";

import { ExperienceCardInfo, ExperienceDate } from "@/types";


interface ExperienceCardBannerProps {
  colorBanner: string;
  companyName: string;
  logoPath: string;
}

function ExperienceCardBanner({ colorBanner, companyName, logoPath }: ExperienceCardBannerProps) {

  return (
      <div
        className="flex h-12 justify-start rounded-t-xl"
        style={{ background: colorBanner }}
      >
        <div className="ml-4 mt-2">
          <Image
            src={`/${logoPath}`}
            alt={companyName}
            width={48}
            height={48}
            className="rounded-full border border-white ml-4 mt-2 mr-4 shadow-lg w-min-48 h-min-48"
          />
        </div>
        {/* Title */}
          <h5 className={"text-center text-2xl font-bold truncate text-white mt-2 ml-2"}>
            {companyName}
          </h5>
      </div>
  );
}

interface ExperienceCardRoleProps {
  role: string;
  date: ExperienceDate;
}

function ExperienceCardRole({ role, date }: ExperienceCardRoleProps) {

  const formatDate = (date: ExperienceDate): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    const startDate = new Intl.DateTimeFormat('en-US', options).format(date.start);
    const endDate = date.end ? new Intl.DateTimeFormat('en-US', options).format(date.end) : 'Present';

    return `${startDate} - ${endDate}`;
  };

  const dateString = formatDate(date);
  return (
      <div className="flex flex-col justify-start space-x-6 p-4">
          <h5 className={`text-2xl font-bold text-black sm:text-l`}>
            {role}
          </h5>
          <h5 className={`text-l font-semibold mt-3 text-gray-400 sm:text-xs`}>
            {dateString}
          </h5>
      </div>
  );
}

interface ExperienceCardSkillsProps {
  skills: string[];
}

function ExperienceCardSkills({ skills }: ExperienceCardSkillsProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {showDetails && (
        <div className="p-6">
          <div className="flex flex-wrap gap-2 justify-start">
            {skills.map((skill, index) => (
              <span key={index} className="text-white text-sm bg-black rounded-full p-2">{skill}</span>
            ))}
          </div>
        </div>
      )}
      <button
        className="w-full text-gray-300 font-semibold py-2 rounded-b-xl hover:text-black transition-colors duration-200"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Skills" : "Show Skills"}
      </button>
    </>
  );
}

interface ExperienceCardProps {
  cardInfo: ExperienceCardInfo;
}

function ExperienceCard({ cardInfo }: ExperienceCardProps) {
  return (
    <div
      className={"rounded-xl border p-0 transition-shadow duration-300 bg-white border-gray-200 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.3)]"}
    >
      <ExperienceCardBanner
        colorBanner={cardInfo.colorBanner}
        companyName={cardInfo.company}
        logoPath={cardInfo.companylogo}
      />
      <ExperienceCardRole
        role={cardInfo.role}
        date={cardInfo.date}
      />

      <div className="p-6">
        <p className={`mt-4 text-center text-base text-gray-600`}>
          {cardInfo.desc}
        </p>
      </div>
      {cardInfo.skills && cardInfo.skills.length > 0 && (
        <ExperienceCardSkills skills={cardInfo.skills} />
      )}
    </div>
  );
}

export default ExperienceCard;