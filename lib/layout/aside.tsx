import React from 'react';
import {scopedClass} from '@/utils/classnames';
const sc = scopedClass('wtf-layout');

const Aside: React.FunctionComponent = (props) => {
    return (
        <div className={sc({'aside': true})}>
            {props.children}
        </div>
    );
};

export default Aside;
