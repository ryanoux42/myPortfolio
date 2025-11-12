  interface SkillListProps {
    skills: string[];
}

function SkillList({ skills }: SkillListProps) {
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

export default SkillList;