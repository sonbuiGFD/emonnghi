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
        className:
          "work-item group block hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4 -m-4",
      }
    : { className: "work-item" };

  return (
    <Wrapper {...wrapperProps}>
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-semibold text-text-primary text-lg group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        {year && (
          <span className="text-sm text-text-secondary font-medium whitespace-nowrap">
            {year}
          </span>
        )}
      </div>
      <p className="text-sm uppercase tracking-wider text-text-secondary font-medium mb-2">
        {category}
      </p>
      <p className="text-text-secondary leading-relaxed text-pretty">
        {description}
      </p>
      {link && (
        <div className="mt-3 flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-200">
          View Project
          <svg
            className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
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
    <section
      id="work"
      className="py-16 md:py-24 lg:py-32"
      aria-labelledby="work-title"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2
                id="work-title"
                className="font-display text-display-lg text-text-primary mb-6"
              >
                Discover My Works
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed text-pretty">
                With passion and creativity in work, I specialize in clients who
                seek unique products, create solutions and design projects
                optimized for conversions.
              </p>
            </div>
          </div>

          {/* Right Column - Work Categories */}
          <div className="lg:col-span-8 space-y-16">
            {/* Website Design */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-8 uppercase tracking-wide">
                Website Design
              </h3>
              <div className="space-y-6">
                {websiteProjects.map((project, index) => (
                  <WorkItem key={index} {...project} />
                ))}
              </div>
            </div>

            <hr className="section-divider" />

            {/* App Design */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-8 uppercase tracking-wide">
                App Design
              </h3>
              <div className="space-y-6">
                {appProjects.map((project, index) => (
                  <WorkItem key={index} {...project} />
                ))}
              </div>
            </div>

            <hr className="section-divider" />

            {/* System Design */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-8 uppercase tracking-wide">
                System Design
              </h3>
              <div className="space-y-6">
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
