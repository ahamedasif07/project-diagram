import { Outlet } from "react-router";
import NavBar from "./NavBar";
import { createContext, useEffect, useState } from "react";

// Export ThemeContext and ProductContext outside the component

export const ProductContext = createContext();

const LayOut = () => {
  const [allProduct, setAllproducts] = useState([]);

  useEffect(() => {
    const feching = async () => {
      const res = await fetch("../public/data.json");
      const data = await res.json();
      setAllproducts(data);
    };
    feching();
  }, []);

  console.log(allProduct);

  return (
    <div>
      <ProductContext.Provider value={allProduct}>
        <NavBar />
        <Outlet />
      </ProductContext.Provider>
    </div>
  );
};

export default LayOut;
