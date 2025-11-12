interface TitleSectionProps {
    title: string;
    description?: string;
}

function TitleSection({ title, description }: TitleSectionProps) {
   return (
      <div className="justify-center text-center mb-4">
        <h1 className="text-2xl text-text-secondary font-bold">{title}</h1>
        {description && <p className="text-text-tertiary">{description}</p>}
      </div>
   );
}

export default TitleSection;