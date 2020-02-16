import React, { Attributes, HTMLAttributes, HTMLProps, InputHTMLAttributes } from 'react';
import './form-input.component.scss';

interface FormInputProps {
    handleChange: any;
    name: string;
    label?: string;
    type: string;
    value: string;
    required: boolean;
}

const FormInput: React.FC<FormInputProps>= ({ handleChange, label, ...formInoutProps  }) => (
    <div className="group">
        <input {...formInoutProps}
            type="text"
            className="form-input"
            onChange={handleChange} />
        {
            label ?
                (<label className={`${
                    formInoutProps.value.length ?
                    'shrink':
                    ''
                } form-input-label`}>
                </label>) :
                null
        }
    </div>
);

export default FormInput;
