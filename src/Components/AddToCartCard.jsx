import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiEdit2 } from "react-icons/fi";

const AddToCartCard = ({ product }) => {
  const { name, image1, price, sizes } = product;

  // State to manage quantity and total price
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    setTotalPrice((prev) => prev + price);
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      setTotalPrice((prev) => prev - price);
    }
  };

  return (
    <div className="border p-4  rounded-lg shadow-md bg-white w-[450px]">
      {/* Free Shipping Message */}
      <div className="text-green-600 text-sm font-medium mb-2">
        You qualify for free shipping!
      </div>

      {/* Product Details */}
      <div className="flex items-start gap-4">
        <img
          src={image1}
          alt="Product"
          className="w-20 h-20 rounded object-cover"
        />
        <div className="flex-grow">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-gray-500 flex gap-1 text-sm">
            {sizes.map((size) => (
              <span key={size}>{size},</span>
            ))}
          </p>
          <p className="text-lg font-semibold mt-1">Tk {totalPrice}</p>
        </div>
        <button className="text-gray-500 hover:text-red-600">
          <RxCross2 size={20} />
        </button>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center border rounded">
          <button
            onClick={decreaseQuantity}
            className="px-3 py-1 text-lg hover:bg-gray-200"
          >
            -
          </button>
          <span className="px-4 py-1 text-lg">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-3 py-1 text-lg hover:bg-gray-200"
          >
            +
          </button>
        </div>
        <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
          <FiEdit2 />
          <span className="text-sm">Edit</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCartCard;
