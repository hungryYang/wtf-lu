import React, {FunctionComponent} from 'react';
import './importAllIcons';
import './icon.scss';
import classnames from 'utils/classnames';

interface Props {
    name: string,
    className?: string
    style?: object
}

const Icon: FunctionComponent<Props> = ({name, className , style}) => {

    const classes = name === 'loading' ? classnames("wtf-icon", className, "wtf-icon-spin") : classnames("wtf-icon", className)
    return (
        <svg className={classes} style={style}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};

export default Icon;
