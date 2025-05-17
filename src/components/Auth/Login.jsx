import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen w-screen item-center justify-center">
      <div className="border-2 border-red-700">
        <form className=" flex flex-col items-center justify-center">
          <input
            className="outline-none border-2 border-black rounded-full py-3 px-5 text-xl"
            type="email"
            placeholder="Enter Your email"
          />
          <input type="password" placeholder="Enter Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
