import React, { Component } from 'react';
import './Question.css';
import PropTypes from 'prop-types';


class Question extends Component {
  render() {
    return <h4>{this.props.current_question}</h4>
  }
}

Question.PropTypes = {
  current_question: PropTypes.string.isRequired
}

export default Question;
