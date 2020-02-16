import React, { Attributes, HTMLAttributes, HTMLProps, InputHTMLAttributes } from 'react';
import './form-input.component.scss';

interface FormInputProps {
    onChange: any;
    name: string;
    label?: string;
    type: string;
    value: string;
    required: boolean;
}

const FormInput: React.FC<FormInputProps>= ({ onChange, label, ...formInoutProps  }) => (
    <div className="group">
        <input type="text"
               className="form-input"
               onChange={onChange}
               {...formInoutProps}/>
        {
            label ?
                (<label className={`${
                    formInoutProps.value.length ?
                    'shrink':
                    ''
                } form-input-label`}>
                    {label}
                </label>) :
                null
        }
    </div>
);

export default FormInput;
