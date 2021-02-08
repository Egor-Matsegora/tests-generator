import React from 'react';
import './TestFormGroup.sass';

export default () => {

  return (
    <>
      <div className="create__form-group">
        <label htmlFor="test-title"></label>
        <input
          type="text"
          id="test-title"
          className="create__input input input__text"
        />
      </div>
      <div className="create__form-group">
        <label htmlFor="test-description"></label>
        <textarea
          type="text"
          id="test-description"
          className="create__input input input__textarea"
        ></textarea>
      </div>
      <div className="create__form-group">
        <label htmlFor="test-image"></label>
        <input
          type="file"
          id="test-image"
          className="create__input input input__image"
        />
      </div>
    </>
  );
}