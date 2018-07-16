import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Puzzle from './../Puzzle';
import QuestionData from './../../Helpers/Core/QuestionData';
import './Quiz.css';

class Quiz extends Component {
    constructor(props) {
        console.log("i am here")
        super(props);

        this.state = {
            counter: 1,
            level: "single",
            data: QuestionData("single", this.props.operator),
            rightAnswers: 0,
            wrongAnswers: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.setLevel = this.setLevel.bind(this);
    }

    setLevel(value) {
        if (value > 5 && value <= 15) {
            this.setState({
                level: "double"
            })
        } else if (value > 15 && value <= 25) {
            this.setState({
                level: "triple"
            })
        } else {
            this.setState({
                level: "random"
            })
        }
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
            counter: this.state.counter + 1,
            data: QuestionData(this.state.level, this.props.operator)
        }, () => {
            this.state.counter > 5 && this.setLevel(this.state.counter)
        })
    }

    render() {
        return (
            <div className="App">
                <div className="PuzzleContainer">
                    <div className="Results">
                        <div className="Results__Correct">
                            <span className="Results__Symbol--Correct">&#10004;</span>
                            <span className="Results__Count">{this.state.rightAnswers}</span>
                        </div>
                        <div className="Results__Incorrect">
                            <span className="Results__Symbol--Incorrect">&#x2718;</span>
                            <span className="Results__Count">{this.state.wrongAnswers}</span>
                        </div>
                    </div>
                    <Puzzle
                        handleClick={this.handleClick}
                        data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default Quiz