import QuestionData from './../QuestionData';
import Question from './../Question';

jest.mock('../Question');
Question.mockImplementation(() => {
    return {
        questionString: `What is 1 + 2 ?`,
        correctAnswer: 3
    }
});

describe('QuestionData', () => {
    it('should generate proper data when operator is \'+\' and level is \'single\'', () => {  
        const results = QuestionData("single", "+");
        expect(results.question).toEqual("What is 1 + 2 ?")
        expect(results.answers.length).toEqual(4)
        expect(results.correctAnswer).toEqual(3)
    })

    it('should generate proper data when operator is \'+\' and level is \'random\'', () => {  
        const results = QuestionData("random", "+");
        expect(results.question).toEqual("What is 1 + 2 ?")
        expect(results.answers.length).toEqual(4)
        expect(results.correctAnswer).toEqual(3)
    })
})