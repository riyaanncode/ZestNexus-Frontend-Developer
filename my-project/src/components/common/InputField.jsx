import React from 'react';

const InputField = ({
  label,
  name,
  placeholder,
  type = 'text',
  register,
  required = false,
  className = '',
  disabled = false,
  value,
}) => {
  return (
    <div className="">
      {label && <label htmlFor={name} className="mb-1 font-medium text-sm">{label}</label>}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`border p-3 rounded-md outline-blue-500 ${className}`}
        {...register(name, { required })}
        disabled={disabled}
        value={value}
        readOnly={!!value}
      />
    </div>
  );
};

export default InputField;
