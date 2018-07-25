import Random from './../Random';

describe('Random', () => {
    it('should generate 1 random number within range', () =>{
        const numbers = Random(1, 9, 1)
        expect(numbers.length).toEqual(1)
        expect(numbers[0]).toBeGreaterThanOrEqual(1);
        expect(numbers[0]).toBeLessThanOrEqual(9);
    });

    it('should generate 2 random number within range', () =>{
        const numbers = Random(10, 99, 2);
        expect(numbers.length).toEqual(2);
        expect(numbers[0]).toBeGreaterThanOrEqual(10);
        expect(numbers[0]).toBeLessThanOrEqual(99);

        expect(numbers[0]).toBeGreaterThanOrEqual(10);
        expect(numbers[0]).toBeLessThanOrEqual(99);
    })

    it('should generate 2 random number within range when operator "___" is passed ', () =>{
        const numbers = Random(10, 99, 2);
        expect(numbers.length).toEqual(2);
        expect(numbers[0]).toBeGreaterThanOrEqual(10);
        expect(numbers[0]).toBeLessThanOrEqual(99);

        expect(numbers[0]).toBeGreaterThanOrEqual(10);
        expect(numbers[0]).toBeLessThanOrEqual(99);
    })
})