import React, {ReactElement, Fragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import {scopedClass} from '../utils/classnames';
import './dialog.scss';
import Icon from '../icon/icon';
import Button from '../button/button';

const sc = scopedClass('wtf-dialog');

interface DialogProps {
    title?: string,
    footer?: Array<ReactElement>,
    visible: Boolean,
    onClose: React.MouseEventHandler,
    mask?: Boolean,
    maskClosable?: Boolean
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    const result = props.visible && <div className={sc('')}>
        {
            props.mask && <div className={sc('mask')} onClick={() => {
                props.maskClosable && props.onClose;
            }
            }/>
        }
        <div className={sc('main')}>
            {
                props.title
                && <div className={sc('header')}>{props.title}</div>
            }
            <div className={sc('close')} onClick={props.onClose}>
                <Icon name="close"/>
            </div>
            <div className={sc('body')}>
                {props.children}
            </div>
            {
                props.footer
                && props.footer.length > 0
                && <div className={sc('footer')}>
                    {
                        props.footer.map((button, index) => {
                            return React.cloneElement(button, {key: index});
                        })
                    }
                </div>
            }
        </div>
    </div>;
    return (
        <Fragment>
            {
                ReactDOM.createPortal(result, document.body)
            }
        </Fragment>
    );
};

Dialog.defaultProps = {
    mask: false,
};

interface ModalProps {
    content: ReactNode,
    buttons?: Array<ReactElement>
    onYes?: () => void,
    onNo?: () => void
}

const Modal = (props: ModalProps) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const component = <Dialog title="提示"
                              footer={props.buttons}
                              onClose={onClose}
                              visible={true}
    >
        {props.content}
    </Dialog>;
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);
    return onClose;
};

const Alert = (props: ModalProps) => {
    const buttons = [<Button onClick={() => close()}>确定</Button>];
    const close = Modal({content: props.content, buttons});
    return close;
};

const Confirm = (props: ModalProps) => {

    const yes = () => {
        props.onYes && props.onYes();
        close();
    };

    const no = () => {
        props.onNo && props.onNo();
        close();
    };
    const buttons = [
        <Button onClick={no}>取消</Button>,
        <Button onClick={yes}>确定</Button>
    ];
    const close = Modal({content: props.content, buttons});
    return close;
};

export {Alert, Confirm, Modal};

export default Dialog;
