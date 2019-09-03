import React, {FunctionComponent, HTMLAttributes} from 'react';
import './importAllIcons';
import './icon.scss';
import classnames from 'utils/classnames';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
    name: string
}

const Icon: FunctionComponent<Props> = ({name, className, ...restProps}) => {
    return (
        <svg className={classnames("wtf-icon", className)} {...restProps}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};

export default Icon;
