import Number from './../Number';

const obj = {
    "single": [1, 9],
    "double": [10, 99],
    "triple": [100, 999]
}

const getCorrectAnswerForComparision = (nums) => {
    if(nums[0] === nums[1]) {
        return "="
    } else if(nums[0] > nums[1]) {
        return ">"
    } else if(nums[0] < nums[1]) {
        return "<"
    }
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
        case "___":
            correctAnswer = getCorrectAnswerForComparision(nums)
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
    let operands = Number.Random(...obj[level], 2, operator);
    if (operator === "-" || operator === "/") {
        operands = Number.Sort(operands, 'desc')
    }
    return {
        questionString: `${operands[0]} ${operator} ${operands[1]} = ___ ?`,
        correctAnswer: getCorrectAnswer(operator, operands)
    }
}

export default Question