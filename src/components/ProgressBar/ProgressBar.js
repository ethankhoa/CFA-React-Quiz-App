import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {
  render() {
    return <p>{this.props.current_step}/{this.props.question_length}</p>
  }
}

export default ProgressBar;
