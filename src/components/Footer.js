import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__head">
        <div className="logo">
          <span>G.</span>
        </div>
        <p>Web developement with MERN stack</p>
      </div>
      {/* <div className="social">
        <div className="social--circle">
          <svg>
            <use xlinkHref={`${icons}#icon-facebook`}></use>
          </svg>
        </div>
        <div className="social--circle">
          <svg>
            <use xlinkHref={`${icons}#icon-youtube`}></use>
          </svg>
        </div>
        <div className="social--circle">
          <svg>
            <use xlinkHref={`${icons}#icon-twitter`}></use>
          </svg>
        </div>
        <div className="social--circle">
          <svg>
            <use xlinkHref={`${icons}#icon-linkedin`}></use>
          </svg>
        </div>
      </div> */}
      <div className="copyright">
        <p>
          Copyright © 2020 <span>Gert Mosin</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
