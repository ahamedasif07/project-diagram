import React, { useContext, useEffect, useState } from "react";
import { ProductContext, ScarchContex } from "../LayOut";
import { ProductCard } from "../Components/ProductCard";
import { CardSpiner } from "../Components/CardSpiner/CardSpiner";

const Scarch = () => {
  const allProduct = useContext(ProductContext);
  const { inputVlaue } = useContext(ScarchContex);
  const [scarchItem, setScarchItem] = useState([]);

  useEffect(() => {
    console.log("All Products: ", allProduct);

    if (allProduct && Array.isArray(allProduct) && inputVlaue) {
      const FiltaredTInputData = allProduct.filter(
        (product) =>
          product.category &&
          product.category.trim().toLowerCase() ===
            inputVlaue.trim().toLowerCase()
      );
      console.log("Filtered Items: ", FiltaredTInputData);
      setScarchItem(FiltaredTInputData);
    } else {
      setScarchItem([]); // Clear results if inputValue is invalid
    }
  }, [inputVlaue, allProduct]);

  console.log("Filtered Items State: ", scarchItem);

  return (
    <div>
      <div className="md:max-w-[1100px] mx-auto">
        <div className="grid px-4 justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-5">
          <>
            {scarchItem.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Scarch;
