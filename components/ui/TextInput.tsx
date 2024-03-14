interface Props<T> {
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  name: keyof T;
  labelStyle?: string;
  inputStyle?: string;
  containerStyle?: string;
  register: any;
  errorMessage?: string;
}

const TextInput = <T,>({
  label,
  placeholder,
  type,
  name,
  labelStyle,
  inputStyle,
  containerStyle,
  register,
  errorMessage,
}: Props<T>) => {
  return (
    <label className={`form-control w-full ${containerStyle}`}>
      <div className="label">
        <span className={`label-text ${labelStyle}`}>{label}</span>
      </div>
      <input
        {...register(name)}
        type={type || "text"}
        name={name}
        placeholder={placeholder || "Type here..."}
        className={`input input-bordered flex-grow w-full ${inputStyle} 
          ${errorMessage && "input-error"}`}
      />
      {errorMessage && <p className="text-error mt-2">{errorMessage}</p>}
    </label>
  );
};

export default TextInput;
