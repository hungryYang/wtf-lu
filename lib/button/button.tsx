import React, {Fragment} from 'react';
import Icon from '../icon/icon';
import {scopedClass} from '@/utils/classnames';
import './button.scss';

const sc = scopedClass('wtf-button');

interface ButtonProps {
    className?: string,
    icon?: string,
    iconPosition?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    style?: object,
    loading?: boolean,
    disabled?: boolean,
    htmlType?: 'button' | 'submit' | 'reset' | undefined
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    let icon = props.icon && <Icon name={props.icon}/>;
    if (props.loading) {
        icon = <Icon name="loading"/>;
    }
    const inner = (
        props.iconPosition === 'right' ?
            <Fragment>{props.children} {icon}</Fragment>
            :
            <Fragment>{icon} {props.children}</Fragment>
    );
    return (
        <button
            className={sc({'': true, disabled: props.disabled}, props.className)}
            type={props.htmlType}
            disabled={props.disabled}
            onClick={props.onClick}
        >{inner}</button>
    );
};

Button.defaultProps = {
    htmlType: 'button',
    disabled: false
};

export default Button;
