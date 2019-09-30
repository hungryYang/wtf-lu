import React, {FunctionComponent} from 'react';
import './importAllIcons';
import './icon.scss';
import {classnames, scopedClass} from '@/utils/classnames';

const sc = scopedClass('icon');

interface Props {
    name: string,
    className?: string
    style?: object,
    onClick?: React.MouseEventHandler<HTMLOrSVGElement>
}

const Icon: FunctionComponent<Props> = ({name, className, style, onClick}) => {

    const classes = name === 'loading' ? classnames(sc(), className, sc('spin')) : classnames(sc(), className);
    return (
        <svg className={classes} style={style} onClick={onClick}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};

// @ts-ignore
export default Icon;
