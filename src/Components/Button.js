import React from 'react'

export default function Button({btnTitle}) {
  return (
    <div className='p-2 border-1 border-solid border-black rounded-md  ' style={{ backgroundColor: '#B3B3B3' }}>
       <button className='px-6' type="submit" >{btnTitle}</button>
    </div>
  )
}
