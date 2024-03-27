import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orders: [
    {
      customerDetails: {
        Address: "423",
        City: "option2",
        Country: "option2",
        PostalCode: "123456",
        State: "option1",
        customerName: "1",
        email: "pavan.patel@biz4solutions.com",
        mobileNumber: "1234567890",
      },
      orderDetails: {
        Location: "option2",
        Note: "dqeq",
        receivedDate: "2024-03-20",
      },
      paymentDetails: {
        City: "option3",
        Country: "option3",
        PostalCode: "123456",
        State: "option4",
        amount: "1",
        cardHolderName: "123",
        cardNo: "1234567890098765",
        paymentAddress: "111",
        paymentDate: "2024-03-19",
        paymentMethod: "Credit Card",
        paymentStatus: "Not Paid",
      },
      productDetails: {
        Name: "option2",
        code: "qe",
        price: "0",
        quantity: "1",
      },
      shipmentDetails: {
        Address: "67451",
        City: "option4",
        Country: "option3",
        PostalCode: "123456",
        State: "option3",
        deliveryDate: "2024-03-21",
      },
    },
  ],
};

export const ordersSlice = createSlice({
  name: "Orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      if (action.payload) {
        state.orders.push(action.payload);
        console.log("all orders", state.orders);
      } else {
        console.log("data not received at reducer");
      }
    },
  },
});

export const { addOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
