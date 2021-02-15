import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import './FileInput.sass';

const FileInput = ({ 
  labelText,
  filePath,
  onChangeHandler,
  errors,
  isRequired,
  isDisabled
}) => {

  const [inputId] = useState(uuid());
  const [inputFile, setInputFile] = useState(filePath);
  const [inputErrors, setInputErrors] = useState(errors);

  const onChange = (event) => {
    const resultFileUrl = event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : null;
    if(!resultFileUrl) return;
    setInputFile(resultFileUrl);
    onChangeHandler(event);
  }

  const inputRef = useRef(null);

  const resetInput = () => {
    setInputFile(null);
    inputRef.current.value = null;
  }

  return (
    <div className="file-input">
      <label
        htmlFor={ inputId }
        className="file-input__label"
      > { labelText } </label>
      <div className={ `file-input__box ${ !inputFile ? 'file-input__box--empty' : '' } ${ inputErrors && inputErrors.length ? 'file-input__box--error' : '' }` } >
        { inputFile ? (
          <>
            <img className="file-input__image" src={ inputFile } /> 
            <div className="file-input__delete-image" onClick={ resetInput }></div>
          </>
        ) : '' }
        <input
          type="file"
          id={ inputId }
          className="file-input__input"
          required={ isRequired }
          onChange={ onChange }
          ref={ inputRef }
          disabled={ isDisabled || (inputErrors && inputErrors.length) }
        />
      </div>
      {
        inputErrors && inputErrors.map((error, index)=> (
          <div key={ index } className="input-file__error">{ error }</div>
        ))
      }
    </div>
  );
}

FileInput.propTypes = {
  labelText: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  filePath: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  isRequired: PropTypes.bool
}

FileInput.defaultProps = {
  labelText: 'Выберите изображение',
}

export default FileInput;