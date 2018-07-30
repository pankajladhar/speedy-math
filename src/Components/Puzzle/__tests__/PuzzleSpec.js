import React from 'react';
import renderer from 'react-test-renderer';
import Puzzle from './../index';

describe('Puzzle', () => {
    it('renders correctly', () => {
        const puzzleProps = {
            data: {
                question: "Sample question ?",
                answers: [1, 5, 8, 9]
            },
            handleClick: jest.fn()
        }
        let tree = renderer.create(
            <Puzzle {...puzzleProps}/>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});