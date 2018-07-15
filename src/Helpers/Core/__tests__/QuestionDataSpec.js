import QuestionData from './../QuestionData';
let Question = require('./../Question').default;

xdescribe('QuestionData', () => {
    it('should generate proper data when operator is \'+\' and level is \'single\'', () => {
        Question = jest.fn(() => {
            return {
                questionString: `What is 1 + 2 ?`,
                correctAnswer: 3
            }
        })
        const results = QuestionData("single", "+");
        expect(results.question).toEqual("What is 1 + 2 ?")
        expect(results.answers.length).toEqual(4)
        console.log(QuestionData("single", "+"))
    })
})