import React, {Fragment} from 'react';
import Icon from '../icon/icon';
import {scopedClass} from '../utils/classnames';
import './button.scss';

const sc = scopedClass('wtf-button');

interface ButtonProps {
    className?: string,
    icon?: string,
    iconPosition?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    style?: object,
    loading?: boolean,
    disabled?: boolean | undefined
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
    console.log(props.disabled)
    return (
        <button
            className={sc({'': true, disabled: props.disabled}, props.className)}
            disabled={props.disabled}
            onClick={props.onClick}
        >{inner}</button>
    );
};


export default Button;
