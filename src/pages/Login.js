import React, { useState } from "react";
import "../assets/css/page.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");

  const clickButton = () => {
    if (inputUser === "zoro" && inputPass === "zoro") {
      navigate("/Dashboard");
    } else if (inputUser === "" && inputPass === "") {
      alert("Username dan Password belum Anda masukkan");
    } else {
      alert("Username dan Password yang Anda masukkan salah");
    }
  };

  return (
    <div className="login">
      <div className="content">
        <h1>Login Page</h1>
        <div className="inputButton">
          <div className="inputBox">
            <input placeholder="Masukkan Username" value={inputUser} onChange={(e) => setInputUser(e.target.value)}></input>
            <br />
          </div>
          <div className="inputBox">
            <input type="password" placeholder="Masukkan Password" value={inputPass} onChange={(e) => setInputPass(e.target.value)}></input>
            <br />
          </div>
          <div className="buttonClick">
            <button onClick={clickButton}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
