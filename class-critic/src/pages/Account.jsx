import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [fName, setfName] = useState(localStorage.getItem("fName") || "");
  const [lName, setlName] = useState(localStorage.getItem("lName") || "");


  return (
    <div className="App bg-indigo-900 text-white h-screen flex flex-col">
      <Header />
      <div className="flex flex-col text-xl border-4 border-solid border-gray-400 my-auto py-5 w-2/3 lg:w-1/2 w rounded-md bg-slate-50 text-black mx-auto">
      <div className="mx-5">
            <div className="mb-4 mt-4 w-full self-center">
              <h2 className="text-center font-semibold">First Name:</h2>
              <input
                className="bg-gray-200 border-2 border-black rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="First Name"
                type={"text"}
                name="fName"
                value={fName}
                onChange={(e) => setfName(e.target.value)}
              />
            </div>
            <div className="mb-4 mt-4 w-full self-center">
              <h2 className="text-center font-semibold">Last Name:</h2>
              <input
                className="bg-gray-200 border-2 border-black rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Last Name"
                type={"text"}
                name="lName"
                value={lName}
                onChange={(e) => setlName(e.target.value)}
              />
            </div>
            <div className="mb-4 mt-4 w-full self-center">
              <h2 className="text-center font-semibold">Email:</h2>
              <input
                className="bg-gray-200 border-2 border-black rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Email"
                type={"text"}
                name="email"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 mt-4 w-full self-center">
              <h2 className="text-center font-semibold">Last Name:</h2>
              <input
                className="bg-gray-200 border-2 border-black rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="New Password"
                type={"text"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col">
          <button
            className="w-2/6 self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              // register(fName, lName, email, password).then((res) => {
              //   if (res.error) {
              //     registerError = true;
              //     setMessage(res.message);
              //   } else {
              //     registerError = false;
              //     setMessage("");
              //     navigate("/login");
              //   }
              // });
            }}
          >
            Update
          </button>
        </div>
      </div>      
    </div>
  );
}
