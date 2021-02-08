import React from 'react';

export default class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = { test: 
      {
        title: '',
        description: '',
        image: null,
        questions: [{
          title: '',
          image: '',
          answers: [
            {
              text: '',
              isCorrect: false
            }
          ],
        }],
        results: {
          goodResult: {
            image: null,
            description: ''
          },
          badResult: {
            image: null,
            description: ''
          }
        }
      }
    }
  }

  render() {
    return (
      <div className="create">
        <h1 className="create__heading"> Create </h1>
        <form className="create__form">
          <div className="create__form-group">
            <label htmlFor="test-title"></label>
            <input
              type="text"
              id="test-title"
              className="create__input input input__text"
            />
          </div>
          <div className="create__form-group">
            <label htmlFor="test-description"></label>
            <textarea
              type="text"
              id="test-description"
              className="create__input input input__textarea"
            ></textarea>
          </div>
          <div className="create__form-group">
            <label htmlFor="test-image"></label>
            <input
              type="file"
              id="test-image"
              className="create__input input input__image"
            />
          </div>
          <hr/>

          <h2 className="create__form-text"></h2>

          {
            this.state.test.questions.map((question, index) => (
              <div className="create__form-group" key={ `${index}` }>
                <label htmlFor={ `test-image-${index}` }></label>
                <input
                  type="file"
                  id={ `test-image-${index}` }
                  className="create__input input input__image"
                />
              </div>
            ))
          }

        </form>
      </div>
    )
  }
}
