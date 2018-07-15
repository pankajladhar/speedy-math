import Question from './Question';
import Number from './../Number';

const obj = {
    "single": [1, 9],
    "double": [10, 99],
    "triple": [100, 999]
}

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
        console.log("ran", Number.Random(1, 3, 1)[0])
        level = getLevelName(Number.Random(1, 3, 1)[0]);
    }
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