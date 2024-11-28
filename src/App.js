import React, { useState } from 'react';
import TotalDonations from './components/TotalDonations';
import DonationProjectsList from './components/DonationProjectsList';

const App = () => {
  const [totalDonated, setTotalDonated] = useState(0);

  const projects = [
    { 
      name: 'Feed the Homeless (West Africa)', 
      description: 'This project aims to provide meals to the homeless in the local community. Your donations will be used to purchase food and supplies for shelters.', 
      image: 'homeless.png'
    },
    { 
      name: 'Clean Water for All (Nigeria)', 
      description: 'We aim to provide clean drinking water to underdeveloped regions. Your donation will help build water wells and provide purification systems.', 
      image: 'water.png'
    },
    { 
      name: 'Help Feed Families (Chad)', 
      description: 'This project focuses on providing food baskets for struggling families. Your donations will support food distribution efforts.', 
      image: 'families.png'
    },
    { 
      name: 'Education for All (Uganda)', 
      description: 'A project to provide educational resources and school supplies to children in Uganda.', 
      image: 'education.png'
    },
  ];

  const handleDonate = (project, amount) => {
    alert(`Donated $${amount} to ${project.name}`);
    setTotalDonated(prevTotal => prevTotal + amount); // Correctly update totalDonated here
  };

  return (
    <div className="App" style={styles.appContainer}>
      <h1 style={styles.pageTitle}>Welcome to CharityHub</h1>
      <p style={styles.pageDescription}>
        Your one-stop hub for supporting charitable causes. Choose a cause and donate today!
      </p>
      
      {/* Total Donations */}
      <TotalDonations totalDonated={totalDonated} />

      {/* Donation Projects List */}
      <DonationProjectsList 
        projects={projects} 
        handleDonate={handleDonate}  // Pass handleDonate function here
      />
    </div>
  );
};

const styles = {
  appContainer: {
    padding: '20px',
    fontFamily: '"Arial", sans-serif',
    backgroundColor: '#f4f7fc',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#2d3a3a',
    marginBottom: '20px',
    textAlign: 'center',
  },
  pageDescription: {
    fontSize: '18px',
    color: '#555',
    textAlign: 'center',
    marginBottom: '40px',
    maxWidth: '800px',
  },
};

export default App;
