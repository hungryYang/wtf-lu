import React from 'react';
import {scopedClass} from '@/utils/classnames';

const sc = scopedClass('wtf-layout');

const Header: React.FunctionComponent = (props) => {
    return (
        <div className={sc('header')}>
            {props.children}
        </div>
    );
};

export default Header;
