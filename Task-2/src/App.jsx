import { useState } from "react";
import { Result, Form } from "./components";

function App() {
  //App states
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ days: null, months: null, years: null });

  //calculate age function
  const calculateAge = () => {
    //check if all inputs are provided
    if (day && month && year) {
      //get current date
      var date = new Date();
      var d2 = date.getDate();
      var m2 = 1 + date.getMonth();
      var y2 = date.getFullYear();
      var monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      //special cases
      if (day > d2) {
        d2 = d2 + monthdays[m2 - 1];
        m2 = m2 - 1;
      }
      if (month > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
      }
      //calculate age
      var days = d2 - day;
      var months = m2 - month;
      var years = y2 - year;
      //store the result
      setAge({ years, months, days });
    } else {
      alert("Please enter a valid date");
    }
  };

  return (
    //main container
    <div className="flex items-center justify-center h-screen w-screen bg-offwhite">
      {/*App container*/}
      <div className="bg-white p-8 lg:p-12 rounded-2xl rounded-br-[5rem] max-w-3xl m-5">
        <Form
          day={day}
          month={month}
          year={year}
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
          calculateAge={calculateAge}
        />
        <Result age={age} />
      </div>
    </div>
  );
}

export default App;
