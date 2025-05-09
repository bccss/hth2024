import React from 'react';
import "../stylesheets/Sponsors.css";

import schillerLogo from '../../assets/images/schiller-logo.png';
import cmtLogo from "../../assets/images/cmt-logo.webp"
import dellLogo from "../../assets/images/dell-logo.png"

const Sponsors = () => {
  const sponsorList = [
    { name: 'Cambridge Mobile Telematics', logoSrc: cmtLogo },
    { name: 'Schiller Institute', logoSrc: schillerLogo },
    { name: 'Dell', logoSrc: dellLogo }
  ];

  return (
    <div className="sponsors-container" id="Sponsors">
      <h2 className="sponsors-heading">← sponsors →</h2>
      <div className="sponsors-grid">
        {sponsorList.map(sponsor => (
          <div key={sponsor.name} className="sponsor-item">
            <div className="sponsor-logo">
              <img src={sponsor.logoSrc} alt={`${sponsor.name} Logo`} />
            </div>
            <p className="sponsor-name">{sponsor.name}</p>
          </div>
        ))}
      </div>
      {/* <p className="sponsors-contact">
        If you'd like to sponsor this event, please contact us at{' '}
        <a href="mailto:bcssociety@gmail.com">bcssociety@gmail.com</a>
      </p> */}
    </div>
  );
};

export default Sponsors;