import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { userContext } from "../AuthContext";

const Login = () => {
  const navigate = useNavigate();
  //context
  const { isLoggedIn, login } = useContext(userContext);
  //form states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  //login function
  const submitHandler = (e) => {
    e.preventDefault();
    if (username != dummyUser.username) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User name doesn't exist.😶",
      });
    } else {
      if (password != dummyUser.password) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong password.🤔",
        });
      } else {
        login();
      }
    }
  };

  //check if user is already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [login]);

  return (
    <div className="mt-20 max-w-xl mx-auto">
      {isLoggedIn ? (
        <></>
      ) : (
        <>
          <h2 className="text-4xl font-bold text-gray-800">Login</h2>
          <form onSubmit={submitHandler} className="flex flex-col gap-5 mt-10">
            <input
              type="text"
              className="px-3 py-2 border-2 border-blue-500 outline-none rounded-lg text-xl focus:px-5 duration-300 focus:shadow-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <div className="w-full flex ">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 border-2 border-blue-500 outline-none border-r-0 rounded-r-none rounded-lg text-xl focus:px-5 duration-300 focus:shadow-lg w-full"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="bg-teal-500 text-white w-16 rounded-r-lg font-medium"
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-fit mx-auto hover:bg-blue-400 duration-300">
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;

const dummyUser = {
  username: "musafwat",
  password: "safwat911",
};
