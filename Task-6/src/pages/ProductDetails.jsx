import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Loading from "../components/Loading";

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();
  //fetch data
  const getData = () => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-44">
      {!loading ? (
        <div className="flex mt-20 gap-28">
          <div className="h-[70vh] ">
            <img src={data.image} alt={data.title} className="h-full" />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-bold">{data.title}</h1>
            <div className="flex items-center gap-10">
              <p className="font-bold text-2xl mt-2 mb-5">{data.price}$</p>
              <Link
                to={`/products/category/${data.category}`}
                className="font-semibold text-xl text-brand mt-2 mb-5 hover:opacity-70 duration-300"
              >
                {data.category}
              </Link>
            </div>
            <p className="text-xl">{data.description}</p>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductDetails;
