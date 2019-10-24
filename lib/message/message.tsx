import React from 'react';
import ReactDom from 'react-dom';
import {scopedClass} from '@/utils/classnames';
import './message.scss';
import Icon from '../icon/icon';

const sc = scopedClass('wtf-message');

interface MessageProps {
    visible: boolean,
    type: string,
    top?: number
}


const Message: React.FunctionComponent<MessageProps> = (props) => {
    const result = props.visible && <div className={sc('')} style={{top: `${props.top}px`}}>
        <div className={sc('content')}>
            <Icon name={props.type} style={{'fontSize': '18px'}}/>
            <div className={sc('content-main')}>{props.children}</div>
        </div>
    </div>;
    return (
        ReactDom.createPortal(result, document.body)
    );
};

Message.defaultProps = {
    type: 'info',
    top: 20
};

interface InfoProps {
    content: string,
    duration?: number,
    onClose?: () => void
}

const notice = (type: string) => {
    return (props: InfoProps) => {
        const result = <Message visible={true} type={type}>
            {props.content}
        </Message>;
        const div = document.createElement('div');
        const duration = props.duration || 3;
        const close = () => {
            ReactDom.render(React.cloneElement(result, {message: false}), div);
            ReactDom.unmountComponentAtNode(div);
            div.remove();
        };
        ReactDom.render(result, div);
        document.body.appendChild(div);
        return new Promise((resolve => {
            const timer = setTimeout(() => {
                close();
                props.onClose && props.onClose();
                clearTimeout(timer);
                return resolve();
            }, duration * 1000);
        }));
    };
};

const api: any = {};

['info', 'waring', 'success', 'error'].forEach(type => {
    api[type] = notice(type);
});

export interface ThenableArgument {
    (val: any): void;
}

export interface MessageType {
    (): void;

    then: (fill: ThenableArgument) => Promise<void>;
    promise: Promise<void>;
}

export interface MessageApi {
    info({}: InfoProps): MessageType,

    error({}: InfoProps): MessageType,

    success({}: InfoProps): MessageType
}

export default api as MessageApi;
