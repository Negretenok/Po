import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <h2 className="section__title">My Portfolio</h2>
        <span className="section__subtitle">Still a work in progress...</span>
        
        <div className="portfolio__content">
          <div className="portfolio__message">
            <h3 className="portfolio__message-title">This page is under construction!</h3>
            <p className="portfolio__message-text">
              Я не успела сделать портфолио из за вашего проекта, поэтому извините потом доделаю
            </p>
          </div>
          
          <div className="portfolio__illustration">
            <img 
              src="https://via.placeholder.com/400" 
              alt="Under Construction" 
              className="portfolio__img" 
            />
          </div>
        </div>
        
        <div className="portfolio__cta">
          <a href="#contact" className="btn btn--primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
