import React from "react";
import { useState } from "react";
import { useLoginUser } from "../../services/auth/login_user";
import { Link } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";

export const LoginPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const { mutate: loginUser, data, isSuccess, error } = useLoginUser();

  const login = () => {
    loginUser({
      email: Email,
      password: Password,
    });
  };

  if (isSuccess && data) {
    console.log("login success");
    window.location.href = "/Dashboard"
    // localStorage.setItem("token", data.data.data.token)
    // sessionStorage.setItem("token", data.data.data.token)
  }

  if (error) {
    console.log(error.response.data.message, "ini error");
    // console.log(error, "ini error")
  }

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-900">
      <div className="flex flex-col justify-center items-center space-y-4 py-[4rem] px-[3rem] rounded-lg bg-slate-100 shadow-lg">
        <div className="text-[1.5rem] font-bold">LOGIN</div>
        <div className="space-y-3">
          <div className="flex justify-between items-center border-2 w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300">
            <div>
              <GrMail size={20} />
            </div>
            <input onChange={handleInput} id="email" className="border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic pl-3" type="text" placeholder="Email"/>
          </div>
          <div className="flex justify-between items-center border-2 w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300">
            <div>
              <RiLockPasswordFill size={20} />
            </div>
            <input onChange={handleInput} id="password" className="border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic pl-3" type="password" placeholder="Password"/>
          </div>
        </div>
        <div className="flex justify-center items-center rounded-3xl w-[10rem] h-[2.5rem] bg-slate-900 shadow-md hover:opacity-80">
          <button
            onClick={() => {
              login();
            }}
            className="w-full h-full text-white shadow-2xl"
          >
            Login Account
          </button>
        </div>
        <div className="flex gap-2">
          <div>Don't have an account yet?</div>
          <Link to={"/Register"}>
            <button className="text-slate-900 hover:opacity-80">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
