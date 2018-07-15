import Question from './Question';
import Number from './../Number';

const getLevelName = (num) => {
    let level
    switch (num) {
        case 1:
            level = "single"
            break;
        case 2:
            level = "double"
            break;
        case 3:
            level = "triple"
            break;
    }
    return level
}

const QuestionData = (level, operator) => {
    if (level === "random") {
        level = getLevelName(Number.Random(1, 3, 1)[0]);
    }
    const result = Question(level, operator)
    const correctAnswerPostion = Number.Random(0, 4, 1)[0];
    const correctAndLength = result.correctAnswer.toString().length;
    const answers = Number.RandomWithSize(correctAndLength, 3, result.correctAnswer);
    answers.splice(correctAnswerPostion, 0, result.correctAnswer)

    return {
        question: result.questionString,
        answers: answers,
        correctAnswer: result.correctAnswer
    }
}

export default QuestionData;