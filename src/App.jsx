import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alltask from "./components/Auth/Alltask";
import {setLocalStorage} from "./utils/localStorage"
import {getLocalStorage} from "./utils/localStorage"



const App = () => {
  useEffect(()=>{
    // setLocalStorage();
    getLocalStorage();

  },[])
  return (
    <>
    <Login/>
    setLocalStorage
    </>
  );
};

export default App;
