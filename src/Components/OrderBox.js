import React, { useState } from "react";
import uparrow from '../Icons/up-arrow.png'
import downarrow from '../Icons/down-arrow.png'
export default function OrderBox({order,key}) {
  const [isOpen,setIsOpen] = useState(false);
    function handleOpenBox() {
        if (isOpen) {
          setIsOpen(false);
        } else {
           setIsOpen(true);
        }
      }
  return (
    <div className="grid grid-rows-2 " style={{ border: "1px solid #c1c1c1",height:"fit-content"}}>
      <div className="grid grid-cols-12">
        <div className="col-span-2">Image</div>
        <div className=" col-span-9 ">
          <div>Order Quantity: sehsrjhtrhyjtdjyj</div>
          <div>Product Name</div>
        </div>
        <div className="col-span-1 "  onClick={handleOpenBox}>
          <img src={isOpen?uparrow:downarrow}/>
          </div>
      </div>
      <div className=" flex justify-between">
        <div className="">Received On:jdifjioerhgheg</div>
        <div className="">Available</div>
      </div>
      <div style={{ display: isOpen ? 'grid' : 'none' }}>
        <div>Order by</div>
        <div>Location</div>
        <div className="flex justify-between">
          <div>
            <div>Available</div>
            <div>300</div>
          </div>
          <div>
            <div>Producible</div>
            <div>150</div>
          </div>
          <div>
            <div>Unavailable</div>
            <div>50</div>
          </div>
        </div>
        <div>
          Order Note: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </div>
        <div className="grid grid-cols-2 text-center">
          <button className="border-2 border-solid border-black  my-2 mx-2 py-2 rounded-md">Cancel Order</button>
          <button className="border-2 border-solid border-black my-2 mx-2 py-2 rounded-md">View Order</button>
        </div>
      </div>
    </div>
  );
}
