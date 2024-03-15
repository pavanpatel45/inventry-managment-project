import React from 'react'
import Button from './Button'
export default function NavbarInner({title}) {
  return (
    <div className='flex flex-row justify-between items-center border-1 border-black border-solid'>
       <div className='flex flex-row gap-2'>
           <div>&larr;</div>
           <div>{title}</div>
       </div>
       <div className='flex flex-box'>
           <Button btnTitle="Save"/>
       </div>
    </div>
  )
}
