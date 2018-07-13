const Sort = (numbers, order) => {
    if (order === 'desc') {
        return numbers.sort((a, b) => b - a)
    }
    return numbers.sort((a, b) => a - b)
}

export default Sort;