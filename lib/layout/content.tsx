import React from 'react';
import {scopedClass} from '@/utils/classnames';
const sc = scopedClass('wtf-layout');

const Content: React.FunctionComponent = (props) => {
    return (
        <div className={sc('content')}>
            {props.children}
        </div>
    );
};

export default Content;
