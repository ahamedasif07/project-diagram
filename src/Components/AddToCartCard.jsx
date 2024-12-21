import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FiEdit2 } from "react-icons/fi";

const AddToCartCard = ({ product }) => {
  const { id, name, category, code_name, image1, image2, price, sizes } =
    product;
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white w-96">
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
          <p className="text-gray-500 text-sm">{sizes}</p>
          <p className="text-lg font-semibold mt-1">{price}</p>
        </div>
        <button className="text-gray-500 hover:text-red-600">
          <RxCross2 size={20} />
        </button>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center border rounded">
          <button className="px-3 py-1 text-lg">-</button>
          <span className="px-4 py-1 text-lg">1</span>
          <button className="px-3 py-1 text-lg">+</button>
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
