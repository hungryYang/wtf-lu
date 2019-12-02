import React from 'react';

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
            <table>
                {
                    props.fields.map((field, index) => (
                        <tbody key={index}>
                        <tr>
                            <td>
                                {field.label}
                            </td>
                            <td>
                                <input value={props.value[field.name]}
                                       onChange={onChange.bind(null, field.name)}
                                       type={field.input.type}/>
                            </td>
                        </tr>
                        <tr>
                            <td/>
                            <td>
                                {
                                    props.errors[field.name]
                                }
                            </td>
                        </tr>
                        </tbody>
                    ))
                }
                <tbody>
                <tr>
                    <td>
                        {props.buttons}
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    );
};

export default Form;
