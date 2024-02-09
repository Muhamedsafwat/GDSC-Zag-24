import { useState } from "react";

import Divider from "./components/Divider";
import diceIcon from "../src/assets/icon-dice.svg";
import { useEffect } from "react";

function App() {
  //app states
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  //api url
  const apiEndpoint = "https://api.adviceslip.com/advice";
  //fetch data
  const getAdvice = async () => {
    setLoading(true);
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    setData(data.slip);
    setLoading(false);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="bg-bg w-screen h-screen flex items-center justify-center text-white">
      <div className="bg-layoutBg relative p-8 min-h-60 h-min pb-10 rounded-xl text-center flex flex-col items-center w-full max-w-xl">
        {!loading ? (
          <div className="h-full flex-1">
            <p className="text-brand tracking-widest font-semibold text-lg mb-5">
              Advice #{data.id}
            </p>
            <p className="text-3xl ">"{data.advice}"</p>
          </div>
        ) : (
          <div className="h-full flex-1 flex items-center flex-col justify-center ">
            <div className="p-4 border-4 border-brand rounded-full border-t-0 animate-spin" />
            <p className="text-2xl">Loading</p>
          </div>
        )}
        <Divider />
        <button
          onClick={getAdvice}
          className="p-4 absolute bottom-0 translate-y-1/2 rounded-full bg-brand hover:brightness-125 hover:shadow-3xl hover:shadow-brand duration-300"
        >
          <img src={diceIcon} alt="dice icon" />
        </button>
      </div>
    </div>
  );
}

export default App;
