import React from 'react';
import AnswerFormGroup from '../answer-form-group/AnswerFormGroup';
import './QuestionFormGroup.sass';

export default (props) => {
  return (
    <>
      <div className="create__form-group">
        <label htmlFor={ `question-image-${props.index}` }></label>
        <input
          type="text"
          id={ `question-image-${props.index}` }
          className="create__input input input--text"
        />
      </div>
      <div className="create__form-group">
        <label htmlFor={ `test-description-${props.index}` }></label>
        <textarea
          type="text"
          id={ `test-description-${props.index}` }
          className="create__input input input--textarea"
        ></textarea>
      </div>
      <div className="create__form-group">
        <label htmlFor={ `question-image-${props.index}` }></label>
        <input
          type="file"
          id={ `question-image-${props.index}` }
          className="create__input input input--image"
        />
      </div>
      <div className="create__form-group">
        <label htmlFor={`question-time${props.index}`}></label>
        <input
          type="number"
          id={`question-time${props.index}`}
          className="create__input input input--number"
        />
      </div>
      <h2 className="create__form-text">Варианты ответов:</h2>

        {
          props.question.answers.map((answer, index) => (
            <AnswerFormGroup index={ index } questionIndex={ props.index } answer={ answer } key={ `${index}` }/>
          ))
        }
    </>
  )
}