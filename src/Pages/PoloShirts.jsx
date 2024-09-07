import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../LayOut";
import Spiner from "../Components/Loader/Spiner";
import ProductInfo from "../Components/ProductInfo";
import { PoloShirt } from "../Components/PoloShirt";
import { CardSpiner } from "../Components/CardSpiner/CardSpiner";

export const PoloShirts = () => {
  const allProducts = useContext(ProductContext);
  const [allPoloShirts, setAllPoloShirts] = useState([]);
  const [isLoading, setIslodadin] = useState(true);
  const [poloShirt, setPoloShirt] = useState("polo-shirt");

  useEffect(() => {
    const poloShirts = allProducts.filter(
      (product) => product.name === poloShirt
    );
    console.log(poloShirts);
    setAllPoloShirts(poloShirts);
    setIslodadin(false);
  }, [allProducts, poloShirt]);

  console.log(allProducts);
  return (
    <div>
      <div className="md:max-w-[1100px] mx-auto pt-8">
        <>
          <ProductInfo
            title={"Polo-Shirt"}
            paragraph={
              "Revolutionizing fashion with Polo Shirts. Impeccable fit, unmatched comfort, and contemporary flair."
            }
          />

          {/* --------poloshirts----- */}
          <div className="md:max-w-[1100px] mx-auto">
            <div className="grid px-4   justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1  md:gap-5">
              {isLoading ? (
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
                  {allPoloShirts.map((poloShirt, idx) => (
                    <PoloShirt poloShirt={poloShirt} key={idx}></PoloShirt>
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
