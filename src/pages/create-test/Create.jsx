import React from 'react';
import QuestionFormGroup from './components/question-form-group/QuestionFormGroup';
import TestFormGroup from './components/test-form-group/TestFormGroup';
import Button from 'shared/components/button/Button';
import initialTestState from './fixtures';
import './Create.sass';

export default class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = { test: initialTestState };
  }

  render() {
    return (
      <div className="create">
        <h1 className="create__heading"> Создайте свой тест! </h1>
        <form className="create__form">
          <TestFormGroup />

          <div className="create__form-devider"></div>

          <h2 className="create__form-text">Вопросы:</h2>

          <div className="create__form-devider"></div>

          {
            this.state.test.questions.map((question, index) => (
              <QuestionFormGroup index={ index } question={ question } key={`${index}`} />
            ))
          }

        <Button> Добавить вопрос </Button>

        </form>
      </div>
    )
  }
}
