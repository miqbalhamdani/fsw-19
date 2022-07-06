import React from "react";

import ProductCardDiscount from "./ProductCardDiscount";
import ProductCardOfficial from "./ProductCardOfficial";

export default function Product(props) {
  return (
    <>
      <ProductCardDiscount product={props.products[0]} />

      <ProductCardOfficial product={props.products[1]} />
    </>
  );
}
