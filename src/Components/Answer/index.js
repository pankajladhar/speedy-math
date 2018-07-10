import React, { Component } from 'react';
import './Answer.css';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.props.handleClick(this.props.value)
  }

  render() {
    const { value, currentIndex } = this.props;
    return (
      <div className="Answer">
        <button className="Answer--Btn" onClick={this.handleClick}>
          <span>{currentIndex}) </span> {value}
        </button>
      </div>
    )
  }
}

export default Answer;