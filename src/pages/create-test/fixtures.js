const initialTestState = {
  title: '',
  description: '',
  image: null,
  questions: [
    {
      title: '',
      image: '',
      description: '',
      time: null,
      answers: [
        {
          id: null,
          title: '',
          description: '',
          image: null,
          isCorrect: false
        },
        {
          id: null,
          title: '',
          description: '',
          image: null,
          isCorrect: true
        }
      ],
    }
  ],
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

export default initialTestState;