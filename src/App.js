import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./context/store";
import CreateOrder from "./pages/orders/CreateOrder";
import SalesOrders from "./pages/orders/SalesOrders";
import "../src/CSS/dropdownCss.css"
import NavbarSide from "./Components/NavbarSide";

function App() {
  return (
    // <Provider store={store}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<CreateOrder />} />
    //       <Route path="/sales" element={<SalesOrders />} />
    //     </Routes>
    //   </BrowserRouter>
    // </Provider>
    <NavbarSide/>
  );
}

export default App;
