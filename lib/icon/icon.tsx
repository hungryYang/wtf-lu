import React, {FunctionComponent} from 'react';
import './importAllIcons';
import './icon.scss';
import {scopedClass} from '../utils/classnames';

const sc = scopedClass('wtf-icon');

interface Props {
    name: string,
    className?: string
    style?: object,
    onClick?: React.MouseEventHandler<HTMLOrSVGElement>
}

const Icon: FunctionComponent<Props> = ({name, className, style, onClick}) => {
    const classes = name === 'loading' ?  sc({'': true, spin: true}, className):sc('', className);
    return (
        <svg className={classes} onClick={onClick} style={style} >
            <use xlinkHref={`#${name}`} />
        </svg>
    );
};

export default Icon;
