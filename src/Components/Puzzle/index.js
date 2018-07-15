import React, { Component } from 'react';
import Answer from './../Answer';
import './Puzzle.css';

class Puzzle extends Component {
  constructor(props) {
    super(props);
  }

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

export default Puzzle;