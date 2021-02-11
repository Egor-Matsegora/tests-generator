import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './InputField.sass';

const TextInput =  ({
    labelText,
    onChangeHandler,
    value,
    name,
    type,
    isRequired,
    minLength,
    maxLength,
    rows,
    isResized,
    isDisabled,
    isStrached,
    updateOn,
    errors
  }) =>  {

  const [inputValue, setInputValue] = useState(value);
  const [inputId] = useState(uuid());

  const valueChangeHandler = (event) => {
    event.type === 'change' && setInputValue(event.target.value);
    event.type === 'blur' && setInputValue(event.target.value.trim());
    event.type === updateOn && inputValue.trim() && onChangeHandler(event);
  }

  return (
    <div className={ isStrached ? 'input-field input-field--streched' : 'input-field'}>
      {
        type === 'text' && (
          <input
            type="text"
            id={ `input-${inputId}` }
            name={ name }
            value={ inputValue }
            minLength={ minLength }
            maxLength={ maxLength }
            required={ isRequired }
            disabled={ isDisabled }
            className={ `input-field__field input-field__field--text ${ !!errors.length && 'input-field__field--error' }` }
            onChange={ valueChangeHandler }
            onBlur={ valueChangeHandler }
          />
        )
      }

      {
        type === 'textarea' && (
          <textarea
            id={ `input-${inputId}` }
            name={ name }
            value={ inputValue }
            className={ `input-field__field input-field__field--textarea ${ !!errors.length && 'input-field__field--error' }` }
            minLength={ minLength }
            maxLength={ maxLength }
            rows={ rows }
            required={ isRequired }
            disabled={ isDisabled }
            onChange={ valueChangeHandler }
            onBlur={ valueChangeHandler }
            style={{ resize: isResized ? 'both' : 'none' }}
          ></textarea>
        )
      }

      { !!labelText &&
        (
          <label
            htmlFor={ `input-${inputId}` }
            className={ `input-field__label ${ inputValue.trim() ? 'input-field__label--active' : '' }` }
          >
            { labelText }
          </label>
        )
      }

      {
        errors.map((err, index) => (
          <div className="input-field__error" key={ `${index}` }>
            { err }
          </div>
        ))
      }
    </div>
  );
};

TextInput.propTypes = {
  labelText: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'textarea']),
  updateOn: PropTypes.oneOf(['change', 'blur']),
  errors: PropTypes.arrayOf(PropTypes.string),
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  rows: PropTypes.number,
  isRequired: PropTypes.bool,
  isResized: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isStrached: PropTypes.bool
}

TextInput.defaultProps = {
  type: 'text',
  value: '',
  updateOn: 'change',
  errors: [],
  minLength: 0,
  maxLength: null,
  rows: 3,
  isRequired: false,
  isResized: false,
  isDisabled: false,
  isStrached: false
}

export default TextInput;