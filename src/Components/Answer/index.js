import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <button onTouchStart={()=>{}} className="Answer--Btn" onClick={this.handleClick}>
          <span>{currentIndex}) </span> {value}
        </button>
      </div>
    )
  }
}

Answer.propTypes = {
  value: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Answer;