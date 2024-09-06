import { useContext, useEffect, useState } from "react";
import data from "../../public/data.json";
import Shirt from "../Components/Shirts-components/Shirt";
import ProductInfo from "../Components/ProductInfo";
import Spiner from "../Components/Loader/Spiner";
import { ProductContext } from "../LayOut";

const Shirts = () => {
  const [shirts, setShrits] = useState([]);
  const [iSLoading, setIsLoading] = useState(true);
  const [filterShirt, setFilterShirt] = useState("shirt");

  const useProduct = useContext(ProductContext);
  console.log(useProduct);

  useEffect(() => {
    // Ensure we're filtering more broadly to include different types of shirts
    const onlyShirts = useProduct.filter(
      (product) => product.category.toLowerCase().trim() === filterShirt
    );

    setShrits(onlyShirts);
    setIsLoading(false);
  }, [useProduct, filterShirt]);

  // console.log(shirts);
  return (
    <div className="md:max-w-[1100px] mx-auto pt-8">
      {iSLoading ? (
        <div className="w-[100%] h-[100vh] text-black flex justify-center items-center">
          <Spiner></Spiner>
        </div>
      ) : (
        <>
          <ProductInfo
            title={"Shart"}
            paragraph={`Introducing Diagram's vibrant Cuban Shirt Collection – where premium
viscose cotton meets bold style and abstract charm!

Crafted from fine viscose cotton fabric, our shirts offer unrivaled softness and breathability,
ensuring you stay cool and confident all day long. Each shirt boasts a unique blend of
colors and abstract patterns, adding a touch of personality to your ensemble.f`}
          />

          {/* --------shirts----- */}
          <div className="md:max-w-[1100px] mx-auto">
            <div className="grid px-4   justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1  md:gap-5">
              {shirts.map((shirt, idx) => (
                <Shirt shirt={shirt} key={idx}></Shirt>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shirts;
