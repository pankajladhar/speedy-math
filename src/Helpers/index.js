const randomNumber = (min, max, times) => {
  let results = [];
  while (times > 0) {
    results.push(Math.round(Math.random() * (max - min) + min))
    --times
  }
  return results;
}

const getCorrectAnswer = (operand, nums) => {
  let correctAnswer;
  switch (operand) {
    case "+":
      correctAnswer = nums.reduce((acc, curr) => curr = acc + curr, 0)
      break;
    case "x":
      correctAnswer = nums.reduce((acc, curr) => curr = acc * curr, 1)
      break;
  }
  return correctAnswer
}

const generateQuestionData = (operand) => {
  const questionData = randomNumber(0, 100, 2);
  const correctAnswerPostion = randomNumber(0, 4, 1)[0];
  const answers = randomNumber(0, 100, 3);
  const correctAnswer = getCorrectAnswer(operand, questionData)
  console.log("correctAnswer", correctAnswer)
  answers.splice(correctAnswerPostion, 0, correctAnswer)

  return {
    questionData: questionData,
    answers: answers,
    correctAnswerPostion: correctAnswerPostion,
    correctAnswer: correctAnswer
  }
}


export { generateQuestionData }
