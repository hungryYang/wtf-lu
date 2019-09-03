import Button from '../button';
import React from 'react';
import renderer from 'react-test-renderer';

describe('test', () => {
    it('test', () => {
        const tree = renderer
            .create(<Button />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
