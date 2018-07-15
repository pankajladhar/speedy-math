const RandomWithSize = (size, frequency, correctAns) => {
    let results = [];
    while (frequency > 0) {
        let num = Math.round(Math.random() * Math.pow(10, size));
        if (num.toString().length === size && !results.includes(num) && !results.includes(correctAns)) {
            results.push(num)
            --frequency;
        }
    }
    return results
}

export default RandomWithSize;