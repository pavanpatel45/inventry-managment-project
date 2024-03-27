import React from 'react'
import icon1 from '../Icons/icon1.png'
import icon2 from '../Icons/icon2.png'
import icon3 from '../Icons/icon3.png'
import icon4 from '../Icons/icon4.png'
import icon5 from '../Icons/icon5.png'
import icon6 from '../Icons/icon6.png'
import icon7 from '../Icons/icon7.png'
import icon8 from '../Icons/icon8.png'
import icon9 from '../Icons/icon9.png'
import logoutIcon from '../Icons/logoutIcon.png'
export default function NavbarSide() {
  return (
    <div className='flex border-1 border-solid border-black flex-column w-20 h-screen items-center justify-between'>
       <div className='border-1 border-solid border-black flex items-center flex-column'>
          <div className='border-1 border-solid border-black'><img src={icon1}/></div>
          <div className='border-1 border-solid border-black'><img src={icon2}/></div>
          <div className='border-1 border-solid border-black'><img src={icon3}/></div>
          <div className='border-1 border-solid border-black'><img src={icon4}/></div>
          <div className='border-1 border-solid border-black'><img src={icon5}/></div>
          <div className='border-1 border-solid border-black'><img src={icon6}/></div>
          <div className='border-1 border-solid border-black'><img src={icon7}/></div>
          <div className='border-1 border-solid border-black'><img src={icon8}/></div>
          <div className='border-1 border-solid border-black'><img src={icon9}/></div>
          
          
       </div>
       <div className='border-1 border-solid border-black flex-end'>
       <div className='border-1 border-solid border-black'><img src={logoutIcon}/></div>
       </div>
    </div>
  )
}
