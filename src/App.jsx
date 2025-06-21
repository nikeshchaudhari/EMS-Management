import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alltask from "./components/Auth/Alltask";
// import {setLocalStorage} from "./utils/localStorage"
// import {getLocalStorage} from "./utils/localStorage"

const App = () => {
  const [user, setUser] = useState(null);

  const loginHandle = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@gmail.com" && password == "123") {
      setUser("employees");
    } else {
      alert("Invalid");
    }
  };

  return (
    <>
      {!user ? <Login loginHandle={loginHandle} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};
export default App;
