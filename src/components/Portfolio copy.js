import React from 'react';

const Portfolio = ({ portfolioRef }) => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__head">
        <h2 className="portfolio__head__title">Portfolio</h2>
        <p className="portfolio__head__desc">
          Cras nec leo eget nulla facilisis tempus id non est. Nulla facilisi.
          Sed vestibulum.
        </p>
      </div>
      <div className="portfolio__main">
        <div className="portfolio__main--featured" />
        <div className="portfolio__main--images">
          <div className="portfolio__main--image" />
          <div className="portfolio__main--image" />
          <div className="portfolio__main--image" />
          <div className="portfolio__main--image" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
