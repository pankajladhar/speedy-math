import Random from './Random';

const getComparator = (num) => {
    let comparator;
    const d = Math.ceil(num / 3);

    switch (d) {
        case 1:
            comparator = "<"
            break;
        case 2:
            comparator = "="
            break;
        case 3:
            comparator = ">"
            break;
    }
    return comparator;
}

const RandomComparator = (frequency, correctAns) => {
    let results = [];
    while (frequency > 0) {
        let comp = getComparator(Random(1, 9, 1));
        let check = !results.includes(comp)
        if (check) {
            results.push(comp)
            --frequency;
        }
    }
    var index = results.indexOf(correctAns);
    if (~index) {
        results[index] = "None";
    }
    return results

}

export default RandomComparator;