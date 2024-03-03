import React, { useContext } from "react";
import { userContext } from "../AuthContext";

const HomePage = () => {
  const { isLoggedIn } = useContext(userContext);
  return (
    <div className="mt-16 w-full">
      {!isLoggedIn ? (
        <>
          <h1 className="text-center text-3xl font-bold">Please login</h1>
          <p className="text-center text-2xl mt-5">
            You are not allowed to view this page
          </p>
        </>
      ) : (
        <>
          <h1 className="text-center text-3xl font-bold">
            Welcome to React Auth
          </h1>
          <p className="text-center text-2xl mt-5">
            You are logged in successfully
          </p>
        </>
      )}
    </div>
  );
};

export default HomePage;
