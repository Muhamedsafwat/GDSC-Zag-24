import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";
import Loading from "./Loading";

const ProductsList = () => {
  //app states
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  //fetch data
  const getData = (categorie) => {
    setLoading(true);
    fetch(
      `https://fakestoreapi.com/products${
        !!categorie ? `/category/${categorie}` : ""
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-44">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-center text-3xl font-bold my-10">
            Our latest products
          </h2>
          <div className="flex justify-center gap-5 mb-10">
            <button
              className="px-3 py-1 bg-brand text-white text-xl font-medium rounded-md hover:opacity-70 duration-300"
              onClick={() => getData()}
            >
              All
            </button>
            {categories.map((item, index) => (
              <button
                key={index}
                className="px-3 py-1 bg-brand text-white text-xl font-medium rounded-md hover:opacity-70 duration-300"
                onClick={() => getData(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex justify-start gap-5 flex-wrap w-full">
            {products.map((itemData, index) => (
              <ProductCard {...itemData} key={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsList;
