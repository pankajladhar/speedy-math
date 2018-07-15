import Question from './../Question';
const Number = require('./../../Number').default;

describe("Question", () => {
    describe("should return correct question string ", () => {
        it("when operator '+' and level 'single'", () => {
            Number.Random = jest.fn(() => [1, 2]);
            const results = Question("single", "+");
            expect(results.questionString).toEqual("What is 1 + 2 ?")
            expect(results.correctAnswer).toEqual(3)
        });
        it("when operator '+' and level 'double'", () => {
            Number.Random = jest.fn(() => [11, 21]);
            const results = Question("single", "+");
            expect(results.questionString).toEqual("What is 11 + 21 ?")
            expect(results.correctAnswer).toEqual(32)
        });
        it("when operator '+' and level 'triple'", () => {
            Number.Random = jest.fn(() => [111, 211]);
            const results = Question("single", "+");
            expect(results.questionString).toEqual("What is 111 + 211 ?")
            expect(results.correctAnswer).toEqual(322)
        });
    });

    describe("should return correct question string ", () => {
        it("when operator '-' and level 'single'", () => {
            Number.Random = jest.fn(() => [1, 2]);
            const results = Question("single", "-");
            expect(results.questionString).toEqual("What is 2 - 1 ?")
            expect(results.correctAnswer).toEqual(1)
        });
        it("when operator '-' and level 'double'", () => {
            Number.Random = jest.fn(() => [11, 21]);
            const results = Question("single", "-");
            expect(results.questionString).toEqual("What is 21 - 11 ?")
            expect(results.correctAnswer).toEqual(10)
        });
        it("when operator '-' and level 'triple'", () => {
            Number.Random = jest.fn(() => [111, 211]);
            const results = Question("single", "-");
            expect(results.questionString).toEqual("What is 211 - 111 ?")
            expect(results.correctAnswer).toEqual(100)
        });
    });

    describe("should return correct question string ", () => {
        it("when operator 'x' and level 'single'", () => {
            Number.Random = jest.fn(() => [3, 2]);
            const results = Question("single", "x");
            expect(results.questionString).toEqual("What is 3 x 2 ?")
            expect(results.correctAnswer).toEqual(6)
        });
        it("when operator 'x' and level 'double'", () => {
            Number.Random = jest.fn(() => [11, 21]);
            const results = Question("single", "x");
            expect(results.questionString).toEqual("What is 11 x 21 ?")
            expect(results.correctAnswer).toEqual(231)
        });
        it("when operator 'x' and level 'triple'", () => {
            Number.Random = jest.fn(() => [111, 211]);
            const results = Question("single", "x");
            expect(results.questionString).toEqual("What is 111 x 211 ?")
            expect(results.correctAnswer).toEqual(23421)
        });
    });
})