const RandomWithSize = (size, frequency, correctAns) => {
    let results = [];
    while (frequency > 0) {
        let num = Math.round(Math.random() * Math.pow(10, size));
        let check = num.toString().length === size && !results.includes(num) && num !==correctAns
         if (check) {
             results.push(num)
             --frequency;
         }
     }
    return results
}

export default RandomWithSize;