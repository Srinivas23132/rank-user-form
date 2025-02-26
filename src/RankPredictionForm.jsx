import React, { useState } from 'react';
import Button from './components/Button';
import InputField from './components/InputField';
import RadioGroup from './components/RadioGroup';
import './RankPredictionForm.css';

// src/RankPredictionForm.jsx
const RankPredictionForm = () => {
  const [formData, setFormData] = useState({
    cetMarks: '',
    homeState: 'Maharashtra',
    pwd: 'No',
    category: 'General',
  });

// src/RankPredictionForm.jsx
const handleChange = (e) => {
  let { name, value } = e.target;

  // If it's the CET Marks field, clamp to [0, 180]
  if (name === 'cetMarks') {
    // Convert string to number
    value = value.replace(/[^0-9]/g, ''); 
    let numericValue = parseInt(value, 10);

    // If the user clears the field, numericValue becomes NaN
    if (isNaN(numericValue)) {
      numericValue = '';
    } else {
      if (numericValue < 0) numericValue = 0;
      if (numericValue > 180) numericValue = 180;
    }

    // Convert back to string for state
    value = numericValue.toString();
  }

  setFormData({ ...formData, [name]: value });
};


  const handleClear = () => {
    setFormData({
      cetMarks: '',
      homeState: 'Maharashtra',
      pwd: 'No',
      category: 'General',
    });
  };

  const handleGetResults = () => {
    console.log('Get Results clicked', formData);
    // Add your navigation or API call here
  };

  return (
    <div className="form-container">
      {/* Gray pill + Blue pill header */}
      <div className="slider">
        <div className="slider-inner">
          <span className="slider-text">Predict Your Rank By Marks</span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="form-content">
        <InputField
          label="CET Marks"
          name="cetMarks"
          value={formData.cetMarks}
          onChange={handleChange}
        />
        <RadioGroup
          label="Home State"
          name="homeState"
          options={[
            { value: 'Maharashtra', label: 'Maharashtra' },
            { value: 'Other', label: 'Other State' },
          ]}
          selected={formData.homeState}
          onChange={handleChange}
        />
        <RadioGroup
          label="PwD (Person With Disability)"
          name="pwd"
          options={[
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
          ]}
          selected={formData.pwd}
          onChange={handleChange}
        />
        <RadioGroup
          label="Category"
          name="category"
          options={[
            { value: 'General', label: 'General' },
            { value: 'OBC', label: 'OBC' },
            { value: 'EWS', label: 'EWS' },
            { value: 'SC', label: 'SC' },
            { value: 'ST', label: 'ST' },
          ]}
          selected={formData.category}
          onChange={handleChange}
        />
      </div>

      {/* Buttons */}
      <div className="form-buttons">
        <Button
          text="Clear"
          onClick={handleClear}
          className="clear-btn"
        />
        <Button
          text="Get Results"
          onClick={handleGetResults}
          className="results-btn"
        />
      </div>
    </div>
  );
};

export default RankPredictionForm;
