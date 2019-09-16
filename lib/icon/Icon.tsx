import React, {FunctionComponent} from 'react';
import './importAllIcons';
import './icon.scss';
import classnames from 'utils/classnames';

interface Props {
    name: string,
    className?: string
    style?: object,
    onClick?: React.MouseEventHandler<HTMLOrSVGElement>
}

const Icon: FunctionComponent<Props> = ({name, className, style, onClick}) => {

    const classes = name === 'loading' ? classnames('wtf-icon', className, 'wtf-icon-spin') : classnames('wtf-icon', className);
    return (
        <svg className={classes} style={style} onClick={onClick}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};

// @ts-ignore
export default Icon;
