export interface ExperienceDate {
   start: Date;
   end?: Date;
}

export interface ExperienceCardInfo {
   company: string;
   companylogo: string;
   role: string;
   status: string;
   date: ExperienceDate;
   desc: string[];
   skills?: string[];
};