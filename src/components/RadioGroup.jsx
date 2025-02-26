import React from 'react';

const RadioGroup = ({ label, name, options, selected, onChange }) => (
  <div className="radio-group-base">
    <label className="radio-group-label">
      {label} <span className="required-star">*</span>
    </label>
    <div className="radio-options-row">
      {options.map((option) => (
        <label key={option.value} className="radio-option">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={onChange}
          />
          <span className="radio-label-text">{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);

export default RadioGroup;
