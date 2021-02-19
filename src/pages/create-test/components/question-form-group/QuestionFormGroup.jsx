import React from 'react';
import AnswerFormGroup from '../answer-form-group/AnswerFormGroup';
import InputField from 'shared/components/input-field/InputField';
import FileInput from 'shared/components/file-input/FileInput';
import './QuestionFormGroup.sass';

export default class QuestionFormGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: props.question
    }
  }

  changeHandler = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div className="create-question">
        <div className="create-question__form-group">
          <InputField
            value={ this.state.question.title }
            name={ `question-${this.props.index}-title` }
            onChange={ this.changeHandler }
            isStreched={ true }
            isRequired={ true }
            labelText="Формулировка вопроса"
          />
        </div>
        <div className="create-question__form-group">
          <InputField
            value={ this.state.question.title }
            name={ `question-${this.props.index}-description` }
            onChange={ this.changeHandler }
            isStreched={ true }
            labelText="Описание вопроса"
            type="textarea"
          />
        </div>
        <div className="create-question__form-group">
          <FileInput
            labelText="Изображение вопроса"
            onChange={ this.changeHandler }
          />
        </div>
        <h2 className="create__form-text">Варианты ответов:</h2>
          {
            this.props.question.answers.map((answer, index) => (
              <AnswerFormGroup index={ index } questionIndex={ this.props.index } answer={ answer } key={ `${index}` }/>
            ))
          }
      </div>
    )
  }
}