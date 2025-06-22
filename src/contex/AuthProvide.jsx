import React, { createContext } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContex = createContext();
const AuthProvide = ({ children }) => {
  const [userData, setuserData] = useState(null)
 const data = getLocalStorage()
 console.log(data)
  return (
    <div>
      <AuthContex.Provider value={"NIkesh"}>
        
        {children}</AuthContex.Provider>
    </div>
  );
};

export default AuthProvide;
