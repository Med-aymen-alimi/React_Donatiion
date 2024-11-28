import React, { useState } from 'react';

const DonationForm = ({ project, handleDonate }) => {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (donationAmount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }
    handleDonate(project, donationAmount);  // Pass both project and donation amount
    setDonationAmount(0); // Reset the input field
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label htmlFor="donationAmount" style={styles.label}>
        Enter donation amount ($):
      </label>
      <input 
        type="number" 
        id="donationAmount" 
        value={donationAmount}
        onChange={handleChange}
        style={styles.input}
        min="1"
        required
      />
      <button type="submit" style={styles.button}>Donate</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: '16px',
    marginBottom: '8px',
  },
  input: {
    padding: '10px',
    marginBottom: '12px',
    fontSize: '16px',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default DonationForm;
