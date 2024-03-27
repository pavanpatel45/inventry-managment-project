import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
export default function NavbarInner({title}) {
  return (
    <div className='flex flex-row justify-between items-center'>
       <div className='flex flex-row gap-2 ' style={{font:"16px"}}>
           <div >&larr;</div>
           <div style={{color:"#2D2D2D"}}>{title}</div>
       </div>
       <div className='flex flex-box'>
           <Button btnTitle="Save"/>
       </div>
    </div>
  )
}
