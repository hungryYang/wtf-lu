import React, {Fragment} from 'react';
import Icon from '../icon/Icon';
import classnames from 'utils/classnames';
import './button.scss';

interface ButtonProps {
    className?: string,
    icon?: string,
    iconPosition?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    style?: object,
    loading?: boolean
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
            className={classnames('wtf-button', props.className)}
            onClick={props.onClick}
        >{inner}</button>
    );
};


export default Button;
