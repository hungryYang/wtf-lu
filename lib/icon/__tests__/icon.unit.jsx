import Icon from '../icon';
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

describe('Icon测试', () => {
  it('测试Icon', () => {
    const tree = renderer
      .create(<Icon name="add"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('测试Icon点击', () => {
    const fn = jest.fn()
    const wrapper = mount(<Icon name="add" onClick={fn}/>);
    wrapper.find('svg').simulate('click')
    expect(fn).toBeCalled();
  });
});
