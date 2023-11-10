import React, { useEffect, useState } from 'react'
import { useGetDataUser } from '../../services/auth/get_user'
// import { toast } from 'react-toastify'
import { CookieStorage, CookieKeys } from '../../utils/cookies'
import { Render } from '../../assets/components/Render';
import { getDataMovie } from '../../services/get-data-movie'

export const Dashboard = () => {
    const { data: myData , status } = useGetDataUser({})
    const [LoadData, setLoadData] = useState([]);

    // toast.error(<div><button onClick={()=>{alert("tesss")}}>testing</button></div>)

    useEffect(() => {
      // if (isError) {
      //   toast.error("ini error")
      // }
      // console.log(isError, "error")
      console.log(myData)
      getDataMovie()
      .then((data) => setLoadData(data.results))
      .catch((error) => console.error("Error", error));
    }, [myData, status])
    

  return (
    <div className="bg-slate-900 p-[2rem]">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center m-[1rem]">
          <div className="text-[2rem] font-extrabold bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 text-transparent bg-clip-text">
            Movielist
          </div>
          <div className="flex gap-4">
            <div className="px-5 py-1 border-2 border-white bg-transparent rounded-3xl text-white hover:opacity-70">
              <button onClick={() => {
                CookieStorage.remove(CookieKeys.AuthToken)
                window.location.href = '/'
              }} className="w-full h-full">Logout</button>
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
  )
}
