import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap screen justify-between gap-5 mt-10 ">
      <div className="py-6 px-10 w-full md:w-[45%] bg-red-400 rounded-xl ">
        <h2 className="text-2xl text-white">0</h2>
        <h3 className="text-3xl text-white">New Task</h3>
      </div>
       <div className="py-6 px-10 w-full md:w-[45%] bg-blue-400 rounded-xl ">
        <h2 className="text-2xl text-white">0</h2>
        <h3 className="text-3xl text-white">New Task</h3>
      </div>
       <div className="py-6 px-10 w-full md:w-[45%] bg-green-400 rounded-xl ">
        <h2 className="text-2xl text-white">0</h2>
        <h3 className="text-3xl text-white">New Task</h3>
      </div>
       <div className="py-6 px-10 w-full md:w-[45%] bg-yellow-400 rounded-xl ">
        <h2 className="text-2xl text-white">0</h2>
        <h3 className="text-3xl text-white">New Task</h3>
      </div>
     
    </div>
  );
};

export default TaskListNumber;
