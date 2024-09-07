import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../LayOut";
import Spiner from "../Components/Loader/Spiner";
import ProductInfo from "../Components/ProductInfo";
import { Tshirt } from "../Components/Tshirt";
import { CardSpiner } from "../Components/CardSpiner/CardSpiner";

export const Tshirts = () => {
  const allProduct = useContext(ProductContext); // Check if this context is providing correct data
  const [allTshirts, setAllTshirts] = useState([]);
  const [tShirt, setTshirt] = useState("t-shirt");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("All Products: ", allProduct); // Log to see if `allProduct` contains data

    const FiltaredTShirts = allProduct.filter(
      (product) =>
        product.category &&
        product.category.trim().toLowerCase() === tShirt.toLowerCase()
    );
    console.log("Filtered T-Shirts: ", FiltaredTShirts);
    setAllTshirts(FiltaredTShirts);
    setIsLoading(false);
  }, [tShirt, allProduct]); // Add `allProduct` as a dependency

  console.log("All T-Shirts State: ", allTshirts);

  return (
    <div>
      <div className="md:max-w-[1100px] mx-auto pt-8">
        <>
          <ProductInfo
            title={"T-Shirt"}
            paragraph={`Revolutionizing fashion with Polo Shirts. Impeccable fit, unmatched comfort, and contemporary flair.`}
          />

          {/* --------shirts----- */}
          <div className="md:max-w-[1100px] mx-auto">
            <div className="grid px-4   justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1  md:gap-5">
              {iSLoading ? (
                <>
                  <CardSpiner></CardSpiner>
                  <CardSpiner></CardSpiner>
                  <CardSpiner></CardSpiner>
                  <CardSpiner></CardSpiner>
                  <CardSpiner></CardSpiner>
                  <CardSpiner></CardSpiner>
                  <CardSpiner></CardSpiner>
                  <CardSpiner></CardSpiner>
                </>
              ) : (
                <>
                  {allTshirts.map((tShirt, idx) => (
                    <Tshirt tShirt={tShirt} key={idx}></Tshirt>
                  ))}
                </>
              )}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};
