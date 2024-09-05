import React, { useState, useEffect } from "react";
import navLogo from "../public/images/diagram-home-page/NEW_LOGO.png";
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isScarch, setIsScarch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="text-center bg-white py-2">
        <h2 className="text-[13px] font-[13px]">One Lifestyle For Everyone</h2>
      </div>

      {/* Navbar */}
      <div className="relative bg-[#242833]">
        <div className={isFixed ? "fixed top-0 w-full z-50 bg-[#242833]" : ""}>
          <div className="">
            <div className="middel-nav">
              <div className=" flex justify-around items-center py-4">
                {!isScarch && (
                  <>
                    <div className="flex gap-2 items-center">
                      <h2
                        onClick={() => setIsMenu(!isMenu)}
                        className="text-white md:hidden block text-xl"
                      >
                        {isMenu ? <RxCross2></RxCross2> : <RiMenu2Fill />}
                      </h2>
                      <h2
                        onClick={() => setIsScarch(true)}
                        className="text-white text-xl md:opacity-100 opacity-0 "
                      >
                        <CiSearch />
                      </h2>
                    </div>
                    <img
                      className="w-[170px] md:w-[250px]"
                      src={navLogo}
                      alt="Logo"
                    />
                    <div className="flex items-center gap-3">
                      <h2
                        onClick={() => setIsScarch(true)}
                        className="text-white opacity-100 md:opacity-0 text-xl"
                      >
                        <CiSearch />
                      </h2>
                      <h2 className="text-white hidden md:block text-xl">
                        <FaRegUser />
                      </h2>
                      <h2 className="text-white text-xl">
                        <BsHandbag />
                      </h2>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* -----------md : middel nav------- */}

          <div className={`md:block ${isMenu ? "sm:block" : "hidden "}`}>
            <ul className="md:flex gap-4 gap-y-2 sm:pl-[45px] pl-[10px] md:pl-0 justify-center pb-3">
              <Link
                to="/"
                className="  py-2 text-[14px] text-gray-200  cursor-pointer"
              >
                HOME
              </Link>
              {/* ------drop doern -----*/}
              <div className="relative">
                {/* Main Clothing Menu */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="  py-2 text-[14px] text-gray-200    rounded-md"
                >
                  <h2 className="flex items-center">
                    CLOTHING
                    <span className="ml-2">
                      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  </h2>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute left-0 mt-1 w-48 bg-[#242833]  shadow-lg rounded-md z-50">
                    <div className="  py-2 text-[14px] text-gray-200">
                      <Link
                        to="/shirts"
                        className="px-4    py-2 block text-[14px] text-gray-200 cursor-pointer uppercase"
                      >
                        Shirt
                      </Link>
                      <Link className="px-4  block  py-2 text-[14px] text-gray-200 cursor-pointer uppercase">
                        T-Shirt
                      </Link>
                      <Link
                        to="/shirts"
                        className="px-4 block   py-2 text-[14px] text-gray-200 cursor-pointer uppercase"
                      >
                        Shirt
                      </Link>
                      <Link className="px-4 block   py-2 text-[14px] text-gray-200 cursor-pointer uppercase">
                        T-Shirt
                      </Link>

                      {/* Add more items as needed */}
                    </div>
                  </div>
                )}
              </div>

              <li className="  py-2 text-[14px] text-gray-200 cursor-pointer">
                ACCESSORIES
              </li>
              <li className="  py-2 text-[14px] text-gray-200 cursor-pointer">
                SHOES
              </li>
            </ul>
          </div>
        </div>

        {/* <ul className="md:flex gap-4   justify-center pb-3">
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Services</li>
          <li className="text-white">Contact</li>
          <li className="text-white">Blog</li>
          <li className="text-white">Shop</li>
        </ul> */}

        {/* Search Bar */}
        <div
          className={`transition-all duration-700 ease-in-out transform ${
            isScarch
              ? "fixed top-0 left-0 right-0 w-full z-50 bg-[#242833] py-2 opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }`}
        >
          {isScarch && (
            <div className="max-w-[600px] mx-auto py-4 px-2 flex items-center gap-4">
              <input
                className="py-2 px-4 w-full border-white border-2 bg-[#242833] md:w-[600px] border-b-2 border-transparent focus:border-black outline-none"
                type="search"
                placeholder="search"
              />
              <h2
                onClick={() => setIsScarch(false)}
                className="text-white text-xl cursor-pointer"
              >
                <RxCross2 />
              </h2>
            </div>
          )}
        </div>
      </div>
      {/* Closing div */}
    </div>
  );
};

export default NavBar;
