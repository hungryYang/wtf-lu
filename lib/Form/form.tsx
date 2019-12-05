import React, {Fragment} from 'react';
import Input from '../input/input';
import {scopedClass} from '@/utils/classnames';
import './form.scss';

interface FormFieldDefaultRender {
    type: 'text' | 'textarea' | 'number' | 'password'
}

export interface FormValue {
    [Key: string]: any
}

export interface FormField {
    name: string,
    label: string,
    input: FormFieldDefaultRender
}

export interface FormErrors {
    [Key: string]: string
}

interface FormProps {
    value: FormValue,
    fields: FormField[],
    onChange: (value: FormValue) => void,
    buttons: React.ReactNode | React.ReactFragment
    onSubmit: (value: FormValue) => void,
    errors: FormErrors
}

export function noErrors(errors: any) {
    return !!Object.entries(errors).length;
}

const sc = scopedClass('wtf-form-table');

const Form: React.FunctionComponent<FormProps> = (props) => {
    const onChange = (key: string, event: any) => {
        const value = {...props.value, [key]: event.target.value};
        props.onChange(value);
    };
    const onSubmit = (event: any) => {
        event.preventDefault();
        props.onSubmit(props.value);
    };
    return (
        <form onSubmit={onSubmit}>
            <table className={sc('')}>
                <tbody className={sc('tbody')}>
                {
                    props.fields.map((field, index) => (
                        <Fragment key={index}>
                            <tr className={sc('tr')} key={index}>
                                <td className={sc('td')}>
                                    <span className={sc('label')}>{field.label}</span>
                                </td>
                                <td className={sc('td')}>
                                    <Input value={props.value[field.name]}
                                           onChange={onChange.bind(null, field.name)}
                                           type={field.input.type}/>
                                    {
                                        props.errors[field.name] && <div className={sc('error')}>{props.errors[field.name]}</div>
                                    }
                                </td>

                            </tr>
                            {/*<tr className={sc('error')}>*/}
                                {/*<td/>*/}
                                {/*<td>*/}
                                    {/*{*/}
                                        {/*props.errors[field.name]*/}
                                    {/*}*/}
                                {/*</td>*/}
                            {/*</tr>*/}
                        </Fragment>
                    ))
                }
                </tbody>
                <tbody>
                    <tr className={sc('tr')}>
                        <td className={sc('td')} />
                        <td className={sc('td')}>
                            {props.buttons}
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default Form;
