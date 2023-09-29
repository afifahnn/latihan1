import React from 'react'

export const Card = () => {
  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-indigo-300 to-purple-400'>
      <div className='flex bg-slate-100 bg-opacity-60 shadow-xl p-5 rounded-2xl gap-10'>
        <div className='flex items-center gap-4'>
            <div className='flex flex-col'>
              <p className='text-base font-bold'>Nama</p>
              <p className='text-base font-bold'>Alamat</p>
              <p className='text-base font-bold'>Email</p>
              <p className='text-base font-bold'>Motto Hidup</p>
            </div>
            <div>
              <p className='text-base'>:</p>
              <p className='text-base'>:</p>
              <p className='text-base'>:</p>
              <p className='text-base'>:</p>
            </div>
            <div>
              <p className='text-base'>Afifah Nur Nabila</p>
              <p className='text-base'>Klaten</p>
              <p className='text-base'>afifah.nn74@gmail.com</p>
              <p className='text-base'>just life</p>
            </div>
          </div>
          <div className=''>
              <img src='https://i1.sndcdn.com/avatars-000566055321-ffydsa-t500x500.jpg' className='w-40 rounded-lg'/>
          </div>
      </div>
    </div>
  )
}
