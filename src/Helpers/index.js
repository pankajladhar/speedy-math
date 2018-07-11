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
    case "-":
      correctAnswer = nums.reduce((acc, curr) => Math.abs(curr = curr - acc), 0)
      break;
    case "/":
      const remainder = ~~(nums[0] / nums[1]);
      const quotient = ~~(nums[0] / nums[1]);
      correctAnswer = `${quotient} Quotient and ${remainder} remainder`
      break;
  }
  return correctAnswer
}

const generateQuestionData = (operand) => {
  let questionData = randomNumber(0, 100, 2);
  if (operand === "-" || operand === "/") {
    questionData = questionData.sort((a, b) => b - a)
  }
  const correctAnswerPostion = randomNumber(0, 4, 1)[0];
  const answers = randomNumber(0, 100, 3);
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
