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
                <h2>Correct {this.state.rightAnswers} --- Wrong  {this.state.wrongAnswers}</h2>
                <Puzzle
                    handleClick={this.handleClick}
                    data={this.state.data} />
            </div>
        );
    }
}

export default Quiz