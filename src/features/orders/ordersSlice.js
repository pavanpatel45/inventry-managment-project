import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orders: [
    {
      amount: "6346",
      cardHolderName: "3646",
      cardNo: "346624",
      code: "dstery",
      customerAddress: "3664",
      customerName: "25g",
      customerPostalCode: "243626",
      deliveryDate: "2024-03-19",
      email: "hdfh@gmail.com",
      mobileNumber: "4535216123",
      orderNote: "fsasd",
      paymentAddress: "6nf54",
      paymentDate: "2024-03-26",
      paymentPostalCode: "4536",
      price: "235",
      quantity: "454",
      receivedDate: "2024-03-15",
      shipmentAddress: "4564ffn",
      shipmentPostalCode: "567378",
    },
  ],
};

export const ordersSlice = createSlice({
    name : "Orders",
    initialState,
    reducers:{
        addOrder:(state,action) => {
            if(action.payload){
                state.orders.push(action.payload);
                console.log('all orders',state.orders);
            }
            else{
                console.log("data not received at reducer");
            }
        }
    }
});

export const {addOrder} = ordersSlice.actions;

export default ordersSlice.reducer;
