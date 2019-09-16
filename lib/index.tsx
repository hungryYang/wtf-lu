import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button/Button';
import Icon from './icon/icon';
import ButtonGroup from './button/ButtonGroup'
// export {default as Icon} from  './icon/icon'
// export {default as Button} from  './button/button'



class Demo extends React.Component {
    state = {
        loading: false
    }
    handlerClick = () => {
        this.setState({
            loading: true
        })
    }
    render () {
        const {loading} = this.state
        return (
            <div>
                <Button icon="up" className="j">测试1</Button>
                <Button icon="edit" onClick={this.handlerClick} className="j" loading={loading}>loading按钮</Button>
                <ButtonGroup>
                    <Button icon="left" className="left">left</Button>
                    <Button className="middle">middle</Button>
                    <Button icon="right"  iconPosition="right" className="right">right</Button>
                </ButtonGroup>
                <Icon name="add" />

                <Icon name="right" className="test-icon test-icon-2"/>
                <Icon name="loading" className="test-icon test-icon-2"/>
            </div>
        )
    }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);
