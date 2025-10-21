import Image from 'next/image';
import './style.scss';

import client_logo__1 from '@public/clients/client_logo__1.png';
import client_logo__2 from '@public/clients/client_logo__2.png';
import client_logo__3 from '@public/clients/client_logo__3.png';
import client_logo__4 from '@public/clients/client_logo__4.svg?url';
import client_logo__5 from '@public/clients/client_logo__5.png';
import client_logo__6 from '@public/clients/client_logo__6.png';
import client_logo__7 from '@public/clients/client_logo__7.png';
import client_logo__8 from '@public/clients/client_logo__8.png';
import client_logo__9 from '@public/clients/client_logo__9.png';
import client_logo__10 from '@public/clients/client_logo__10.svg?url';
import client_logo__11 from '@public/clients/client_logo__11.png';
import client_logo__12 from '@public/clients/client_logo__12.svg?url';

export default function Clients() {
  const clients = [
    { name: 'Kraft Heinz', logo: client_logo__1 },
    { name: 'Novaland', logo: client_logo__2 },
    { name: 'Viettel', logo: client_logo__3 },
    { name: '25fit', logo: client_logo__4 },
    { name: 'MoMo', logo: client_logo__5 },
    { name: 'Aeon', logo: client_logo__6 },
    { name: 'Grab', logo: client_logo__7 },
    { name: 'Havang', logo: client_logo__8 },
    { name: 'Rollot', logo: client_logo__9 },
    { name: 'Pharaday', logo: client_logo__10 },
    { name: 'Rellet', logo: client_logo__11 },
    { name: 'VietGap', logo: client_logo__12 },
  ];

  return (
    <section id="clients" className="clients" aria-labelledby="clients-title">
      <div className="clients__container container">
        <div className="clients__content">
          <div className="clients__header">
            <h2 id="clients-title" className="clients__title">
              Clients & Partners
            </h2>
            <p className="clients__subtitle">
              Trusted by leading brands to deliver exceptional digital experiences that drive growth and engagement.
            </p>
          </div>
          <div className="clients__grid">
            {clients.map((client) => (
              <div key={client.name} className="clients__logo" role="img" aria-label={`${client.name} logo`}>
                <Image src={client.logo} alt={`${client.name} company logo`} width={120} height={40} className="clients__logo_image" loading="lazy" />
              </div>
            ))}
          </div>
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
