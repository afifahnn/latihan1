import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { gantiBrand, hapusList, kurangMakeup, tambahList, tambahMakeup } from '../../../redux/action/manipulasi'

export const ButtonRedux = () => {
  const [DataBedak, setDataBedak] = useState("")
    const dispatch = useDispatch()

  return (
    <div className='flex flex-col space-y-6 m-4'>
      Ganti Nama Brand : <input onChange={(e) => {
        dispatch(gantiBrand({
          namaBrand : e.target.value,
          penerbit : "sedang di cari"
        }))
      }} className='border border-slate-800 rounded-sm w-[20rem] h-8 p-1'/>
      <div className='space-x-6'>
        Edit Jumlah : <br/>
        <button onClick={() => {
            dispatch(tambahMakeup())
        }} className='bg-cyan-700 text-white p-1 rounded-md hover:opacity-80'>Tambah makeup</button>
        <button onClick={() => {
          dispatch(kurangMakeup())
        }} className='bg-cyan-700 text-white p-1 rounded-md hover:opacity-80'>Kurang makeup</button>
      </div>
      <div className='space-x-6'>
        Hapus List : 
        <button onClick={() => {
          dispatch(hapusList())
        }} className='bg-emerald-700 text-white p-1 ml-4 rounded-md hover:opacity-80'>Hapus</button> <br/>
        Tambah List : <br/>
        <input onChange={(e)=>{setDataBedak(e.target.value)}} className='border border-slate-800 rounded-sm w-[20rem] h-8 p-1'/>
        <button onClick={() => {
          dispatch(tambahList(DataBedak))
        }} className='bg-emerald-700 text-white p-1 rounded-md hover:opacity-80'>Tambah</button>
      </div>
    </div>
  )
}
