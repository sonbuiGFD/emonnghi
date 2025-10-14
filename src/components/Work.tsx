interface WorkItemProps {
  title: string;
  description: string;
  category: string;
  year?: string;
  link?: string;
}

function WorkItem({ title, description, category, year, link }: WorkItemProps) {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link
    ? {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "work_item work_item__link",
      }
    : { className: "work_item" };

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
          <svg
            className="work_item__link_icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      )}
    </Wrapper>
  );
}

export default function Work() {
  const websiteProjects = [
    {
      title: "ThisisBDO",
      category: "Website Design",
      year: "2023",
      description:
        "Comprehensive website redesign for a major accounting firm, focusing on professional credibility and user experience optimization.",
    },
    {
      title: "KraftHeinz Brand Portal",
      category: "Website Design",
      year: "2022",
      description:
        "Global brand portal design enabling consistent brand experience across all touchpoints and regional markets.",
    },
    {
      title: "Viettel Digital Services",
      category: "Website Design",
      year: "2022",
      description:
        "Enterprise service portal design focusing on user experience and seamless service discovery for business customers.",
    },
  ];

  const appProjects = [
    {
      title: "Matter App",
      category: "App Design",
      year: "2023",
      description:
        "Mobile application design for productivity and task management, emphasizing clean interfaces and intuitive user flows.",
    },
    {
      title: "JoyStop",
      category: "App Design",
      year: "2022",
      description:
        "Food delivery app focusing on user experience optimization and conversion rate improvement through design iterations.",
    },
    {
      title: "MoMo Merchant",
      category: "App Design",
      year: "2022",
      description:
        "Merchant-focused mobile application for payment processing and business analytics with emphasis on usability.",
    },
  ];

  const systemProjects = [
    {
      title: "JoyStop Food Management Platform",
      category: "System Design",
      year: "2023",
      description:
        "Complete food service management system design including inventory, ordering, and analytics dashboards for restaurant operations.",
    },
    {
      title: "KraftHeinz Design System",
      category: "System Design",
      year: "2022",
      description:
        "Comprehensive design system architecture enabling consistent brand experience across multiple digital properties and platforms.",
    },
    {
      title: "AP Eager Automotive Platform",
      category: "System Design",
      year: "2021",
      description:
        "Automotive service platform design focused on streamlining service booking and customer management for automotive businesses.",
    },
  ];

  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="work__container">
        <div className="work__layout">
          {/* Left Column - Title */}
          <div className="work__sidebar">
            <div className="work__sidebar-content">
              <h2 id="work-title" className="work__title">
                Discover My Works
              </h2>
              <p className="work__subtitle">
                With passion and creativity in work, I specialize in clients who
                seek unique products, create solutions and design projects
                optimized for conversions.
              </p>
            </div>
          </div>

          {/* Right Column - Work Categories */}
          <div className="work__content">
            {/* Website Design */}
            <div className="work__section">
              <h3 className="work__section-title">Website Design</h3>
              <div className="work__section-items">
                {websiteProjects.map((project, index) => (
                  <WorkItem key={index} {...project} />
                ))}
              </div>
            </div>

            <hr className="work__divider" />

            {/* App Design */}
            <div className="work__section">
              <h3 className="work__section-title">App Design</h3>
              <div className="work__section-items">
                {appProjects.map((project, index) => (
                  <WorkItem key={index} {...project} />
                ))}
              </div>
            </div>

            <hr className="work__divider" />

            {/* System Design */}
            <div className="work__section">
              <h3 className="work__section-title">System Design</h3>
              <div className="work__section-items">
                {systemProjects.map((project, index) => (
                  <WorkItem key={index} {...project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
