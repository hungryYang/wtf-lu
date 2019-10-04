import React from 'react';
import {scopedClass} from '@/utils/classnames';

const sc = scopedClass('wtf-layout');

const Footer: React.FunctionComponent = (props) => {
    return (
        <div className={sc({'footer': true})}>
            {props.children}
        </div>
    );
};

export default Footer;
