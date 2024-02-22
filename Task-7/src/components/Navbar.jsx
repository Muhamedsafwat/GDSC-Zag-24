import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-5 mx-36 border-b-2 border-gray-300 flex justify-between">
      <Link to="/">
        <h1 className="text-3xl font-bold">CRUD</h1>
      </Link>
      <a href="/" className="font-medium text-xl">
        Home
      </a>
    </nav>
  );
};

export default Navbar;
