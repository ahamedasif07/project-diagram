import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../LayOut";
import Spiner from "../Components/Loader/Spiner";
import ProductInfo from "../Components/ProductInfo";
import { Panjabi } from "../Components/Panjabi";
import { CardSpiner } from "../Components/CardSpiner/CardSpiner";

export const Panjabis = () => {
  const [isLoading, setIsLoading] = useState(true);

  const allProducts = useContext(ProductContext);
  const [allPanjabi, setAllPanjabi] = useState([]);

  useEffect(() => {
    const panjabis = allProducts.filter(
      (product) => product.category.toLowerCase().trim() === "panjabi"
    );
    console.log(panjabis);
    setAllPanjabi(panjabis);
    setIsLoading(false);
  }, [allProducts]);

  console.log(allProducts);

  return (
    <div>
      <div className="md:max-w-[1100px] mx-auto pt-8">
        <>
          <ProductInfo
            title={"Panjabi"}
            paragraph={`Presenting the all-new exclusive Luxury Panjabi Collection by DIAGRAM. Elevate your festive wardrobe with our exquisite range of traditional Panjabis crafted with the finest materials and intricate designs.

Experience the luxury of Diagram's Panjabi collection this Eid and make a statement that will be remembered for years to come. Don't wait, elevate your wardrobe today!`}
          />

          {/* --------shirts----- */}
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
                  {allPanjabi.map((panjabi) => (
                    <Panjabi panjabi={panjabi} key={panjabi.id}></Panjabi>
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
