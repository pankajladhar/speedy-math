const Random = (min, max, frequency=2, operator) => {
    let results = [];
    while (frequency > 0) {
        let num = Math.round(Math.random() * (max - min) + min);
        /* Allow duplicate number for comparision */
        if(operator=== "___") {
            results.push(num)
            --frequency
        }
        else if(!results.includes(num)) {
            results.push(num)
            --frequency
        }
    }
    return results;
}

export default Random;