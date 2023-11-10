import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/authLoginSlice";
import authMovieSlice from "./movie/authMovieSlice";

// kotak yang berisi reducer yang ada
export default combineReducers ({
    auth : authLoginSlice,
    movie : authMovieSlice
})