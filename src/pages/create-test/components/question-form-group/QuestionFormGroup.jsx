import React from 'react';
import { SlideDown } from 'react-slidedown';
import AnswerFormGroup from '../answer-form-group/AnswerFormGroup';
import InputField from 'shared/components/input-field/InputField';
import FileInput from 'shared/components/file-input/FileInput';
import Button from 'shared/components/button/Button';
import './QuestionFormGroup.sass';

export default class QuestionFormGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: props.question,
      isOpen: true
    }
  }

  changeHandler = (event) => {
    console.log(event);
  }

  changeOpenState = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {

    const content =
      <div className="create-question__content">

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

    return (
      <div className="create-question">
        <div className="create-question__header">
          <h3 className="create-question__name">
            Вопрос №{this.props.index + 1}
          </h3>
          <Button
            onClick={ this.changeOpenState }
            size="small"
          >
            { this.state.isOpen ? 'Свернуть' : 'Развернуть' }
          </Button>
        </div>

        <SlideDown>

          { this.state.isOpen ? content : null }

        </SlideDown>

      </div>
    )
  }
}