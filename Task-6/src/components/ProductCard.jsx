import React from "react";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  return (
    <div className="w-[31%] py-5 rounded-lg border-opacity-50 border-brand border-2 shadow-lg flex flex-col hover:translate-y-[-5px] duration-300 cursor-pointer ">
      <div className="w-full h-52 overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="object-scale-down w-full h-full"
        />
      </div>
      <div className="px-5 flex-1 flex flex-col">
        <h2 className="text-xl font-medium my-2 line-clamp-1">{props.title}</h2>
        <p className="mb-5 line-clamp-3">{props.description}</p>
        <Link
          className="bg-brand text-center mt-auto px-3 py-1 w-full text-white font-bold rounded-md hover:opacity-70 duration-300"
          to={`/products/${props.id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
