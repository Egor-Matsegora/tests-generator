import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import './InputField.sass';

const TextInput =  ({
    labelText,
    onChange,
    value,
    type,
    isRequired,
    minLength,
    maxLength,
    rows,
    isResized,
    isDisabled
  }) =>  {

  const inputId = uuid();

  return (
    <div className="input">
      {
        type === 'text' && (
          <input
            type="text"
            id={ `input-${inputId}` }
            value={ value || '' }
            minLength={ minLength }
            maxLength={ maxLength }
            required={ isRequired }
            disabled={ isDisabled }
            className="input__field input__field--text"
            onChange={ onChange }
          />
        )
      }

      {
        type === 'textarea' && (
          <textarea
            id={ `input-${inputId}` }
            value={ value || '' }
            className="input__field input__field--textarea"
            minLength={ minLength }
            maxLength={ maxLength }
            rows={ rows }
            required={ isRequired }
            disabled={ isDisabled }
            onChange={ onChange }
            style={{ resize: isResized ? 'initial' : 'none' }}
          ></textarea>
        )
      }

      { !!labelText &&
        (
          <label
            htmlFor={ `input-${inputId}` }
            className="input__label"
          >
            { labelText }
          </label>
        )
      }
    </div>
  );
};

TextInput.propTypes = {
  labelText: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'textarea']),
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  isRequired: PropTypes.bool,
  rows: PropTypes.number,
  isResized: PropTypes.bool,
  isDisabled: PropTypes.bool
}

TextInput.defaultProps = {
  type: 'text',
  value: '',
  minLength: 0,
  maxLength: null,
  rows: 3,
  isRequired: false,
  isResized: false,
  isDisabled: false
}

export default TextInput;