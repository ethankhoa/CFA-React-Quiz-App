import React, { Component } from 'react';
import './MultiChoice.css';
import { Button, ButtonToolbar } from 'react-bootstrap';


class MultiChoice extends Component {
  render() {
    return (
      <div> {/* onClick is also a prop */}
      <ButtonToolbar>
        {this.props.answers.map((answer, i) => <Button key={i} onClick={() => this.props.updateSelected(answer)}>{answer} </Button> )}
        </ButtonToolbar>
        <br />
        <p>You have selected: <b>{this.props.selectedAnswer}</b> </p>
        <br />
        <Button bsStyle="success" type="submit" onClick={this.props.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

export default MultiChoice;
