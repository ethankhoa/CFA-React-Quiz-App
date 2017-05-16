import React, { Component } from 'react';
import './Results.css';
import { Button } from 'react-bootstrap';


class Results extends Component {
  render() {
    return (
      <div className="App-content">
        <h3>{this.props.end_message}</h3>
        <br />
        <h4>Your score was: {this.props.score} out of {this.props.total}</h4>
        <br />
        <Button bsStyle="primary" onClick={this.props.restartQuiz}>Retry</Button>
      </div>
    )
  }
}

export default Results;
