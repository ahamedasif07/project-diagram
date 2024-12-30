import { useState, useEffect, useContext } from "react";
import navLogo from "../public/images/diagram-home-page/NEW_LOGO.png";
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { AddToCartContex, ScarchContex } from "./LayOut";
import AddToCartCard from "./Components/AddToCartCard";

const NavBar = () => {
  const { addToCart } = useContext(AddToCartContex);
  const { handleInputChange } = useContext(ScarchContex);

  console.log(addToCart);
  const [isFixed, setIsFixed] = useState(false);
  const [isScarch, setIsScarch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [togolAddToCart, setTogolAddToCart] = useState(false);

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
    <div className="">
      {/* Top Bar */}
      <div className="text-center  bg-white pr-5 py-2">
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
                      <Link
                        to="/scarch"
                        onClick={() => setIsScarch(true)}
                        className="text-white text-xl md:block hidden "
                      >
                        <CiSearch />
                      </Link>
                    </div>
                    <img
                      className="w-[170px] md:w-[250px]"
                      src={navLogo}
                      alt="Logo"
                    />
                    <div className="flex items-center gap-3">
                      <h2
                        onClick={() => setIsScarch(true)}
                        className="text-white block md:hidden text-xl"
                      >
                        <CiSearch />
                      </h2>
                      <Link
                        to="/login"
                        className="text-white hidden md:block text-xl"
                      >
                        <FaRegUser />
                      </Link>
                      <Link
                        onClick={() => setTogolAddToCart(true)}
                        className="text-white text-xl"
                      >
                        <div className="flex relative gap-1 items-center justify-center">
                          <BsHandbag />
                          <div className="absolute left-[14px] bottom-2">
                            <p className="bg-white  flex justify-center items-center h-[15px] text-black text-[10px] px-[4px] text-center  rounded-full">
                              {addToCart.length}
                            </p>
                          </div>
                        </div>
                      </Link>
                      {/* to="/addtocart" */}
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
                <button className="  py-2 text-[14px] text-gray-200    rounded-md">
                  <h2
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center"
                  >
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
                        onClick={() => setIsOpen(false)}
                        className="px-4    py-2 block text-[14px] text-gray-200 cursor-pointer uppercase"
                      >
                        Shirt
                      </Link>
                      <Link
                        to="/tshirts"
                        onClick={() => setIsOpen(false)}
                        className="px-4  block  py-2 text-[14px] text-gray-200 cursor-pointer uppercase"
                      >
                        T-Shirt
                      </Link>
                      <Link
                        to="/PoloShirts"
                        onClick={() => setIsOpen(false)}
                        className="px-4 block   py-2 text-[14px] text-gray-200 cursor-pointer uppercase"
                      >
                        polo-Shirt
                      </Link>
                      <Link
                        to="/panjbis"
                        onClick={() => setIsOpen(false)}
                        className="px-4 block   py-2 text-[14px] text-gray-200 cursor-pointer uppercase"
                      >
                        panjabi
                      </Link>
                      <Link
                        to="/pents"
                        onClick={() => setIsOpen(false)}
                        className="px-4 block   py-2 text-[14px] text-gray-200 cursor-pointer uppercase"
                      >
                        pents
                      </Link>

                      {/* Add more items as needed */}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/accessories"
                className="  py-2 text-[14px] text-gray-200 cursor-pointer"
              >
                ACCESSORIES
              </Link>
              <Link
                to="/shoes"
                className="  py-2 text-[14px] text-gray-200 cursor-pointer"
              >
                SHOES
              </Link>
            </ul>
          </div>
        </div>
        {/* drower for add to cart start */}

        <div
          className={`fixed top-0 right-0 z-[1000] h-[100vh] w-1/3 bg-gray-300 transform transition-transform duration-300 ${
            togolAddToCart ? "translate-x-0" : "translate-x-full"
          } overflow-y-scroll overflow-x-hidden`}
        >
          <div className="px-4 py-4">
            {/* Header */}
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold">Shopping Cart</h2>
              <h1
                onClick={() => setTogolAddToCart(false)}
                className="text-xl cursor-pointer"
              >
                <RxCross2 />
              </h1>
            </div>

            {/* Cart Items */}
            {addToCart.length > 0 ? (
              <div className="flex flex-col gap-3 items-center justify-center py-3">
                {addToCart.map((product) => (
                  <AddToCartCard product={product} key={product.id} />
                ))}
              </div>
            ) : (
              <h2 className="text-4xl font-bold text-center mt-[200px]">
                No Added Product
              </h2>
            )}
          </div>
        </div>

        {/* drower for add to cart end */}

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
            <div className="max-w-[600px] translate-x-1 duration-300 ease-in-out mx-auto py-4 px-2 flex items-center gap-4">
              <input
                id="input-filde"
                className="py-2 px-4 w-full text-white border-white border-2 bg-[#242833] md:w-[600px] border-b-2 border-transparent focus:border-black outline-none"
                type="search"
                placeholder="search"
                onChange={handleInputChange} // Attach onChange handler
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
