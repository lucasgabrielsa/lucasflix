import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({
  value, name, onChange, label, type,
}) => (
  <div>
    <label htmlFor="nome">
      {label}
      :
    </label>
    <input type={type} name={name} id={name} value={value} onChange={onChange} />
  </div>
);

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
