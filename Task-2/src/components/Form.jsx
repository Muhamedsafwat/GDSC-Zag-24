import React, { useEffect, useState } from "react";

import arrowIcon from "/images/icon-arrow.svg";

const Form = ({
  day,
  month,
  year,
  setDay,
  setMonth,
  setYear,
  calculateAge,
}) => {
  //fields states for validation
  const [validDay, setValidDay] = useState(true);
  const [validMonth, setValidMonth] = useState(true);
  const [validYear, setValidYear] = useState(true);

  //fields validation
  useEffect(() => {
    //day validation
    if (day > 0 && day <= 31) {
      setValidDay(true);
    } else {
      setValidDay(false);
    }
    //month validation
    if (month > 0 && month <= 12) {
      setValidMonth(true);
    } else {
      setValidMonth(false);
    }
    //year validation
    if (year > 1900 && month <= 2023) {
      setValidYear(true);
    } else {
      setValidYear(false);
    }
  }, [day, month, year]);

  return (
    <div>
      <form className="flex font-bold text-sm uppercase tracking-widest w-5/6 gap-5 text-smokeygrey ">
        <div>
          <label htmlFor="day">Day</label>
          <input
            min={0}
            max={31}
            value={day}
            onChange={(e) => setDay(e.target.value)}
            id="day"
            placeholder="DD"
            className={`p-3 border-2 rounded-md mt-2 font-bold text-xl lg:text-3xl text-offblack w-full  duration-300 ${
              validDay
                ? "border-lightgrey focus:outline-brandpuurble"
                : "border-red-500 focus:outline-none"
            }`}
            type="number"
          />
        </div>
        <div className="">
          <label htmlFor="month">Month</label>
          <input
            min={0}
            max={12}
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder="MM"
            id="month"
            className={`p-3 border-2 rounded-md mt-2 font-bold text-xl lg:text-3xl text-offblack w-full  duration-300 ${
              validMonth
                ? "border-lightgrey focus:outline-brandpuurble"
                : "border-red-500 focus:outline-none"
            }`}
            type="number"
          />
        </div>
        <div className="">
          <label htmlFor="year">Year</label>
          <input
            min={0}
            max={2023}
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="YY"
            id="year"
            className={`p-3 border-2 rounded-md mt-2 font-bold text-xl lg:text-3xl text-offblack w-full  duration-300 ${
              validYear
                ? "border-lightgrey focus:outline-brandpuurble"
                : "border-red-500 focus:outline-none"
            }`}
            type="number"
          />
        </div>
      </form>
      <div className="flex items-center">
        <div className="w-full h-0.5 bg-lightgrey" />
        <button
          onClick={calculateAge}
          className="bg-offblack p-2 lg:p-5 rounded-full hover:bg-brandpuurble duration-300"
        >
          <img
            src={arrowIcon}
            alt="arrow icon"
            className="w-10 h-10 lg:w-auto lg:w-auto"
          />
        </button>
      </div>
    </div>
  );
};

export default Form;
