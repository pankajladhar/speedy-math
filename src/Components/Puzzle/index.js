import React, { Component } from 'react';
import Answer from './../Answer';
import './Puzzle.css';

class Puzzle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, handleClick, speechSynthesisSupported } = this.props
    return (
      <div className="PuzzleContainer">
        <div className="Puzzle">
          <h1 className="Puzzle__Statement">
            What is {data.questionData[0]} + {data.questionData[1]} ?
          </h1>
          <div className="Puzzle__Answers">
            {data.answers.map((answer, i) => {
              return (
                <Answer
                  currentIndex={i+1}
                  key={`${answer}-${i}`}
                  value={answer}
                  speechSynthesisSupported={speechSynthesisSupported}
                  handleClick={handleClick}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Puzzle;