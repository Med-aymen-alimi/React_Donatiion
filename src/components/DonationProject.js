import React from 'react';
import DonationForm from './DonationForm';

const DonationProject = ({ project, handleDonate }) => {
  return (
    <div className="project-card" style={styles.projectCard}>
      <h3>{project.name}</h3>
      <img 
        src={`/images/${project.image}`} 
        alt={project.name} 
        style={styles.projectImage} 
      />
      <p>{project.description}</p>
      <DonationForm project={project} handleDonate={handleDonate} />
    </div>
  );
};

const styles = {
  projectCard: {
    margin: '20px', 
    border: '1px solid #ddd', 
    padding: '10px', 
    borderRadius: '8px', 
    maxWidth: '45%', 
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  projectImage: {
    width: '100%',       
    height: 'auto',      
    maxHeight: '350px',  
    borderRadius: '8px', 
    objectFit: 'cover',  
    marginBottom: '10px',
  },
};

export default DonationProject;
