import navLogo from "../public/images/diagram-home-page/NEW_LOGO.png";
import { ImSearch } from "react-icons/im";
const NavBar = () => {
  return (
    <div>
      <div className="">
        {/* nav upper */}

        {/* nav mddle */}
        <div className="navbar fixed z-10 bg-[#242833]">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 text-white w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <img className="md:w-full w-[100px]" src={navLogo} alt="" />
          </div>
          <div className="navbar-end">
            <span className="text-white pr-3">
              <ImSearch />
            </span>
          </div>
        </div>
        {/* nav dowen */}
      </div>
    </div>
  );
};

export default NavBar;
