import { useState } from "react";

const Product = ({ product }) => {
  const { id, name, category, code_name, image1, image2, price, sizes } =
    product;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="p-6 md:p-1 ">
      <div
        className="  mx-auto scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? image2 : image1}
          className="w-full h-auto transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Product;
