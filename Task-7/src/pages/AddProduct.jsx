import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => navigate("/products"));
  };
  return (
    <div className="mt-10 w-full">
      <h2 className={labelStyle}>Add New Product</h2>
      <form onSubmit={submitHandler} className="flex flex-col mt-10">
        <label className="text-xl font-medium" htmlFor="title">
          Product title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className={inputStyle}
        />
        <label className={labelStyle} htmlFor="price">
          Product price
        </label>
        <input
          type="number"
          id="price"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          className={inputStyle}
        />
        <button className="px-5 py-2 font-bold text-white bg-green-500 w-fit mx-auto rounded-lg mt-10 hover:opacity-70 duration-300">
          Add product
        </button>
      </form>
    </div>
  );
};

const labelStyle = "text-xl font-medium mt-5";
const inputStyle =
  "px-5 py-2 text-lg border-2 border-gray-300 rounded-lg mt-2 outline-none";

export default AddProduct;
