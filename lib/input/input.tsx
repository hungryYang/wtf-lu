import React, {InputHTMLAttributes} from 'react';
import {scopedClass} from '@/utils/classnames';
import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const sc = scopedClass('wtf-input');

const Input: React.FunctionComponent<InputProps> = (props) => {
    return (
        <input className={sc('')} type="text" {...props}/>
    );
};

export default Input;
