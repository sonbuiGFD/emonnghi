interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

function ExperienceItem({ company, role, period, description, current }: ExperienceItemProps) {
  return (
    <div className="experience_item">
      <div className="experience_item__header">
        <div className="experience_item__info">
          <h3 className="experience_item__role">{role}</h3>
          <p className="experience_item__company">{company}</p>
        </div>
        <div className="experience_item__meta">
          <time className="experience_item__period">{period}</time>
          {current && <span className="experience_item__badge experience_item__badge_current">Present</span>}
        </div>
      </div>
      <p className="experience_item__description">{description}</p>
    </div>
  );
}

export default function About() {
  const experiences = [
    {
      company: 'DSV',
      role: 'Product Designer',
      period: 'Dec 2023',
      current: true,
      description:
        'Focused on creating comprehensive design systems and user experience improvements that boost customer satisfaction in the global logistics industry.',
    },
    {
      company: 'Momo',
      role: 'Product Designer',
      period: 'Aug 2022 - Feb 2023',
      description:
        'As a UI/UX Designer, I work closely with Product Owner on improving existing features, I handle delivery and user experience design through various products.',
    },
    {
      company: 'Silicon Stack',
      role: 'Product Designer',
      period: 'Oct 2020 - Aug 2022',
      description:
        'Enhanced brand image by boosting conversions with Product Designer and Product Owner. Developing business and UI improvements through data analytics and A/B testing methods.',
    },
    {
      company: 'Beyond Creative Agency',
      role: 'UI/UX Designer',
      period: 'Oct 2018 - Oct 2020',
      description:
        'Designed end-to-end digital experiences that align with business goals and provide delightful user experiences. Worked across various industries and client needs.',
    },
    {
      company: 'Freelance UI/UX Designer',
      role: 'UI/UX Designer',
      period: 'Oct 2016 - Present',
      description:
        'Provided comprehensive design services for startups and established businesses, focusing on user-centered design and conversion optimization.',
    },
  ];

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__container">
        <div className="about__layout">
          {/* Left Column - Title */}
          <div className="about__sidebar">
            <h2 id="about-title" className="about__title">
              Something About Me
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="about__content">
            {/* Bio */}
            <div className="about__bio">
              <p className="about__bio-text">
                Hi, I&apos;m a creative UI/UX Designer with focus design on original ideas and a strong background. With a years experience, I&apos;m
                passionate about every project I worked on - that evolving to learn and always improving my skills.
              </p>
              <p className="about__bio-text">
                I believe in creating thoughtful, accessible designs that solve real problems and deliver meaningful experiences. My approach combines
                strategic thinking with creative execution to drive business results.
              </p>
            </div>

            {/* Experience Section */}
            <div className="about__section">
              <h3 className="about__section-title">Experience</h3>
              <div className="about__experience-list">
                {experiences.map((exp, index) => (
                  <ExperienceItem key={index} {...exp} />
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="about__section">
              <h3 className="about__section-title">Education</h3>
              <div className="experience_item experience_item__education">
                <div className="experience_item__header">
                  <div className="experience_item__info">
                    <h4 className="experience_item__role">Graphic Design</h4>
                    <p className="experience_item__company">FPT Arena</p>
                  </div>
                  <time className="experience_item__period">2016 - 2018</time>
                </div>
                <p className="experience_item__description">
                  Comprehensive program covering design fundamentals, typography, color theory, and digital design tools with focus on user-centered
                  design principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
