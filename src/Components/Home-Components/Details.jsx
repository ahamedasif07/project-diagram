import { useState } from "react";
import detaisImage from "../../../public/images/diagram-home-page/detailsSalman.png";

const Details = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="max-w-[1100px] mt-[74px] mx-auto px-4">
      <div className="flex gap-20">
        <div className="w-[49%]">
          <div>
            <img src={detaisImage} alt="Polo Shirt" />
          </div>
        </div>
        <div>
          <p className="text-[10px] text-gray-500">Diagram</p>
          <h2 className="text-3xl py-3 font-[24px]">Polo Shirt | PD-42</h2>
          <div className="flex items-center gap-3">
            <h3 className="text-gray-500 font-[12px]">Tk 980.00 BDT</h3>
            <span className="text-white px-3 bg-brown-700 rounded-full">
              Sale
            </span>
          </div>
          <div>
            <h2 className="text-[12px] py-2">Size</h2>
            <div className="flex gap-2">
              {["M", "L", "XL", "XXL"].map((size, index) => (
                <h2
                  key={index}
                  className={`border-2 border-black px-3 rounded-full cursor-pointer ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                  onClick={() => handleClick(size)}
                >
                  {size}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
