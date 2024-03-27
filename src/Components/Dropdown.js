import React,{useState} from "react";
export default function Dropdown({
  title,
  name,
  register,
  errors,
  options,
  category,
  field,
  ...props
}) {

  return (
    <div className={`flex flex-col  select-box-1 floating-label`}>
     
      <select
        className="p-2 rounded-md"
        id={name}
        {...register}
        {...props}
        style={{border:"1px solid #999999",color:"#2D2D2D"}}
      >
        {options ? (
          <>
            <option default className="hidden"></option>
            {options.map((ele, index) => (
              <option key={index}>{ele}</option>
            ))}
          </>
        ) : (
          <>
            <option default className="hidden"></option>
            <option>option1</option>
            <option>option2</option>
            <option>option3</option>
            <option>option4</option>
            <option>option5</option>
            <option>option6</option>
          </>
        )}
      </select>
      <label for="title" className="relative top-3 left-3 bg-white max-w-max" style={{color:"#808080"}}>
        {title}
      </label>
      {/* {console.log("errors[name] : ",errors[name] , "name :",name)} */}
      {errors[category] && errors[category][field] && <span>{errors[category][field].message}</span>}
    </div>
  );
}
