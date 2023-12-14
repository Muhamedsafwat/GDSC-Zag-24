import React from "react";

const Result = ({ age }) => {
  return (
    <div>
      <p className="text-5xl lg:text-7xl text-offblack font-black">
        {age.years == null ? (
          <span className="text-6xl lg:text-[90px] text-smokeygrey">--</span>
        ) : (
          <span className="text-6xl lg:text-[90px] text-brandpuurble">
            {age.years + " "}
          </span>
        )}
        Years <br />
        {age.months == null ? (
          <span className="text-6xl lg:text-[90px] text-smokeygrey">--</span>
        ) : (
          <span className="text-6xl lg:text-[90px] text-brandpuurble">
            {age.months + " "}
          </span>
        )}
        Months <br />
        {age.days == null ? (
          <span className="text-6xl lg:text-[90px] text-smokeygrey">--</span>
        ) : (
          <span className="text-6xl lg:text-[90px] text-brandpuurble">
            {age.days + " "}
          </span>
        )}
        Days
      </p>
    </div>
  );
};

export default Result;
