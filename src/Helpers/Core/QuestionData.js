import Question from './Question';
import Number from './../Number';

const obj = {
    "single": [1, 9],
    "double": [10, 99],
    "triple": [100, 999],
}

const QuestionData = (level, operator) => {
    const result = Question(level, operator)
    const correctAnswerPostion = Number.Random(0, 4, 1)[0];
    const answers = Number.Random(...obj[level], 3);
    answers.splice(correctAnswerPostion, 0, result.correctAnswer)

    return {
        question: result.questionString,
        answers: answers,
        correctAnswer: result.correctAnswer
    }
}

export default QuestionData;