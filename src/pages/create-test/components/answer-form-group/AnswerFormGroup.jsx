import React from 'react';
import TextInput from 'shared/components/input-field/InputField';
import './AnswerFormGroup.sass';

export default class AnswerFormgroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'test value',
      labelText: 'test text',
    };
  }

  changeHandler = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="answer-create">
        <div className="answer-create__form-group">
          <TextInput
            labelText={ 'test text' }
            value={ this.state.value }
            onChange={ this.changeHandler }
            type={ 'text' }
          />
        </div>
        <div className="answer-create__form-group">
          <label htmlFor={ `answer-correct-${this.props.index}-${this.props.questionIndex}` }></label>
          <input
            type="radio"
            id={ `answer-correct-${this.props.index}-${this.props.questionIndex}` }
            className="create__input input input--radio"
          />
        </div>
      </div>
    );
  }
}