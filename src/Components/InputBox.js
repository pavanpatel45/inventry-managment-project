import React, { useState } from "react";

export default function InputBox({
  title,
  type,
  className,
  name,
  category,
  field,
  register,
  errors,
  ...props
}) {

  return (
    <div className={`flex flex-col ${className} floating-label`}>
      <input
        type={type}
        className=" p-2 border-1 rounded-md "
        id={name}
        {...register}
        {...props}
        placeholder=""
        style={{color:"#2D2D2D",borderColor:"#A1A1A1", font:"14px"}}
      />
      <label for={name} className="relative top-3 left-3 bg-white max-w-max" style={{color:"#808080",display:"inline",font:"12px"}}>
        {title}
      </label>
        {errors[category] && errors[category][field] && <span>{errors[category][field].message}</span>}
    </div>
  );
}
