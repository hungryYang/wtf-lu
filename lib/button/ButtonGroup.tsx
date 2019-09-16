import React from 'react'
import classnames from '../../utils/classnames';
import './button.scss'
interface Props {
    className?: string,
    style?: object
}

class ButtonGroup extends React.Component<Props> {
    render () {
        const { children, className, style } = this.props
        return (
            <div className={classnames('wtf-buttonGroup', className)} style={style}>
                {children}
            </div>
        )
    }
}

export default ButtonGroup
