import React from 'react';
import './TestFormGroup.sass';
import FileInput from 'shared/components/file-input/FileInput';
import InputField from 'shared/components/input-field/InputField';

export default () => {

  const changeHandler = (event) => console.log(event)

  return (
    <>
      <div className="create-test__form-group">
        <InputField
          name="test tytle"
          labelText="Название теста"
          onChange={ changeHandler }
          isStreched={ true }
          isRequiered={ true }
        />
      </div>
      <div className="create-test__form-group">
        <InputField
          name="test descrition"
          labelText="Описание теста"
          onChange={ changeHandler }
          type="textarea"
          isStreched={ true }
        />
      </div>
      <div className="create-test__form-group">
        <FileInput
          onChange={ changeHandler }
          labelText={ 'Изображение для заголовка теста' }
        />
      </div>
    </>
  );
}