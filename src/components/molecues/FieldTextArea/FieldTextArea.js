import React from 'react';
import PropTypes from 'prop-types';
import { LabelForm } from 'components/atoms/LabelForm/LabelForm';
import { TextArea } from './FieldTextArea.style';

const FieldSelect = ({ value, handleChange, name, label, maxLength }) => {
  return (
    <LabelForm htmlFor={name}>
      {label}
      <TextArea name={name} onChange={handleChange} value={value} maxLength={maxLength} />
    </LabelForm>
  );
};

export default FieldSelect;

FieldSelect.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.string,
};
