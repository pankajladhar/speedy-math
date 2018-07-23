import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter} from 'react-router-dom'
// import { shallow, render } from 'enzyme';
import Categories from './../index';

describe('Categories', () => {
    it('renders correctly', () => {
        let tree = renderer.create(
            <StaticRouter location="someLocation" context={{}}>
                <Categories  />
            </StaticRouter>
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});