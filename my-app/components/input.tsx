import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    ref?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...otherProps }, ref) => {
    return (
        <label>
            {label}
            <br/>
            <input
                {...otherProps}
                name={name}
                ref={ref}
            />
        </label>
    );
};

const FormInput = React.forwardRef(Input);

export default FormInput;