import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question';
import ProgressBar from './ProgressBar';
import MultiChoice from './MultiChoice';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0
    };
    this.updateSelected = this.updateSelected.bind(this); // bind to allow access in child
    this.submitAnswer = this.submitAnswer.bind(this);
    this.quiz_data = [
      {
        question: "What is the name of the diner/restaurant?",
        correct_answer: "Monks",
        possible_answers: ["Monks", "Bob's Diner", "Mendy's"]
      },
      {
        question: "What is the name of George's ficticious latex company?",
        correct_answer: "Vandelay Industries",
        possible_answers: ["Marine Biology Institute", "Vandelay Industries", "Putumayo"]
      },
      {
        question: "Who is the famous actor that 'owned' George's used LeBaron?",
        correct_answer: "Jon Voight",
        possible_answers: ["Keith Hernandez", "Jon Voight", "Bette Midler"]
      }
    ]
  }

  submitAnswer() {
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress +1,
        selected: 'Not yet!'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1
      })
    }
  }


  updateSelected(answer) {
    this.setState({ // () because function {} because passing object
      selected: answer
    })
  }

  render() {
    return (
      <div>
        <h2>Seinfeld Quiz App</h2>
        <Question current_question={this.quiz_data[this.state.progress].question} /> {/* current_step, question_length are all props */}
        <ProgressBar current_step={this.state.progress + 1}
          question_length={this.quiz_data.length} />
        <MultiChoice answers={this.quiz_data[this.state.progress].possible_answers}
        updateSelected={this.updateSelected} handleSubmit={this.submitAnswer}
        selectedAnswer={this.state.selected} />
      </div>
    );
  }
}

export default App;
