import React from 'react'

export const Render = ({dataMovie}) => {

    // const deletePokemon=()=>{
    //     props.setData(
    //       props.DataAll.filter( valueFilter =>
    //             valueFilter.name !== props.dataPokemon.name )
    //     )
    //   }

  return (
    <div className='m-3'>
        <span className='text-center flex justify-center items-center p-2 font-bold text-[1rem] text-slate-200 h-[4rem]'>{dataMovie.title}</span>
        <img src={`https://image.tmdb.org/t/p/original/${dataMovie.poster_path}`} alt='Gambar' className='w-[30rem] rounded-xl shadow-md shadow-slate-800'/>
        {/* <button onClick={()=>{deletePokemon()}} className='bg-blue-200'>Delete Pokemon</button> */}
    </div>
  )
}
