interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

function ExperienceItem({
  company,
  role,
  period,
  description,
  current,
}: ExperienceItemProps) {
  return (
    <div className="experience-item">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-text-primary text-lg">{role}</h3>
          <p className="text-text-secondary font-medium">{company}</p>
        </div>
        <div className="flex items-center gap-2">
          <time className="text-sm text-text-secondary font-medium whitespace-nowrap">
            {period}
          </time>
          {current && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Present
            </span>
          )}
        </div>
      </div>
      <p className="text-text-secondary leading-relaxed text-pretty">
        {description}
      </p>
    </div>
  );
}

export default function About() {
  const experiences = [
    {
      company: "DSV",
      role: "Product Designer",
      period: "Dec 2023",
      current: true,
      description:
        "Focused on creating comprehensive design systems and user experience improvements that boost customer satisfaction in the global logistics industry.",
    },
    {
      company: "Momo",
      role: "Product Designer",
      period: "Aug 2022 - Feb 2023",
      description:
        "As a UI/UX Designer, I work closely with Product Owner on improving existing features, I handle delivery and user experience design through various products.",
    },
    {
      company: "Silicon Stack",
      role: "Product Designer",
      period: "Oct 2020 - Aug 2022",
      description:
        "Enhanced brand image by boosting conversions with Product Designer and Product Owner. Developing business and UI improvements through data analytics and A/B testing methods.",
    },
    {
      company: "Beyond Creative Agency",
      role: "UI/UX Designer",
      period: "Oct 2018 - Oct 2020",
      description:
        "Designed end-to-end digital experiences that align with business goals and provide delightful user experiences. Worked across various industries and client needs.",
    },
    {
      company: "Freelance UI/UX Designer",
      role: "UI/UX Designer",
      period: "Oct 2016 - Present",
      description:
        "Provided comprehensive design services for startups and established businesses, focusing on user-centered design and conversion optimization.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32"
      aria-labelledby="about-title"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <h2
              id="about-title"
              className="font-display text-display-lg text-text-primary sticky top-24"
            >
              Something About Me
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Bio */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-text-secondary leading-extra-relaxed text-pretty">
                Hi, I&apos;m a creative UI/UX Designer with focus design on
                original ideas and a strong background. With a years experience,
                I&apos;m passionate about every project I worked on - that
                evolving to learn and always improving my skills.
              </p>
              <p className="text-lg text-text-secondary leading-extra-relaxed text-pretty mt-6">
                I believe in creating thoughtful, accessible designs that solve
                real problems and deliver meaningful experiences. My approach
                combines strategic thinking with creative execution to drive
                business results.
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-8 uppercase tracking-wide">
                Experience
              </h3>
              <div className="space-y-0">
                {experiences.map((exp, index) => (
                  <ExperienceItem key={index} {...exp} />
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-8 uppercase tracking-wide">
                Education
              </h3>
              <div className="experience-item border-b-0 pb-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-lg">
                      Graphic Design
                    </h4>
                    <p className="text-text-secondary font-medium">FPT Arena</p>
                  </div>
                  <time className="text-sm text-text-secondary font-medium whitespace-nowrap">
                    2016 - 2018
                  </time>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Comprehensive program covering design fundamentals,
                  typography, color theory, and digital design tools with focus
                  on user-centered design principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
