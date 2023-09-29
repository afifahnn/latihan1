import React, { useEffect, useState } from "react";
import axios from "axios";
import { Render } from "../assets/components/Render";
// import { FaHome, FaUserCircle } from "react-icons/fa";

export const Todo = () => {
  const [DataAwal, setDataAwal] = useState([]);
  const [LoadData, setLoadData] = useState([]);
//   const [DataSearch, setDataSearch] = useState("");

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjI1Mzk1YmQ1ZTkwMThhM2NmYTU2ZWZmNDkwMTE5OSIsInN1YiI6IjY1MTQxZDljZWE4NGM3MDEwYzEwZGQxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6BvwoA6hROq86_PUhZ6k2L36v1mN36oOx5r88z3KIlk",
    },
  };

  const getDataMovie = async () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.results);
        setLoadData(response.data.results);
        setDataAwal(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getDataMovie();
  }, []);

  // const filterData = (e) => {
  //     setLoadData(DataAwal.filter(valueFilter =>
  //         valueFilter.name.includes(DataSearch)))
  // }

  return (
    <div className="bg-slate-900 p-[2rem]">

      <div className="flex flex-col justify-center items-center p-[2rem] lg:p-[4rem]">
        <div className="font-extrabold text-[2rem] bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 text-transparent bg-clip-text">MOVIE LIST</div>
        <div className="text-center text-[4rem] lg:text-[5rem] font-extrabold bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 text-transparent bg-clip-text">NOW PLAYING</div>
        <div className="flex flex-col justify-center items-center text-slate-200 font-bold text-lg">
          <p className="text-center">Explore the list of movies</p>
          <p className="text-center">Experience a variety of movie genres and feel the excitement</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-[1rem]'>
        {LoadData.map((value, index) => {
          return <Render key={index} setData={setLoadData} dataMovie={value} DataAll={LoadData} />;
        })}
      </div>
    </div>
  );
};
