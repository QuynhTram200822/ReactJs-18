import { useState, createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);

  const HandleLogin = (email, pass) => {
    const correctEmail = "user@example.com";
    const correctPassword = "password123";
    if (email === correctEmail && pass === correctPassword) {
      setLogin(true);
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
