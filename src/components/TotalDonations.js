import React from 'react';

const TotalDonations = ({ totalDonated }) => {
  return (
    <div style={{ margin: '20px', fontSize: '18px', fontWeight: 'bold' }}>
      <p>Total Donations: ${totalDonated}</p>
    </div>
  );
};

export default TotalDonations;
