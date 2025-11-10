interface TitleSectionProps {
    title: string;
    description?: string;
}

function TitleSection({ title, description }: TitleSectionProps) {
   return (
      <div className="justify-center text-center text-text-secondary mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && <p>{description}</p>}
      </div>
   );
}

export default TitleSection;