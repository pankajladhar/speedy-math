import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Answer from './../index';

describe('Answer', () => {
    let answerProps;
    beforeEach(() => {
        answerProps = {
            value: 12,
            currentIndex: 1,
            handleClick: jest.fn()
        };
    })
    it('renders correctly', () => {
        let tree = renderer.create(
            <Answer {...answerProps} />
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('click should call passedin click handler', () => {
        let mockClickHandler = jest.fn();
        answerProps.handleClick = mockClickHandler;
        let wrapper = shallow(<Answer {...answerProps} />);
        let elm = wrapper.find('.Answer--Btn')
        elm.simulate("click");
        expect(mockClickHandler).toHaveBeenCalled()
    })
});