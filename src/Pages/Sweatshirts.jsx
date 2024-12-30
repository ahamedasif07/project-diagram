import { useContext, useEffect, useState } from "react";
import ProductInfo from "../Components/ProductInfo";
import { ProductContext } from "../LayOut";
import { CardSpiner } from "../Components/CardSpiner/CardSpiner";
import { ProductCard } from "../Components/ProductCard";

const Sweatshirts = () => {
  const [Sweatshirts, setSweatshirts] = useState([]);
  const [iSLoading, setIsLoading] = useState(true);
  const [filterHoddie, setFilterHoddie] = useState("Sweatshirts");

  const useProduct = useContext(ProductContext);

  useEffect(() => {
    console.log("Filtering products...");
    console.log("All Products:", useProduct);
    console.log("Filter Value:", filterHoddie);

    // Filter products by category (case-insensitive)
    const onlySweatshirts = useProduct.filter(
      (product) =>
        product.category.toLowerCase().trim() ===
        filterHoddie.toLowerCase().trim()
    );

    console.log("Filtered Products:", onlySweatshirts);

    setSweatshirts(onlySweatshirts);
    setIsLoading(false);
  }, [useProduct, filterHoddie]);

  return (
    <div className="md:max-w-[1100px] mx-auto pt-8">
      <>
        <ProductInfo
          title={"Sweatshirts"}
          paragraph={`Introducing Diagram's vibrant Sweatshirts Collection – where premium
cotton meets bold style and comfort!

Crafted from fine cotton fabric, our Sweatshirtss offer unrivaled softness and breathability,
ensuring you stay cozy and stylish all day long. Each Sweatshirts boasts a unique blend of
colors and patterns, adding a touch of personality to your wardrobe.`}
        />

        {/* Sweatshirts List */}
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
                {Sweatshirts.map((product) => (
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

export default Sweatshirts;
