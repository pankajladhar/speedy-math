const randomNumber = (min, max, times) => {
    let results = [];
    while (times > 0) {
      results.push(Math.round(Math.random() * (max - min) + min))
      --times
    }
    return results;
  }
  
  
  const generateQuestionData = () => {
    const questionData = randomNumber(0, 100, 2);
    const correctAnswerPostion = randomNumber(0, 4, 1)[0];
    const answers = randomNumber(0, 100, 3);
    const correctAnswer = questionData.reduce((acc, curr) => curr = acc + curr, 0);
    answers.splice(correctAnswerPostion, 0, correctAnswer)
  
    return {
      questionData: questionData,
      answers: answers,
      correctAnswerPostion: correctAnswerPostion,
      correctAnswer: correctAnswer
    }
  }
  
  
  export { generateQuestionData }
  