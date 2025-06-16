import React from "react";

const CreateTask = () => {
  return (
    <>
      <div className="bg-black w-full  text-white">
        <div className="form-wrapper bg-black  p-10">
          <form
            action=""
            className="flex justify-between  bg-[#0e0c0c] w-full p-10"
          >
            <div className="w-[500px]">
              <h3 className="block font-semibold mb-3">Task Title</h3>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 border-green-500 outline-none bg-[#0e0c0c] placeholder:text-white rounded mb-3"
                placeholder="Enter Title "
              />
              <h3 className="block font-semibold mb-3">Date</h3>
              <input
                type="date"
                className="w-full px-3 py-2 border-2 border-green-500 outline-none bg-[#0e0c0c] placeholder:text-white rounded mb-3"
              />
              <h3 className="block font-semibold mb-3">Assign to</h3>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 border-green-500 outline-none bg-[#0e0c0c] placeholder:text-white rounded mb-3"
              />
              <h3 className="block font-semibold mb-3">Category</h3>
              <input
                type="text"
                className="w-full px-3 py-2 border-2 border-green-500 outline-none bg-[#0e0c0c] placeholder:text-white rounded mb-3"
              />
            </div>
            <div className="w-[500px]">
              <h3 className="block font-semibold mb-3">Description</h3>
              <textarea
                name="desc"
                id=""
                className="w-full h-[250px] px-3 py-2 border-2 border-green-500 outline-none bg-[#0e0c0c] placeholder:text-white rounded mb-3"
              ></textarea>
              <button className="block font-semibold mb-3 bg-green-700 w-full px-3 py-2 rounded ">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
