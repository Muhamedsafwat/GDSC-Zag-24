import React from "react";

const Divider = () => {
  return (
    <div className="flex w-full items-center gap-3 mt-10">
      <span className="bg-white h-px w-full" />
      <span className="w-2 h-4 rounded-md bg-white mr-[-5px]" />
      <span className="w-2 h-4 rounded-md bg-white" />
      <span className="bg-white h-px w-full" />
    </div>
  );
};

export default Divider;
