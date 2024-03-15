import React from "react";

export default function InputBox({
  title,
  type,
  className,
  name,
  register,
  errors,
  ...props
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label for={name} className="relative top-3 left-3 bg-white max-w-max">
        {title}
      </label>
      <input
        type={type}
        className="border-1 border-solid border-black p-2 rounded-md "
        id={name}
        {...register}
        {...props}
      />
       {errors[name] && <span>{errors[name].message}</span>}
    </div>
  );
}
