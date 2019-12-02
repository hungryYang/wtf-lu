import React, {Fragment, useState} from 'react';
import Form, {FormField, FormValue, noErrors} from './form';
import Button from '../button/button';

const validate = (formValue: FormValue) => {
    if (formValue.username.length < 3) {
        return {username: ['太短']};
    } else {
        return {};
    }
};

const FormExample = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '1',
        password: 'xxx'
    });
    const [fields] = useState<FormField[]>([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'text'}}
    ]);

    const [errors, setErrors] = useState<any>({});
    const onChange = (value: FormValue) => {
        setFormData(value);
        const errors = validate(value);
        console.log(errors);
        setErrors(errors);
        console.log(noErrors(errors));
    };
    const onSubmit = (value: FormValue) => {
        console.log(value);
    };
    return (
        <div>
            <Form value={formData}
                  fields={fields}
                  buttons={
                      <Fragment>
                          <Button htmlType="submit">提交</Button>
                      </Fragment>
                  }
                  errors={errors}
                  onSubmit={onSubmit}
                  onChange={onChange}/>
        </div>
    );
};

export default FormExample;
