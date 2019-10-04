import React, {ReactElement} from 'react';
import {scopedClass} from '@/utils/classnames';
import './layout.scss';

const sc = scopedClass('wtf-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
    className?: string,
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...restProps} = props;
    const hasAside = (props.children as Array<ReactElement>).reduce((result, child) =>{
        return result || (child.type as any).name === 'Aside'
}, false)
    return (
        <div className={sc({'': true, hasAside}, className)} {...restProps}>
            {props.children}
        </div>
    );
};

export default Layout;
