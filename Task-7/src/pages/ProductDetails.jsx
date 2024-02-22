import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div className="mt-10 w-full">
      {details ? (
        <h2 className="text-4xl font-medium">{details.title}</h2>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ProductDetails;
