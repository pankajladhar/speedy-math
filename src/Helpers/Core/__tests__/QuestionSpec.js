import Question from './../Question';
const Number = require('./../../Number').default;

describe("Question", () => {
    describe("should return correct question string ", () => {
        it("when operator '+' and level 'single'", () => {
            Number.Random = jest.fn(() => [1, 2]);
            const results = Question("single", "+");
            expect(results.questionString).toEqual("1 + 2 = ___ ?")
            expect(results.correctAnswer).toEqual(3)
        });
        it("when operator '+' and level 'double'", () => {
            Number.Random = jest.fn(() => [11, 21]);
            const results = Question("single", "+");
            expect(results.questionString).toEqual("11 + 21 = ___ ?")
            expect(results.correctAnswer).toEqual(32)
        });
        it("when operator '+' and level 'triple'", () => {
            Number.Random = jest.fn(() => [111, 211]);
            const results = Question("single", "+");
            expect(results.questionString).toEqual("111 + 211 = ___ ?")
            expect(results.correctAnswer).toEqual(322)
        });
    });

    describe("should return correct question string ", () => {
        it("when operator '-' and level 'single'", () => {
            Number.Random = jest.fn(() => [1, 2]);
            const results = Question("single", "-");
            expect(results.questionString).toEqual("2 - 1 = ___ ?")
            expect(results.correctAnswer).toEqual(1)
        });
        it("when operator '-' and level 'double'", () => {
            Number.Random = jest.fn(() => [11, 21]);
            const results = Question("single", "-");
            expect(results.questionString).toEqual("21 - 11 = ___ ?")
            expect(results.correctAnswer).toEqual(10)
        });
        it("when operator '-' and level 'triple'", () => {
            Number.Random = jest.fn(() => [111, 211]);
            const results = Question("single", "-");
            expect(results.questionString).toEqual("211 - 111 = ___ ?")
            expect(results.correctAnswer).toEqual(100)
        });
    });

    describe("should return correct question string ", () => {
        it("when operator 'x' and level 'single'", () => {
            Number.Random = jest.fn(() => [3, 2]);
            const results = Question("single", "x");
            expect(results.questionString).toEqual("3 x 2 = ___ ?")
            expect(results.correctAnswer).toEqual(6)
        });
        it("when operator 'x' and level 'double'", () => {
            Number.Random = jest.fn(() => [11, 21]);
            const results = Question("single", "x");
            expect(results.questionString).toEqual("11 x 21 = ___ ?")
            expect(results.correctAnswer).toEqual(231)
        });
        it("when operator 'x' and level 'triple'", () => {
            Number.Random = jest.fn(() => [111, 211]);
            const results = Question("single", "x");
            expect(results.questionString).toEqual("111 x 211 = ___ ?")
            expect(results.correctAnswer).toEqual(23421)
        });
    });
})