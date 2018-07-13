import Algorithm from './../../Data/Algorithm'; 

const obj = {
    "single" : [1,9],
    "double" : [1,],
    "triple" : [],
}

const Question = (level, operand="ADDITION") => {
    const coreAlgo = Algorithm[operand];
    console.log(coreAlgo)
}

export default Question