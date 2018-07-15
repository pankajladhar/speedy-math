import Number from './../Number';

const obj = {
    "single": [1, 9],
    "double": [10, 99],
    "triple": [100, 999]
}


const getCorrectAnswer = (operator, nums) => {
    let correctAnswer;
    switch (operator) {
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

const Question = (level, operator) => {
    let operands = Number.Random(...obj[level], 2);
    if (operator === "-" || operator === "/") {
        operands = Number.Sort(operands, 'desc')
    }
    return {
        questionString: `What is ${operands[0]} ${operator} ${operands[1]} ?`,
        correctAnswer: getCorrectAnswer(operator, operands)
    }
}

export default Question