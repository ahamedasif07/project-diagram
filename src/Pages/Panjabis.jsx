import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../LayOut";
import Spiner from "../Components/Loader/Spiner";
import ProductInfo from "../Components/ProductInfo";
import { Panjabi } from "../Components/Panjabi";

export const Panjabis = () => {
  const [iSLoading, setIsLoading] = useState(true);

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
        {iSLoading ? (
          <div className="w-[100%] h-[100vh] text-black flex justify-center items-center">
            <Spiner></Spiner>
          </div>
        ) : (
          <>
            <ProductInfo
              title={"Panjabi"}
              paragraph={`Presenting the all-new exclusive Luxury Panjabi Collection by DIAGRAM. Elevate your festive wardrobe with our exquisite range of traditional Panjabis crafted with the finest materials and intricate designs.

Experience the luxury of Diagram's Panjabi collection this Eid and make a statement that will be remembered for years to come. Don't wait, elevate your wardrobe today!`}
            />

            {/* --------shirts----- */}
            <div className="md:max-w-[1100px] mx-auto">
              <div className="grid px-4   justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1  md:gap-5">
                {allPanjabi.map((panjabi) => (
                  <Panjabi panjabi={panjabi} key={panjabi.id}></Panjabi>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
