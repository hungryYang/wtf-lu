import React from 'react';
import {scopedClass} from '@/utils/classnames';
import './button.scss';

const sc = scopedClass('wtf-buttonGroup');

interface Props {
    className?: string,
    style?: object
}

class ButtonGroup extends React.Component<Props> {
    render() {
        const {children, className, style} = this.props;
        return (
            <div className={sc('', className)} style={style}>
                {children}
            </div>
        );
    }
}

export default ButtonGroup;
