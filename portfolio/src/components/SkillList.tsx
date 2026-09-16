  interface SkillListProps {
    skills: string[];
}

function SkillList({ skills }: SkillListProps) {
  return (
    <div className="flex flex-wrap justify-start gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="rounded-full bg-blue-secondary px-3 py-1 text-xs font-medium text-blue-primary">{skill}</span>
      ))}
    </div>
  );
}

export default SkillList;