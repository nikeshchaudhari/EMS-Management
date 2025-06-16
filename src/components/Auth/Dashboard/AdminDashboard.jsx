import React from "react";
import Header from "../Header";
import CreateTask from "../CreateTask";
import Alltask from "../Alltask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full ">
      <Header />
      <CreateTask />
      <Alltask />
    </div>
  );
};

export default AdminDashboard;
