import React, { useEffect } from "react";
export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const updateUser = (data) => {
    setCurrentUser(data);
  };
  useEffect(
    () => {
      localStorage.setItem("user", JSON.stringify(currentUser));
    },
    { currentUser }
  );
  return (
    <div>
      <AuthContext.Provider value={{ currentUser, updateUser }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};
