import { useContext, useEffect, useState } from "react";
import ProductInfo from "../Components/ProductInfo";
import { ProductContext } from "../LayOut";
import { CardSpiner } from "../Components/CardSpiner/CardSpiner";
import { ProductCard } from "../Components/ProductCard";

const Hoodie = () => {
  const [Hoodie, setHoodie] = useState([]);
  const [iSLoading, setIsLoading] = useState(true);
  const [filterHoddie, setFilterHoddie] = useState("Hoodie");

  const useProduct = useContext(ProductContext);

  useEffect(() => {
    console.log("Filtering products...");
    console.log("All Products:", useProduct);
    console.log("Filter Value:", filterHoddie);

    // Filter products by category (case-insensitive)
    const onlyHoodie = useProduct.filter(
      (product) =>
        product.category.toLowerCase().trim() ===
        filterHoddie.toLowerCase().trim()
    );

    console.log("Filtered Products:", onlyHoodie);

    setHoodie(onlyHoodie);
    setIsLoading(false);
  }, [useProduct, filterHoddie]);

  return (
    <div className="md:max-w-[1100px] mx-auto pt-8">
      <>
        <ProductInfo
          title={"Hoodie"}
          paragraph={`Introducing Diagram's vibrant Hoodie Collection – where premium
cotton meets bold style and comfort!

Crafted from fine cotton fabric, our hoodies offer unrivaled softness and breathability,
ensuring you stay cozy and stylish all day long. Each hoodie boasts a unique blend of
colors and patterns, adding a touch of personality to your wardrobe.`}
        />

        {/* Hoodie List */}
        <div className="md:max-w-[1100px] mx-auto">
          <div className="grid px-4 justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-5">
            {iSLoading ? (
              <>
                <CardSpiner />
                <CardSpiner />
                <CardSpiner />
                <CardSpiner />
                <CardSpiner />
                <CardSpiner />
                <CardSpiner />
                <CardSpiner />
              </>
            ) : (
              <>
                {Hoodie.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default Hoodie;
