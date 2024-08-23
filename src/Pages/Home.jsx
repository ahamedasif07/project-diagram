import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Product from "../Components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [newAraivles, setNewAraivles] = useState([]);
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
    fetching();
  }, [products]);
  console.log(newAraivles);
  return (
    <div>
      <Header></Header>
      <div>
        <div className="px-4 max-w-screen-xl mx-auto py-3">
          <h2 className="text-2xl pb-2 text-gray-700">Summer Arrivals</h2>
          <p className="text-[14px]  pb-2 text-gray-700">
            Embrace the season with our latest collection and make this summer
            your most stylish one yet!
          </p>
        </div>
        <div className="grid px-4  max-w-screen-xl justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mx-auto md:gap-16">
          {newAraivles?.map((product, idx) => (
            <Product key={idx} product={product}></Product>
          ))}
        </div>
        <h2>hello</h2>
      </div>
      <div>
        <h2></h2>
      </div>
    </div>
  );
};

export default Home;
