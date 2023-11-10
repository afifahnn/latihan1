import React from 'react'
import { ViewRedux } from '../assets/components/renderRedux/ViewRedux'
import { ButtonRedux } from '../assets/components/renderRedux/ButtonRedux'

export const Redux = () => {
  return (
    <div className='flex w-[100%] items-center h-screen'>
      <div className='w-[30%]'>
        <ViewRedux/>
      </div>
      <div className='w-[70%]'>
        <ButtonRedux/>
      </div>
    </div>
  )
}
