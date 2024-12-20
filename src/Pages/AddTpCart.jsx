import React, { useContext } from "react";
import { AddToCartContex } from "../LayOut";

const AddTpCart = () => {
  const { addToCart } = useContext(AddToCartContex);
  console.log(addToCart);

  return <div>{}</div>;
};

export default AddTpCart;
