import "./services.css";
import React, { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const handleViewMoreClick = (index) => {
    setActiveService(index);
  };

  const handleCloseModal = () => {
    setActiveService(null);
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Creating user-friendly and responsive websites.',
      details: [
        'Develop user interfaces.',
        'Web page development.',
        'Create UX element interactions.',
        'Brand positioning.',
        'Design and mockups of products for companies.',
      ],
    },
    {
      title: 'Mobile App Development',
      description: 'Design and develop high-quality mobile applications.',
      details: [
        'Build native apps for iOS and Android.',
        'Create smooth user experiences.',
        'Implement custom app features.',
        'Integrate with APIs and third-party services.',
        'Publish apps on the App Store and Google Play.',
      ],
    },
    {
      title: 'UI/UX Design',
      description: 'Creating modern and engaging designs for apps and websites.',
      details: [
        'Research user needs and behavior.',
        'Design wireframes and prototypes.',
        'Create high-fidelity UI designs.',
        'Conduct usability testing.',
        'Collaborate with developers to implement designs.',
      ],
    },
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <div key={index} className="services__card">
            <div className="services__icon">
              <i className="uil uil-cogs"></i> {/* You can change this icon based on the service */}
            </div>
            <h3 className="services__title">{service.title}</h3>
            <p className="services__description">{service.description}</p>
            <span
              className="services__button"
              onClick={() => handleViewMoreClick(index)}
            >
              View more <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </div>
        ))}
      </div>

      {/* Modal for showing service details */}
      {activeService !== null && (
        <div className="services__modal">
          <div className="services__modal-content">
            <i
              className="uil uil-times services__modal-close"
              onClick={handleCloseModal}
            ></i>
            <h3 className="services__modal-title">
              {services[activeService].title}
            </h3>
            <p className="services__modal-description">
              {services[activeService].description}
            </p>
            <ul className="services__modal-services">
              {services[activeService].details.map((detail, idx) => (
                <li key={idx} className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
