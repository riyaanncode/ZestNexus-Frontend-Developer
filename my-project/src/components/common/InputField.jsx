const InputField = ({
  type,
  name,
  placeholder,
  register,
  required,
  value,
  disabled,
}) => {
  return (
    <input
      className="border border-gray-300  p-[10px]"
      type={type}
      placeholder={placeholder}
      {...register}
      name={name}
      required={required}
      value={value}
      disabled={disabled}
    />
  );
};

export default InputField;
