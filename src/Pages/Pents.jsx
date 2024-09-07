import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../LayOut";
import { Pant } from "../Components/Pant";
import Spiner from "../Components/Loader/Spiner";
import ProductInfo from "../Components/ProductInfo";
import { CardSpiner } from "../Components/CardSpiner/CardSpiner";

export const Pents = () => {
  const allProducts = useContext(ProductContext);
  const [iSLoading, setIsLoading] = useState(true);
  const [allPents, setAllPents] = useState([]);
  const [pent, setPents] = useState("pent");
  useEffect(() => {
    const pents = allProducts.filter(
      (product) => product.category.toLowerCase() === "pent".toLowerCase()
    );
    setAllPents(pents);
    setIsLoading(false);
  }, [allProducts, pent]);

  return (
    <div className="md:max-w-[1100px] mx-auto pt-8">
      <>
        <ProductInfo
          title={"pents"}
          paragraph={`Introducing Diagram's vibrant Cuban Shirt Collection – where premium
viscose cotton meets bold style and abstract charm!
`}
        />

        {/* --------shirts----- */}
        <div className="md:max-w-[1100px] mx-auto">
          <div className="grid px-4 justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1  md:gap-5">
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
                {allPents.map((pent) => (
                  <Pant pent={pent} key={pent.id}></Pant>
                ))}
              </>
            )}
          </div>
        </div>
      </>
    </div>
  );
};
