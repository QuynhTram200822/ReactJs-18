import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [login, setLogin] = useState(() => {
    return Cookies.get("login") === "true";
  });

  const HandleLogin = (email, pass) => {
    const correctEmail = "user@example.com";
    const correctPassword = "password123";
    if (email === correctEmail && pass === correctPassword) {
      setLogin(true);
      Cookies.set("login", "true");
      return true;
    } else {
      alert("Sai thông tin, vui lòng nhập lại");
      return false;
    }
  };
  const value = {
    login,
    HandleLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
