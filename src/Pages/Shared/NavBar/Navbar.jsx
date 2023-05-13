import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/bookings">My bookings</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className=" my-container h-28 py-4 mb-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content font-medium mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-medium menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end items-center flex gap-4">
          <div>
            <button className="px-2">
              <FaShoppingBag />
            </button>
            <button className="px-2">
              <FaSearch />
            </button>
          </div>
          <button className="btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] border-[#FF3811] text-[#FF3811]">
            Appointment
          </button>
          {user ? (
            <button
              onClick={handelLogout}
              className="btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] border-[#FF3811] text-[#FF3811]"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] border-[#FF3811] text-[#FF3811]">
                Log In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
