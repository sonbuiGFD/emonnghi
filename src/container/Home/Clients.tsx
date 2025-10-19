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
    <section id="clients" className="clients" aria-labelledby="clients-title">
      <div className="clients__container">
        <div className="clients__header">
          <h2 id="clients-title" className="clients__title">
            Clients & Partners
          </h2>
          <p className="clients__subtitle">
            Trusted by leading brands to deliver exceptional digital experiences
            that drive growth and engagement.
          </p>
        </div>

        <div className="clients__grid">
          {clients.map((client) => (
            <div
              key={client.name}
              className="clients__logo"
              role="img"
              aria-label={`${client.name} logo`}
            >
              <Image
                src={client.logo}
                alt={`${client.name} company logo`}
                width={120}
                height={40}
                className="clients__logo_image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Optional testimonial or stats section */}
        <div className="clients__stats">
          <div className="clients__stats_grid">
            <div className="clients__stat">
              <div className="clients__stat_number">50+</div>
              <p className="clients__stat_label">Projects Completed</p>
            </div>
            <div className="clients__stat">
              <div className="clients__stat_number">8+</div>
              <p className="clients__stat_label">Years Experience</p>
            </div>
            <div className="clients__stat">
              <div className="clients__stat_number">15+</div>
              <p className="clients__stat_label">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
