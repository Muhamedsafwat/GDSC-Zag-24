import React from "react";

const Loading = () => {
  return (
    <div className="w-full mt-20 text-center">
      <div className="w-16 h-16 mx-auto rounded-full border-8 border-t-transparent border-brand animate-spin" />
      <h2 className="font-semibold text-2xl my-5 text-gray-400 animate-pulse">
        Loading
      </h2>
    </div>
  );
};

export default Loading;
