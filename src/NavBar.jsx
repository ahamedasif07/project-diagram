import React, { useState, useEffect } from "react";
import navLogo from "../public/images/diagram-home-page/NEW_LOGO.png";
import { ImSearch } from "react-icons/im";
import { BsHandbag } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isScarch, setIsScarch] = useState(false);

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
      <div className="relative">
        <div className={isFixed ? "fixed top-0 w-full z-50" : ""}>
          <div className="">
            <div className="middel-nav">
              <div className="bg-[#242833] flex justify-around items-center py-4">
                {!isScarch && (
                  <>
                    <h2 className="text-white text-xl">
                      <RiMenu2Fill />
                    </h2>
                    <img src={navLogo} alt="Logo" />
                    <div className="flex items-center gap-3">
                      <h2
                        onClick={() => setIsScarch(true)}
                        className="text-white text-xl"
                      >
                        <ImSearch />
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
        </div>

        {/* Search Bar */}
        <div
          className={`${
            isScarch
              ? " fixed transition-all duration-500 ease-in-out top-0 left-0 right-0 w-full z-50 bg-[#242833] py-2 "
              : "hidden"
          }`}
        >
          <div className="max-w-[600px] mx-auto py-4 px-2 flex items-center gap-4">
            <input
              className="py-2 px-4 w-full md:w-[600px] border-b-2 border-transparent focus:border-b-2 focus:border-black outline-none"
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
