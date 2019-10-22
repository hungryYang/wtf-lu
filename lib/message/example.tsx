import React from 'react'
import Message from './message'
import Button from '../button/button'
class Example extends React.Component {
    handlerClick = () => {
        Message.info({content: '这是个啥玩意啊', duration: 1}).then(() => {
            Message.error({content: '这是个啥玩意啊2', duration: 1}).then(() => {
                Message.success({content: '这是个啥玩意啊3', duration: 1}).then(() => {
                    console.log(1)
                })
            })
        })
    }
    render () {
        return (
            <div>
                <Button onClick={this.handlerClick}>Message Info</Button>
            </div>
        )
    }
}

export default Example
