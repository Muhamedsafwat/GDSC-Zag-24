import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(userContext);

  return (
    <nav className="py-5 mx-36 border-b-2 border-gray-300 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
          Auth
        </h1>
      </Link>
      {isLoggedIn ? (
        <button onClick={() => logout()} className={buttonStyle}>
          Logout
        </button>
      ) : (
        <Link to="/login" className={buttonStyle}>
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;

const buttonStyle =
  "font-medium text-xl bg-gradient-to-r from-blue-600 to-teal-400 px-4 py-2 rounded-lg text-white hover:opacity-70 duration-300 shadow-lg";
