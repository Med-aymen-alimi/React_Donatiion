import React from 'react';
import DonationProject from './DonationProject';

const DonationProjectsList = ({ projects, handleDonate }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {projects.map((project, index) => (
        <DonationProject key={index} project={project} handleDonate={handleDonate} />
      ))}
    </div>
  );
};

export default DonationProjectsList;
