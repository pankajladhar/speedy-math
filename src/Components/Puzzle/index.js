import React, { Component } from 'react';
import Answer from './../Answer';
import PropTypes from 'prop-types';
import './Puzzle.css';

class Puzzle extends Component {
  render() {
    const { data, handleClick } = this.props
    return (
      <div className="Puzzle">
        <h1 className="Puzzle__Statement">
          {data.question}
        </h1>
        <div className="Puzzle__Answers">
          {data.answers.map((answer, i) => {
            return (
              <Answer
                currentIndex={i + 1}
                key={`${answer}-${i}`}
                value={answer}
                handleClick={handleClick}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

Puzzle.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Puzzle;