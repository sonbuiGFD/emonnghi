import WorkItem from './WorkItem';
import './style.scss';

export default function Work() {
  const websiteProjects = [
    {
      title: 'Thisis180',
      category: 'Website Design',
      year: '2023',
      description:
        'Comprehensive website redesign for a major accounting firm, focusing on professional credibility and user experience optimization.',
    },
  ];

  const appProjects = [
    {
      title: 'Matter App',
      category: 'App Design',
      year: '2023',
      description: 'Mobile application design for productivity and task management, emphasizing clean interfaces and intuitive user flows.',
    },
    {
      title: 'JoyStop',
      category: 'App Design',
      year: '2022',
      description: 'Food delivery app focusing on user experience optimization and conversion rate improvement through design iterations.',
    },
  ];

  const systemProjects = [
    {
      title: 'KraftHeinz',
      category: 'System Design',
      year: '2022',
      description: 'Comprehensive design system architecture enabling consistent brand experience across multiple digital properties and platforms.',
    },
    {
      title: 'JoyStop Food Management Platform',
      category: 'System Design',
      year: '2023',
      description:
        'Complete food service management system design including inventory, ordering, and analytics dashboards for restaurant operations.',
    },
    {
      title: 'AP Eager Automotive Platform',
      category: 'System Design',
      year: '2021',
      description: 'Automotive service platform design focused on streamlining service booking and customer management for automotive businesses.',
    },
  ];

  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="work__container container">
        <div className="work__layout">
          {/* Left Column - Title */}
          <div className="work__sidebar">
            <div className="work__sidebar-content">
              <h2 id="work-title" className="work__title">
                Discover My Works
              </h2>
              <p className="work__subtitle">
                With passion and creativity in work, I partner with clients to define problems, create solutions and design products.
                <br />
                Here are some projects I&apos;ve done
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

            {/* App Design */}
            <div className="work__section">
              <h3 className="work__section-title">App Design</h3>
              <div className="work__section-items">
                {appProjects.map((project, index) => (
                  <WorkItem key={index} {...project} />
                ))}
              </div>
            </div>

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
