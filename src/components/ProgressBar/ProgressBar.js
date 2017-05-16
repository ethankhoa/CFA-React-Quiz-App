import React, { Component } from 'react';
import './ProgressBar.css';


class ProgressBar extends Component {
  render() {
    return (
      <div>
        <p>{this.props.current_step}/{this.props.question_length}</p>
      </div>
    );
  }
}

export default ProgressBar;
