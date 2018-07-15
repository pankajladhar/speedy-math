import Number from './Number';


const generateQuestionData = (operand) => {
  let questionData = Number.Random(0, 100, 2);
  if (operand === "-" || operand === "/") {
    questionData = Number.Sort(questionData, 'desc')
  }
  const correctAnswerPostion = Number.Random(0, 4, 1)[0];
  const answers = Number.Random(0, 100, 3);
  const correctAnswer = getCorrectAnswer(operand, questionData)
  answers.splice(correctAnswerPostion, 0, correctAnswer)

  return {
    questionData: questionData,
    answers: answers,
    correctAnswerPostion: correctAnswerPostion,
    correctAnswer: correctAnswer
  }
}


export { generateQuestionData }
