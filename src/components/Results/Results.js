import React, { Component } from 'react';
import './Results.css';
import { Button } from 'react-bootstrap';


class Results extends Component {
  render() {
    return (
      <div class="App">
        <h3>{this.props.end_message}</h3>
        <p>Your score was: {this.props.score}</p>
        <Button bsStyle="primary" onClick={this.props.restartQuiz}>Retry</Button>
      </div>
    )
  }
}

export default Results;
