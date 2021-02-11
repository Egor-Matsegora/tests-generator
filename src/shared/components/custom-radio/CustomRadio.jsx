import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import './CustomRadio.sass';

const CustomRadio = ({
  labelText,
  name,
  value,
  onChangeHandler
}) => {
  const [ inputId ] = useState(uuid());

  return (
    <div className="custom-radio">
      <input
        type="radio"
        id={ inputId }
        className="custom-radio__input"
        name={ name }
        value={ value }
        onChange={ onChangeHandler }
      />
      <label htmlFor={ inputId } className="custom-radio__label">
        { labelText }
      </label>
    </div>
  );
}

CustomRadio.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
}

export default CustomRadio;