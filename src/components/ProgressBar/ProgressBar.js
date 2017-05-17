// import React, { Component } from 'react';
import React from 'react';
// import React, { Component }, React.Component from 'react';
import './ProgressBar.css';
import PropTypes from 'prop-types';

// class ProgressBar extends Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.current_step}/{this.props.question_length}</p>
//       </div>
//     );
//   }
// }

// Stateless component
// Writing component as a function
// doesn't need render since isn't stateful just returns inputs
const ProgressBar = (props) => {
  return <p>{props.current_step}/{props.question_length}</p>
}

ProgressBar.propTypes = {
  current_step: PropTypes.number,
  question_length: PropTypes.number
}

export default ProgressBar;
