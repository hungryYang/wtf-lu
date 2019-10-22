import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button/button';
import Icon from './icon/icon';
import ButtonGroup from './button/buttonGroup';
import Dialog, {Confirm} from './dialog/dialog';
import LayoutExample from './layout/example';
import MessageExample from './message/example';

class Demo extends React.Component {
    state = {
        loading: false,
        visible: false
    };
    handlerClick = () => {
        this.setState({
            loading: true
        });
    };

    handlerClick2 = () => {
        this.setState({
            visible: !this.state.visible
        });
    };

    handlerClick3 = () => {
        const close = Confirm({
            content: <h1>1111 <Button onClick={() => close()}>ok</Button></h1>,
            onYes: () => {console.log('yes');},
            onNo: () => {console.log('no');}
        });
    };

    render() {
        const {loading} = this.state;
        return (
            <div>
                <MessageExample />
                <Button icon="up" className="j">测试1</Button>
                <Button icon="edit" onClick={this.handlerClick} className="j" loading={loading}>loading按钮</Button>
                <ButtonGroup>
                    <Button icon="left" className="left">left</Button>
                    <Button className="middle">middle</Button>
                    <Button icon="right" iconPosition="right" className="right">right</Button>
                </ButtonGroup>
                <Icon name="add"/>

                <Icon name="right" className="test-icon test-icon-2"/>
                <Icon name="loading" className="test-icon test-icon-2"/>
                <Button onClick={this.handlerClick2}>弹窗</Button>
                <Dialog title="提示"
                        footer={[
                            <Button className="j" onClick={this.handlerClick2}>取消</Button>,
                            <Button className="j" onClick={this.handlerClick2}>确定</Button>]}
                        visible={this.state.visible}
                        onClose={this.handlerClick2}
                        mask={true}
                        maskClosable={false}
                >
                    这是个啥
                </Dialog>
                <Button onClick={this.handlerClick3}>Alert</Button>
                <LayoutExample/>
            </div>
        );
    }
}

ReactDOM.render(
    <Demo/>,
    document.getElementById('root')
);
