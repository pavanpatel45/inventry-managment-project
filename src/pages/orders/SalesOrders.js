import React from 'react'
import {useSelector,useDispatch} from  'react-redux'
import OrderBox from '../../Components/OrderBox'
import NavbarForm from '../../Components/NavbarForm'
export default function SalesOrders() {
    const allOrders = useSelector((state) => state.orders);
    console.log("allOrders :" ,allOrders)
  return (
    <div>
       <NavbarForm title="Sales "/>
       <div className='grid grid-cols-4 min-h-auto max-h-auto'>
           { 
            allOrders.map((order) => {
              return(  <OrderBox order={order} key={order.id}/>)
            })
           }
       </div>
    </div>
  )
}
