import React from 'react'

export default function Dropdown({title,...props}) {
  return (
    <div className={`flex flex-col  `}>
        <label for="title" className="relative top-3 left-3 bg-white max-w-max">{title}</label>
       <select id="title" className='border-1 border-solid border-black p-2 rounded-md' {...props} >
          <option default className='hidden'></option>
          <option>option1</option>
          <option>option2</option>
          <option>option3</option>
          <option>option4</option>
          <option>option5</option>
          <option>option6</option>
       </select>
    </div>
  )
}
