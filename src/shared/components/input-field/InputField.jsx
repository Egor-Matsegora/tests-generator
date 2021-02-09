import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import './InputField.sass';

const TextInput =  ({
    labelText,
    onChangeHandler,
    value,
    type,
    isRequired,
    minLength,
    maxLength,
    rows,
    isResized,
    isDisabled,
    isStrached
  }) =>  {

  

  const inputId = uuid();

  return (
    <div className={ isStrached ? 'input-field input-field--streched' : 'input-field'}>
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
            className="input-field__field input-field__field--text"
            onChange={ onChangeHandler }
          />
        )
      }

      {
        type === 'textarea' && (
          <textarea
            id={ `input-${inputId}` }
            value={ value || '' }
            className="input-field__field input-field__field--textarea"
            minLength={ minLength }
            maxLength={ maxLength }
            rows={ rows }
            required={ isRequired }
            disabled={ isDisabled }
            onChange={ onChangeHandler }
            style={{ resize: isResized ? 'both' : 'none' }}
          ></textarea>
        )
      }

      { !!labelText &&
        (
          <label
            htmlFor={ `input-${inputId}` }
            className={ `input-field__label ${ value.trim() ? 'input-field__label--active' : '' }` }
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
  onChangeHandler: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'textarea']),
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  isRequired: PropTypes.bool,
  rows: PropTypes.number,
  isResized: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isStrached: PropTypes.bool
}

TextInput.defaultProps = {
  type: 'text',
  value: '',
  minLength: 0,
  maxLength: null,
  rows: 3,
  isRequired: false,
  isResized: false,
  isDisabled: false,
  isStrached: false
}

export default TextInput;