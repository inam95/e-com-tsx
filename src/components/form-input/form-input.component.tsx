import React from "react";

import "./form-input.style.scss";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
}

export const FormInput: React.FC<FormInputProps> = props => {
  const { handleChange, label, value, ...otherProps } = props;
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label className={`${value.length ? "shrink" : ""}form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};
