import React from 'react';
import InputField from 'shared/components/input-field/InputField';
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

  render() {
    return (
      <div className="answer-create">
        <div className="answer-create__form-group">
          <InputField
            labelText={ 'test text' }
            value={ this.state.value }
            onChangeHandler={ this.changeHandler }
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