import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button';
import {mount} from 'enzyme';

describe('按钮测试', () => {
  it('普通模式', () => {
    const tree = renderer
      .create(<Button className="test">测试</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('带icon', () => {
    const tree = renderer
      .create(<Button className="test" icon="add">测试</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('icon位置测试', () => {
    const tree = renderer
      .create(<Button className="test" icon="add" iconPosition="right">测试</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it('按钮点击测试', () => {
  //   const fn = jest.fn()
  //   const wrapper = mount(<Button icon="add" onClick={fn}/>);
  //   wrapper.find('svg').simulate('click')
  //   expect(fn).toBeCalled();
  // });
});


