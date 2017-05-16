import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
    this.quiz_data = [
      {
        question: 'What is the name of the diner/restaurant?',
        correct_answer: 'Monks',
        possible_answers: ['Monks Diner', 'Monks Restraurant']
      },
      {
        question: "What is the name of George's ficticious latex company?",
        correct_answer: 'Vandelay Industries',
        possible_answers: ['Vandelay', 'Vandelay Industry']
      }
    ]
  }

  render() {
    return (
      <div>
        <h2>Seinfeld Quiz App</h2>
        <Question current_question={this.quiz_data[this.state.progress].question} />
      </div>
    );
  }
}

export default App;
