import Image from "next/image";

export default function Clients() {
  const clients = [
    { name: "Kraft Heinz", logo: "/logo-kraft-heinz.svg" },
    { name: "Novaland", logo: "/logo-novaland.svg" },
    { name: "Viettel", logo: "/logo-viettel.svg" },
    { name: "Grab", logo: "/logo-grab.svg" },
    { name: "MoMo", logo: "/logo-momo.svg" },
    { name: "Aeon", logo: "/logo-aeon.svg" },
    { name: "Faraday", logo: "/logo-faraday.svg" },
    { name: "Rellet", logo: "/logo-rellet.svg" },
  ];

  return (
    <section
      id="clients"
      className="py-16 md:py-24 lg:py-32"
      aria-labelledby="clients-title"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2
            id="clients-title"
            className="font-display text-display-md text-text-primary mb-4"
          >
            Clients & Partners
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto text-pretty">
            Trusted by leading brands to deliver exceptional digital experiences
            that drive growth and engagement.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="client-logo group cursor-pointer"
              role="img"
              aria-label={`${client.name} logo`}
            >
              <Image
                src={client.logo}
                alt={`${client.name} company logo`}
                width={120}
                height={40}
                className="h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Optional testimonial or stats section */}
        <div className="mt-20 pt-16 border-t border-border-light">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-display font-semibold text-text-primary mb-2">
                50+
              </div>
              <p className="text-text-secondary font-medium">
                Projects Completed
              </p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-display font-semibold text-text-primary mb-2">
                8+
              </div>
              <p className="text-text-secondary font-medium">
                Years Experience
              </p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-display font-semibold text-text-primary mb-2">
                15+
              </div>
              <p className="text-text-secondary font-medium">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
