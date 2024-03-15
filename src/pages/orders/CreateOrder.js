import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from  'react-redux'
import { addOrder } from "../../features/orders/ordersSlice";
import { useForm } from "react-hook-form";
import InputBox from "../../Components/InputBox";
import NavbarForm from "../../Components/NavbarForm";
import Dropdown from "../../Components/Dropdown";
export default function CreateOrder() {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.orders);
  console.log("all Orders at createOrder",allOrders);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("inside onSubmit", data);
    dispatch(addOrder(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <NavbarForm title="Create Order" />
        <div className="grid gap-y-6">
          {/* Order Details Block Start */}
          <div>
            <div>Order Details</div>
            <div className="grid grid-cols-3 grid-flow-row gap-x-8 ">
              <InputBox
                type="date"
                title="Received Date*"
                name="receivedDate"
                errors={errors}
                register={register("receivedDate", {
                  required: "Hey, you forgot to enter the received date!",
                })}
              />

              <Dropdown title="Order Location*" />
              <InputBox
                type="text"
                title="Order Note*"
                className="col-span-3"
                name="orderNote"
                errors={errors}
                register={register("orderNote", {
                  required: "Hey, you forgot to enter the order Note!",
                })}
              />
            </div>
          </div>
          {/* Order Details Block Ends */}
          {/* Product Details Block start */}
          <div>
            <div>Product Details</div>
            <div className="grid grid-cols-3 grid-flow-row gap-x-8">
              <Dropdown title="Name*" />
              <InputBox
                type="text"
                title="Code"
                name="code"
                errors={errors}
                register={register("code", {
                  required: "Hey, you forgot to enter the Code!",
                })}
              />
              <InputBox
                type="number"
                title="Quantity*"
                name="quantity"
                errors={errors}
                register={register("quantity", {
                  required: "Hey, you forgot to enter the Quantity!",
                })}
              />
              <InputBox
                type="number"
                title="Price*"
                name="price"
                errors={errors}
                register={register("price", {
                  required: "Hey, you forgot to enter the Price",
                })}
              />
            </div>
          </div>
          {/* Product Details Block Ends */}
          {/* Customer Details Block start */}
          <div>
            <div>Customer Details</div>
            <div className="grid grid-cols-3 grid-flow-row gap-x-8">
              <InputBox
                type="text"
                title="Customer Name*"
                name="customerName"
                errors={errors}
                register={register("customerName", {
                  required: "Hey, you forgot to enter the Customer Name!",
                })}
              />
              <InputBox
                type="email"
                title="Email*"
                name="email"
                errors={errors}
                register={register("email", {
                  required: "Hey, you forgot to enter the Email!",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/i,
                    message: "Oops! Please enter a valid email address.",
                  },
                })}
              />
              <InputBox
                type="number"
                title="Mobile Number*"
                name="mobileNumber"
                errors={errors}
                register={register("mobileNumber", {
                  required: "Hey, you forgot to enter the Mobile Number!",
                  min:{
                    value:1000000000,
                    message:"Please Enter More  Number atleast 10"
                  },
                  max:{
                    value:9999999999,
                    message:"Please Enter Number without country Code eg. 1234567890"
                  }
                })}
              />
              <InputBox
                type="text"
                title="Address Line*"
                className="col-span-2"
                name="customerAddress"
                errors={errors}
                register={register("customerAddress", {
                  required: "Hey, you forgot to enter the Address!",
                })}
              />
              <InputBox
                type="number"
                title="Zip/Postal Code*"
                name="customerPostalCode"
                errors={errors}
                register={register("customerPostalCode", {
                  required: "Hey, you forgot to enter the Zip/Postal Code!",
                })}
              />
              <Dropdown title="City*" />
              <Dropdown title="State*" />
              <Dropdown title="Country*" />
            </div>
          </div>
          {/* Customer Details Block Ends */}

          {/* Payment Details Block start */}
          <div>
            <div>Payment Details</div>
            <div className="grid grid-cols-3 grid-flow-row gap-x-8">
              <Dropdown title="Payment Method*" />
              <InputBox
                type="number"
                title="Card No*"
                name="cardNo"
                errors={errors}
                register={register("cardNo", {
                  required: "Hey, you forgot to enter the Card No.!",
                })}
              />
              <InputBox
                type="text"
                title="Card Holder Name*"
                name="cardHolderName"
                errors={errors}
                register={register("cardHolderName", {
                  required: "Hey, you forgot to enter the Card Holder Name!",
                })}
              />
              <Dropdown title="Payment Status*" />
              <InputBox
                type="date"
                title="Payment Date*"
                name="paymentDate"
                errors={errors}
                register={register("paymentDate", {
                  required: "Hey, you forgot to enter the Payment date!",
                })}
              />
              <InputBox
                type="number"
                title="Amount*"
                name="amount"
                errors={errors}
                register={register("amount", {
                  required: "Hey, you forgot to enter the Amount!",
                })}
              />
              <InputBox
                type="text"
                title="Address Line*"
                className="col-span-2"
                name="paymentAddress"
                errors={errors}
                register={register("paymentAddress", {
                  required: "Hey, you forgot to enter the Address!",
                })}
              />
              <InputBox
                type="number"
                title="Zip/Postal Code*"
                name="paymentPostalCode"
                errors={errors}
                register={register("paymentPostalCode", {
                  required: "Hey, you forgot to enter the Zip/Postal Code!",
                })}
              />
              <Dropdown title="City*" />
              <Dropdown title="State*" />
              <Dropdown title="Country*" />
            </div>
          </div>
          {/* Payment Details Block Ends */}

          {/* Shipment Details Block start */}
          <div>
            <div>Shipment Details</div>
            <div className="grid grid-cols-3 grid-flow-row gap-x-8">
              <InputBox
                type="date"
                title="Delivery Date*"
                name="deliveryDate"
                errors={errors}
                register={register("deliveryDate", {
                  required: "Hey, you forgot to enter the Delivery date!",
                })}
              />
              <InputBox
                type="text"
                title="Address Line*"
                className="col-span-2"
                name="shipmentAddress"
                errors={errors}
                register={register("shipmentAddress", {
                  required: "Hey, you forgot to enter the Address!",
                })}
              />
              <InputBox
                type="number"
                title="Zip/Postal Code*"
                name="shipmentPostalCode"
                errors={errors}
                register={register("shipmentPostalCode", {
                  required: "Hey, you forgot to enter the Zip/Postal Code!",
                })}
              />
              <Dropdown title="City*" />
              <Dropdown title="State*" />
              <Dropdown title="Country*" />
            </div>
          </div>
          {/* Shipment Details Block Ends */}
        </div>
      </div>
    </form>
  );
}
