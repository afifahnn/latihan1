import React from 'react'
import { useSelector } from 'react-redux'

export const ViewRedux = () => {
    const data = useSelector((state) => state.makeup)

    const renderList =() => {
      return data.listBedak.map((value, index) => (
        <div key={index}>~ {value}</div>
      ));
    }

  return (
    <div className='flex flex-col m-4 space-y-4'>
      <h1 className='font-bold text-[1.5rem]'>VIEW REDUX</h1>
      <div>Jumlah Makeup : {data.jumlahMakeup} </div>
      <div>Nama Brand : {data.namaBrand} </div>
      <div>Penerbit : {data.penerbit} </div>
      <div>
        List Makeup :
        {renderList()}
      </div>
    </div>
  )
}
