const Random = (min, max, frequency=2) => {
    let results = [];
    while (frequency > 0) {
        let num = Math.round(Math.random() * (max - min) + min);
        if(!results.includes(num)) {
            results.push(num)
            --frequency
        }
    }
    return results;
}

export default Random;