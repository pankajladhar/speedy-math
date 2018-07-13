const Random = (min, max, frequency=2) => {
    let results = [];
    while (frequency > 0) {
        results.push(Math.round(Math.random() * (max - min) + min))
        --frequency
    }
    return results;
}

export default Random;