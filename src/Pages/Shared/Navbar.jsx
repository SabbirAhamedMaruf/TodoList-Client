import { Link, NavLink } from "react-router-dom";
import "../../index.css";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <ul className="hidden lg:block navbar menu menu-horizontal font-bold text-[18px] space-y-3 space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Dashboard">Dashboard</NavLink>
        </ul>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <h1 className="font-bold text-xl lg:text-2xl">TodoList</h1>
      </div>

      <div className="navbar-end ">
        <div className="relative">
          <button className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold px-2 py-1 md:px-3 lg:px-4 lg:py-2 rounded-md">
            Login
          </button>
          <Link to="/rooms">
            <button className="bg-gradient-to-l from-green-400 to-green-600 text-white font-bold px-2 py-1 md:px-3 lg:px-4 lg:py-2 rounded-md absolute inset-0 opacity-0 transition duration-700 hover:opacity-100">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
