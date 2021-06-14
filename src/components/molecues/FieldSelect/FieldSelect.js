import React from 'react';
import PropTypes from 'prop-types';
import { LabelForm } from 'components/atoms/LabelForm/LabelForm';
import { StyledFieldOption } from './FieldSelect.style';

const FieldSelect = ({ value, handleChange, name, label, options }) => {
  return (
    <LabelForm htmlFor={name}>
      {label}
      <StyledFieldOption component="select" name={name} value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledFieldOption>
    </LabelForm>
  );
};

export default FieldSelect;

FieldSelect.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  label: PropTypes.string,
};
