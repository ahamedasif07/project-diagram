import { Outlet } from "react-router";
import NavBar from "./NavBar";
import { createContext, useEffect, useState } from "react";

// Export ThemeContext and ProductContext outside the component
export const ProductContext = createContext();
export const AddToCartContex = createContext();

const LayOut = () => {
  const [allProduct, setAllproducts] = useState([]);
  const [addToCart, setAddCart] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        setAllproducts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetching();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleAddToCart = (detailProduct) => {
    console.log(detailProduct);
  };
  return (
    <div>
      <AddToCartContex.Provider
        value={{ addToCart, setAddCart, handleAddToCart }}
      >
        <ProductContext.Provider value={allProduct}>
          <NavBar />
          <Outlet />
        </ProductContext.Provider>
      </AddToCartContex.Provider>
    </div>
  );
};

export default LayOut;
