import React from 'react';
import InputField from 'shared/components/input-field/InputField';
import CustomRadio from 'shared/components/custom-radio/CustomRadio';
import './AnswerFormGroup.sass';

export default class AnswerFormgroup extends React.Component {

  constructor(props) {
    console.log(props)
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
        <div className="answer-create__form-group">
          <InputField
            labelText={ 'test text' }
            value={ this.state.value }
            onChangeHandler={ this.changeHandler }
            name={ 'name' }
          />
        </div>
        <div className="answer-create__form-group">
          <CustomRadio
            name="name"
            value={ `${ this.props.index }` }
            onChangeHandler={ this.radioHandler }
            labelText="some beautiful text"
          />
        </div>
      </div>
    );
  }
}