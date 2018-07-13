import Sort from './../Sort';

describe('Sort', () => {
    it('should return number array in ascending order', () => {
        const numbers = [10, 4, 6];
        expect(Sort(numbers)).toEqual([4, 6, 10])
    });

    it('should return number array in descending order', () => {
        const numbers = [10, 4, 6];
        expect(Sort(numbers, 'desc')).toEqual([10, 6 ,4])
    })
})