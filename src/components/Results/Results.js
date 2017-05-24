import React, { Component } from 'react';
import './Results.css';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';



class Results extends Component {
  render() {
    return (
      <div className="App-content">
        <ReactTooltip data-event="onload" type="success" effect="solid" delayShow={1}/>
        <h3>{this.props.end_message}</h3>
        <br />
        <h4>Your score was: {this.props.score} out of {this.props.total}</h4>
        <br />
        <Button data-tip="Click me to restart the quiz!" bsStyle="primary" onClick={this.props.restartQuiz}>Retry</Button>
      </div>
    )
  }
}

Results.propTypes = {
  end_message: PropTypes.string,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func
}

Results.defaultProps = {
  end_message: "You have completed the quiz!",
  score: 0
}

export default Results;
