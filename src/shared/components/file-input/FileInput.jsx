import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import './FileInput.sass';
import './fileTypes';
import fileTypes from './fileTypes';

const FileInput = ({
  labelText,
  filePath,
  onChange,
  errors,
  isRequired,
  isDisabled,
  expectedTypes,
  maxSize,
}) => {

  const [inputId] = useState(uuid());
  const [inputFile, setInputFile] = useState(filePath);
  const [inputErrors, setInputErrors] = useState([]);

  const onChangeHandler = (event) => {
    const file = event.target.files[0];
    const resultFileUrl = file ? URL.createObjectURL(file) : null;

    if(!resultFileUrl) return;

    setInputFile(resultFileUrl);
    processInputErrors(file);

    onChange(event);
  }

  const inputRef = useRef(null);

  const resetInput = () => {
    setInputFile(null);
    inputRef.current.value = null;
  }

  const processInputErrors = (file) => {
    let fileErrors = [];
    const size = (maxSize / 1024 / 1024).toFixed(0);
    // добавляем ошибку если слишком большой фаил
    if (file.size > maxSize) {
      fileErrors.push(`Размер файла не может привышать ${size}Mb`);
    }
    // добавляем ошибку если неверный тип
    if(!expectedTypes.includes(file.type)) {
      const types = expectedTypes.reduce((accum, current) => {
        return accum + ` .${current.split('/')[1]},`;
      }, '')
      fileErrors.push('Фаил должен иметь формат' + types);
    }

    if(fileErrors.length) {
      setInputErrors(fileErrors);
      setInputFile(null);
      resetInput();
    } else {
      setInputErrors([]);
    }
  }

  return (
    <div className="file-input">
      <label
        htmlFor={ inputId }
        className="file-input__label"
      > { labelText } </label>
      <div className={
        `file-input__box ${ !inputFile ? 'file-input__box--empty' : '' }
        ${ inputErrors.length || (errors && errors.length) ? 'file-input__box--error' : '' }`
      } >
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
          onChange={ onChangeHandler }
          ref={ inputRef }
          disabled={ isDisabled }
        />
      </div>
      {
        [...errors, ...inputErrors].map((error, index)=> (
          <div key={ index } className="input-file__error">{ error }</div>
        ))
      }
    </div>
  );
}

FileInput.propTypes = {
  labelText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  filePath: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  isRequired: PropTypes.bool,
  expectedTypes: PropTypes.arrayOf(PropTypes.oneOf(fileTypes)),
  maxSize: PropTypes.number
}

FileInput.defaultProps = {
  labelText: 'Выберите изображение',
  maxSize: 1024 * 1024 * 2,
  expectedTypes: [ 'image/png', 'image/jpeg', 'image/gif' ],
  errors: []
}

export default FileInput;