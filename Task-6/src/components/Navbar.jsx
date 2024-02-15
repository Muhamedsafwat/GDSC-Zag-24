import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-44 py-5 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white bg-brand px-2 py-1 rounded-md ">
          Logo
        </h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-10 text-xl font-medium">
          <Link to="/">
            <li className="hover:text-brand duration-100">
              <Link to="/">Home</Link>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
