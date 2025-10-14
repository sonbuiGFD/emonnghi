import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: string;
  titleClassName?: string;
}

export default function Section({
  children,
  id,
  className = "",
  eyebrow,
  title,
  titleClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${className}`}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      <div className="container-custom">
        {(eyebrow || title) && (
          <div className="mb-12 md:mb-16 lg:mb-20">
            {eyebrow && (
              <p className="text-sm uppercase tracking-wider text-text-secondary mb-4 font-medium">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={title ? `${id}-title` : undefined}
                className={`font-display text-display-lg text-text-primary ${titleClassName}`}
              >
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
