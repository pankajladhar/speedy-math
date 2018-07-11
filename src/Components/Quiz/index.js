import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Puzzle from './../Puzzle';
import { generateQuestionData } from './../../Helpers';
import './Quiz.css';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: generateQuestionData(),
            rightAnswers: 0,
            wrongAnswers: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(val) {
        if (val === this.state.data.correctAnswer) {
            this.setState({
                rightAnswers: this.state.rightAnswers + 1
            })
        } else {
            this.setState({
                wrongAnswers: this.state.wrongAnswers + 1
            })
        }
        this.setState({
            data: generateQuestionData()
        })
    }

    render() {
        return (
            <div className="App">
                <div className="PuzzleContainer">
                    <div className="Results">
                        <div className="Results__Correct">
                            Correct <span>{this.state.rightAnswers}</span>
                        </div>
                        <div className="Results__Incorrect">
                            Wrong <span>{this.state.wrongAnswers}</span>
                        </div>
                    </div>
                    <Puzzle
                        operand={this.props.operand}
                        handleClick={this.handleClick}
                        data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default Quiz