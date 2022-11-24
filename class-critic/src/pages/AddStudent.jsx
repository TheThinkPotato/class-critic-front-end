import React from "react";
import Header from "../components/Header";

export default function Login() {
  return (
    <div className="bg-indigo-900 h-screen">
      <div className="bg-indigo-900 text-white h-screen flex flex-col">
        <Header />
        <div className="flex border-4 border-solid border-gray-400 my-2 p-5 max-w-xlg rounded-md bg-slate-50 text-black max-w-5xl mx-auto">
          <h1>Add Student</h1>
        </div>
      </div>
    </div>
  );
}
