import React, { useState, createContext, useEffect } from "react";

export const userContext = createContext();

const AuthContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //login and logout functions
  const login = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  //check if user was previously logged in
  useEffect(() => {
    const prevValue = localStorage.getItem("isLoggedIn");
    if (prevValue) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <userContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default AuthContext;
