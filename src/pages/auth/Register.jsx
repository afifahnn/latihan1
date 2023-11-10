import React from "react";
import { useState } from "react";
import { useCreateUser } from "../../services/auth/register_user";
import { Link, useNavigate } from "react-router-dom";
import { GrMail } from 'react-icons/gr'
import { RiLockPasswordFill } from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'

export const Register = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const { mutate: registerUser, isSuccess, error } = useCreateUser();

  const navigate = useNavigate();

  const register = () => {
    registerUser({
      email: Email,
      name: Username,
      password: Password,
    });
  };

     if (isSuccess) {
      console.log("registration success")
      navigate("/");
    }

  if (error) {
    console.log(error.response.data.message, "error")
  }

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "username") {
        setUsername(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-900'>
      <div className='flex flex-col justify-center items-center space-y-4 py-[4rem] px-[3rem] rounded-lg bg-slate-100 shadow-lg'>
        <div className='text-[1.5rem] font-bold'>REGISTER</div>
        <div className='space-y-3'>
            <div className='flex justify-between items-center border-2 w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300'>
                <div><GrMail size={20}/></div>
                <input onChange={handleInput} id='email' className='border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic pl-3' type='text' placeholder="Email"/>
            </div>
            <div className='flex justify-between items-center border-2 w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300'>
                <div><FaUserAlt size={20}/></div>
                <input onChange={handleInput} id='username' className='border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic pl-3' type='text' placeholder="Username"/>
            </div>
            <div className='flex justify-between items-center border-2 w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300'>
                <div><RiLockPasswordFill size={20}/></div>
                <input onChange={handleInput} id='password' className='border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic pl-3' type='password' placeholder="Password"/>
            </div>
        </div>
        <div className='flex justify-center items-center rounded-3xl w-[10rem] h-[2.5rem] bg-slate-900 shadow-md hover:opacity-80'>
            <button onClick={() => {register()}} className='w-full h-full text-white shadow-2xl'>Create Account</button>
        </div>
        <div className='flex gap-2'>
            <div>Already have an account?</div>
            <Link to={'/Login'}>
              <button className='text-slate-900 hover:opacity-80'>Login</button>
            </Link>
        </div>
        </div>
    </div>
  );
};
