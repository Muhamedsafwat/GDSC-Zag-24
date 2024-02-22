import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
  }, []);

  const deletProduct = (id) => {
    Swal.fire({
      title: `Delete product #${id}?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => getProducts());
      }
    });
  };

  return (
    <div className="mt-10 w-full">
      <h2 className="text-4xl font-medium">Products</h2>
      <button className="mt-10">
        <Link
          className=" px-5 py-3 text-lg bg-green-500 rounded-md text-white font-bold hover:opacity-70 duration-300"
          to="/products/add"
        >
          Add new product
        </Link>
      </button>
      <table className="w-full [&_td]:w-full text-left my-10">
        <thead className="flex text-left mb-5 font-semibold text-lg border-b-2 border-gray-300 py-2">
          <td>ID</td>
          <td>Title</td>
          <td>Price</td>
          <td>Operations</td>
        </thead>
        {products.map((item, index) => (
          <tr
            key={index}
            className="flex font-semibold text-lg gap-5 py-3 even:bg-gray-100 px-5 rounded-lg"
          >
            <td>{item.id}</td>
            <td className="line-clamp-1 mr-10">{item.title}</td>
            <td>{item.price}$</td>
            <td className="text-white [&_button]:px-3 text-base [&_button]:mr-2 [&_button]:duration-200 [&_button]:rounded-md ">
              <button className="bg-green-500 hover:opacity-70">
                <Link to={`/products/${item.id}`}>View</Link>
              </button>
              <button className="bg-blue-500 hover:opacity-70">
                <Link to={`/products/edit/${item.id}`}>Edit</Link>
              </button>
              <button
                onClick={() => deletProduct(item.id)}
                className="bg-red-500 hover:opacity-70"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Products;
