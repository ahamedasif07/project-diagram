import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Product from "../Components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [newAraivles, setNewAraivles] = useState([]);
  const [showAll, setShowAll] = useState(8);
  const [demoProduct, setDemoproduct] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch("../../public/data.json");
      const data = await res.json();
      setProducts(data);
      const newArible = products.filter(
        (product) => product.category === "new-arrival"
      );
      setNewAraivles(newArible);
    };
    const demoFetching = async () => {
      const res = await fetch("../../public/product.json");
      const demoData = await res.json();
      setDemoproduct(demoData);
    };
    fetching();
    demoFetching();
  }, [products]);

  //  handle view all
  const handleViewAll = () => {
    setShowAll(showAll + 8);
  };

  // console.log(newAraivles);
  console.log(demoProduct);
  return (
    <div>
      <Header></Header>
      <div>
        <div className="px-4 max-w-[1100px] mx-auto pt-16 pb-3">
          <h2 className="text-2xl px-4 md:px-0 pb-2 text-gray-700">
            Summer Arrivals
          </h2>
          <p className="text-[14px]  pb-2 text-gray-700 px-4 md:px-0">
            Embrace the season with our latest collection and make this summer
            your most stylish one yet!
          </p>
        </div>
        <div className="grid px-4 max-w-[1100px]  justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mx-auto md:gap-5">
          {newAraivles?.slice(0, showAll).map((product, idx) => (
            <Product key={idx} product={product}></Product>
          ))}
        </div>
      </div>
      <div className={showAll >= newAraivles.length ? "hidden" : "block"}>
        <div className="flex justify-center py-[44px]">
          <button
            onClick={handleViewAll}
            className="bg-black text-white px-3 py-2 text-center"
          >
            View All
          </button>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto">
        <div className="px-4 max-w-[1100px] mx-auto pt-10">
          <h2 className="text-xl px-4 text-[22px] md:px-0 pb-2 font-semibold ">
            Product Collection
          </h2>
        </div>
        <div className="  ">
          <div className="grid px-4  justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1  md:gap-5">
            {demoProduct.map((demo) => (
              <div className="px-4 md:px-0 pb-5" key={demo.id}>
                <img className="w-full" src={demo.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
