import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="border-2 p-20  border-emerald-600 rounded-xl">
        <form className=" flex flex-col items-center justify-center">
          <input required
            className="outline-none border-2 text-white bg-black border-emerald-600  rounded-full py-3 px-5 text-xl placeholder:text-white-100"
            type="email"
            placeholder="Enter Your email"
          />
          <input required  className="outline-none border-2 text-white bg-black border-emerald-600 rounded-full py-3 px-5 text-xl mt-4 placeholder:text-white-100" type="password" placeholder="Enter Password" />
          <button  className="outline-none border-2 w-[250px] bg-emerald-600 border-none rounded-full py-3 px-5 text-xl text-white mt-6">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
