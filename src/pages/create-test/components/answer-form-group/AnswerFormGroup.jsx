import React from 'react';
import InputField from 'shared/components/input-field/InputField';
import CustomRadio from 'shared/components/custom-radio/CustomRadio';
import './AnswerFormGroup.sass';

export default class AnswerFormgroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      labelText: 'test text',
    };
  }

  changeHandler = (event) => {
    this.setState({ value: event.target.value });
  }

  radioHandler() { console.log('radio') }

  render() {
    return (
      <div className="answer-create">
        <div className="answer-create__form-group answer-create__form-group--text">
          <InputField
            labelText={ 'Введите текст ответа' }
            value={ this.state.value }
            onChange={ this.changeHandler }
            name={ 'name' }
            isStreched={ true }
          />
        </div>
        <div className="answer-create__form-group answer-create__form-group--radio">
          <CustomRadio
            name="name"
            value={ `${ this.props.index }` }
            onChange={ this.radioHandler }
            labelText="Правильный ответ"
          />
        </div>
      </div>
    );
  }
}