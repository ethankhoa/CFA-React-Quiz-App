import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Question from '../Question/Question';
import ProgressBar from '../ProgressBar/ProgressBar';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';
import { Well, PageHeader } from 'react-bootstrap';
import Progress from 'react-progressbar';



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
    this.restartQuiz = this.restartQuiz.bind(this);
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

  restartQuiz() {
    this.setState({
      progress: 0,
      selected: 'None yet!',
      score: 0
    })
  }



  render() {
    let quizComplete = ((this.state.progress + 1)/this.quiz_data.length) * 100;
    return (
      <div>
        <Well bsSize="large">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <PageHeader>Seinfeld Quiz App
          <p>
          <small>
            How well do you know your Seinfeld trivia?
          </small>
          </p>
        </PageHeader>
        {/* <h2 className="App-header">Seinfeld Quiz App</h2> */}
        <br />
        {this.state.progress < this.quiz_data.length ? (
          <div className="App-content">
            <Question current_question={this.quiz_data[this.state.progress].question} />
            <Progress completed={quizComplete} />
            <ProgressBar current_step={this.state.progress + 1}
              question_length={this.quiz_data.length} />
            <MultiChoice answers={this.quiz_data[this.state.progress].possible_answers}
            updateSelected={this.updateSelected} handleSubmit={this.submitAnswer}
            selectedAnswer={this.state.selected} />
          </div>
        )
        : (
          <Results total={this.quiz_data.length} score={this.state.score} end_message="Congrats! You're done!" restartQuiz={this.restartQuiz} />
        )}
        </Well>
      </div>
    );
  }
}

export default App;
