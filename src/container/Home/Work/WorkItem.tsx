interface WorkItemProps {
  title: string;
  description: string;
  category: string;
  year?: string;
  link?: string;
}

function WorkItem({ title, description, category, year, link }: WorkItemProps) {
  const Wrapper = link ? 'a' : 'div';
  const wrapperProps = link
    ? {
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'work_item work_item__link',
      }
    : { className: 'work_item' };

  return (
    <Wrapper {...wrapperProps}>
      <div className="work_item__header">
        <h3 className="work_item__title">{title}</h3>
        {year && <span className="work_item__year">{year}</span>}
      </div>
      <p className="work_item__category">{category}</p>
      <p className="work_item__description">{description}</p>
      {link && (
        <div className="work_item__link">
          View Project
          <svg className="work_item__link_icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      )}
    </Wrapper>
  );
}

export default WorkItem;
