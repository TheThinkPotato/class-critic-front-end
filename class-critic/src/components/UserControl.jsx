import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { login, register } from "../data/apiCalls";

const login = (email, password) => {};

const register = (email, password) => {};

const UserContol = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  let registerError = false;
  let logInError = false;

  useEffect(() => {
    //rerender
  }, [message]);

  return (
    <div className="flex flex-col text-xl border-4 border-solid border-gray-400 my-auto py-5 px-40 w-1/3 rounded-md bg-slate-50 text-black mx-auto">
      <h1 className="font-bold text-center mb-2 text-2xl">{props.title}</h1>

      <p className="font-medium text-center mb-2">{props.text}</p>

      <div className="mb-4 mt-4">
        <h2 className="text-center font-semibold">Email:</h2>
        <input
          className="bg-gray-200 border-2 border-black rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type={"text"}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-0">
        <h2 className="text-center font-semibold">Password:</h2>
        <input
          className="bg-gray-200 border-2 border-black rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type={"password"}
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage();
          }}
        />
      </div>

      {props.type === "login" && (
        <div className="mt-8 flex flex-col">
          <button
            className="w-2/3 self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              login(email, password).then((res) => {
                if (res.error) {
                  logInError = true;
                  setMessage(res.errorMessage);
                } else {
                  logInError = false;
                  setMessage("");
                  navigate("/search");
                }
              });
            }}
          >
            Log In
          </button>
        </div>
      )}

      {props.type === "register" && (
        <div className="mt-8 flex flex-col">
          <button
            className="w-2/3 self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              register(email, password).then((res) => {
                if (res.error) {
                  registerError = true;
                  setMessage(res.errorMessage);
                } else {
                  registerError = false;
                  setMessage("");
                  navigate("/login");
                }
              });
            }}
          >
            Register
          </button>
        </div>
      )}

      {/* <div style={{ height: "3rem", paddingTop: "1rem" }}>
        {!!message && <div> {message + "."} </div>}
      </div> */}
    </div>
  );
};

export default UserContol;
