import React from 'react';

const InputField = ({ label, name, value, onChange }) => (
  <div className="input-field-base">
    <label className="input-label">
      {label} <span className="required-star">*</span>
    </label>
    <div className="input-wrapper">
      <input
        type="text"          
        name={name}
        value={value}
        onChange={onChange}  
        placeholder="Enter your marks"
      />
    </div>
  </div>
);

export default InputField;
