import {classnames, scopedClass} from '../classnames'


describe('classnames', () => {
  it('验证无个参数', () => {
    const classes = classnames('')
    expect(classes).toEqual('')
  });
  it('验证一个参数', () => {
    const classes = classnames('a')
    expect(classes).toEqual('a')
  });
  it('验证多个参数', () => {
    const classes = classnames('a', 'b', undefined, null, 'c')
    expect(classes).toEqual('a b c')
  });
  it('验证传入参数形式', () => {
    const classes = classnames('a', 'v test 测试')
    expect(classes).toEqual('a v test 测试')
  });
});

describe('scopedClass', () => {
    it('验证参数为空字符', () => {
        const sc = scopedClass('wtf-test')
        const classes = sc('')
        expect(classes).toEqual('wtf-test')
    });

    it('验证参数为string', () => {
        const sc = scopedClass('wtf-test2')
        const classes = sc('a')
        expect(classes).toEqual('wtf-test2-a')
    });


    it('验证参数为object', () => {
        const sc = scopedClass('wtf-test3')
        const classes = sc({'a': true, 'b': true, 'c': false})
        expect(classes).toEqual('wtf-test3-a wtf-test3-b' )
    });


    it('验证额外的className', () => {
        const sc = scopedClass('wtf-test3')
        const classes = sc({'a': true, 'b': true, 'c': false}, 'extra')
        expect(classes).toEqual('wtf-test3-a wtf-test3-b extra' )
    });
});

