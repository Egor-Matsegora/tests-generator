import React from 'react';
import './AnswerFormGroup.sass';

export default (props) => {

  return (
    <>
      <div className="create__form-group">
        <label htmlFor={ `answer-text-${props.index}-${props.questionIndex}` }></label>
        <input
          type="text"
          id={ `answer-text-${props.index}-${props.questionIndex}` }
          className="create__input input input--text"
        />
      </div>
      <div className="create__form-group">
        <label htmlFor={ `answer-correct-${props.index}-${props.questionIndex}` }></label>
        <input
          type="radio"
          id={ `answer-correct-${props.index}-${props.questionIndex}` }
          className="create__input input input--radio"
        />
      </div>
    </>
  );
}