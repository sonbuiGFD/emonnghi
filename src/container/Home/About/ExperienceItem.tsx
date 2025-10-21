interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

function ExperienceItem({ company, role, period, description }: ExperienceItemProps) {
  return (
    <div className="experience_item">
      <div className="experience_item__header">
        <div className="experience_item__info">
          <h3 className="experience_item__role">{role}</h3>
          <p className="experience_item__company">{company}</p>
        </div>
        <div className="experience_item__meta">
          <time className="experience_item__period">{period}</time>
        </div>
      </div>
      <p className="experience_item__description">{description}</p>
    </div>
  );
}

export default ExperienceItem;
