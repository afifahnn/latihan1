import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MovieList } from "../pages/MovieList";
import { LoginPage } from "../pages/auth/LoginPage";
import { Register } from "../pages/auth/Register";
import { Dashboard } from "../pages/halamanRouter/Dashboard";

export const RouterMovie = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MovieList />} /> */}
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
};
