import React from 'react';
import QuestionFormGroup from './components/question-form-group/QuestionFormGroup';
import TestFormGroup from './components/test-form-group/TestFormGroup';
import initialTestState from './fixtures';

export default class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = { test: initialTestState };
  }

  render() {
    return (
      <div className="create">
        <h1 className="create__heading"> Create </h1>
        <form className="create__form">
          <TestFormGroup />
          <hr/>

          <h2 className="create__form-text">Вопросы</h2>

          {
            this.state.test.questions.map((question, index) => (
              <QuestionFormGroup index={ index } question={ question } key={`${index}`} />
            ))
          }

          <button type="button" className="create__add-question btn btn--secondary">
            Добавить Вопрос
          </button>

        </form>
      </div>
    )
  }
}
