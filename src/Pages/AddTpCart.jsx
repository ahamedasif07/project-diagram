import React, { useContext } from "react";
import { AddToCartContex } from "../LayOut";
import { ProductCard } from "../Components/ProductCard";

const AddTpCart = () => {
  const { addToCart } = useContext(AddToCartContex);
  console.log(addToCart);

  return (
    <div>
      <div className="grid grid-cols-4">
        {addToCart.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AddTpCart;
