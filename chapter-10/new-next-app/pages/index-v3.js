import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "../components/Navibar";
import Caro from "../components/Caro";
import Product from "../components/product-v3/Product";
import { store } from "../store";
import { Provider } from "react-redux";

export default function index() {
  return (
    <Provider store={store}>
      <Navibar />
      <Caro />
      <Product />
    </Provider>
  );
}
