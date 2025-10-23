export interface ExperienceDate {
   start: Date;
   end?: Date;
}

export interface ExperienceCardInfo {
   colorBanner: string;
   company: string;
   companylogo: string;
   role: string;
   date: ExperienceDate;
   desc: string;
   skills?: string[];
};