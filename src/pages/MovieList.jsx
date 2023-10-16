import {React, useState, useEffect } from 'react';
import { Render } from '../assets/components/Render';
// import { fetchDataMovie, useMovieDataQuery } from '../services/get-data-movie';
// import axios from 'axios';
import { getDataMovie } from '../services/get-data-movie'
import { Link } from 'react-router-dom';

export const MovieList = () => {
  const [LoadData, setLoadData] = useState([]);
  // const [DataAwal, setDataAwal] = useState([]);
  //   const [DataSearch, setDataSearch] = useState("");

  // const [PageNow, setPageNow] = useState(1)

  // const { data: movie } = useMovieDataQuery(PageNow)
  // console.log(movie, "data")

  // const options = {
  //   method: "GET",
  //   url: "https://api.themoviedb.org/3/movie/now_playing",
  //   params: { language: "en-US", page: "1" },
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjI1Mzk1YmQ1ZTkwMThhM2NmYTU2ZWZmNDkwMTE5OSIsInN1YiI6IjY1MTQxZDljZWE4NGM3MDEwYzEwZGQxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6BvwoA6hROq86_PUhZ6k2L36v1mN36oOx5r88z3KIlk",
  //   },
  // };

  // const getDataMovie = async () => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       console.log(response.data.results);
  //       setLoadData(response.data.results);
  //       setDataAwal(response.data.results);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  useEffect(() => {
    getDataMovie()
      .then((data) => setLoadData(data.results))
      .catch((error) => console.error("Error", error));
  }, []);

  // const filterData = (e) => {
  //     setLoadData(DataAwal.filter(valueFilter =>
  //         valueFilter.name.includes(DataSearch)))
  // }

  return (
    <div className="bg-slate-900 p-[2rem]">
      {/* SEARCH BAR */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center m-[1rem]">
          <div className="text-[2rem] font-extrabold bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 text-transparent bg-clip-text">
            Movielist
          </div>
          <div className="flex gap-4">
            <div className="px-5 py-1 border-2 border-white  bg-transparent rounded-3xl text-white hover:opacity-70">
              <Link to={'/Login'}>
              <button className="w-full h-full">Login</button>
              </Link>
            </div>
            <div className="px-5 py-1 rounded-3xl border-2 border-white bg-white text-slate-900 hover:opacity-70">
              <Link to={'/Register'}>
                <button className="w-full h-full">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-[2rem] lg:p-[4rem]">
        <div className="font-extrabold text-[2rem] bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 text-transparent bg-clip-text">
          MOVIE LIST
        </div>
        <div className="text-center text-[4rem] lg:text-[5rem] font-extrabold bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 text-transparent bg-clip-text">
          NOW PLAYING
        </div>
        <div className="flex flex-col justify-center items-center text-slate-200 font-bold text-lg">
          <p className="text-center">Explore the list of movies</p>
          <p className="text-center">
            Experience a variety of movie genres and feel the excitement
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-[1rem]">
        {LoadData.map((value, index) => {
          return (
            <Render
              key={index}
              setData={setLoadData}
              dataMovie={value}
              DataAll={LoadData}
            />
          );
        })}
      </div>
    </div>
  );
};
