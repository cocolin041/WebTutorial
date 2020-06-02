import React from 'react';
import './App.css';
import { subscribeToAnswer, subscribeToQuestions, generateQuestion, answerQuestion } from '../src/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      question: "Waiting for a question...",
      score: ''
    };
  }

  componentDidMount() {
    subscribeToQuestions(question => {
      this.setState({ question: question });
    });

    subscribeToAnswer(score => {
      this.setState({ score: score });
    });
  }

  render() {
  return (
    <div className="App">
      <h1>Let's have a test here</h1>
      <div className="App-question">
        <button onClick={generateQuestion}>Generate a question!</button>
        <div>{this.state.question}</div>
      </div>
      <div className="App-answer">
        <h3>Answer here:</h3>
          <button onClick={() => answerQuestion('A')} >A</button>
          <button onClick={() => answerQuestion('B')} >B</button>
          <button onClick={() => answerQuestion('C')} >C</button>
          <button onClick={() => answerQuestion('D')} >D</button>
          <button onClick={() => answerQuestion('E')} >E</button>
      </div>
      <div className="App-result">
        <h3>Result: </h3>
        <span>{this.state.score}</span>
      </div>
    </div>
  );
  }
}
export default App;
