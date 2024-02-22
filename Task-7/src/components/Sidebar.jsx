import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="flex flex-col py-5 px-10 gap-5 w-1/4 rounded-md bg-gray-300 text-lg font-medium my-10">
      <Link to="/products">Get all products</Link>
      <Link>Get all categories</Link>
    </aside>
  );
};

export default Sidebar;
