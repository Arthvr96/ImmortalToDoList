import React from 'react';
import PropTypes from 'prop-types';
import { LabelForm } from 'components/atoms/LabelForm/LabelForm';
import { TextInput } from './FieldText.style';

const FieldSelect = ({ value, handleChange, name, label }) => {
  return (
    <LabelForm htmlFor={name}>
      {label}
      <TextInput type="text" name={name} onChange={handleChange} value={value} />
    </LabelForm>
  );
};

export default FieldSelect;

FieldSelect.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
};
