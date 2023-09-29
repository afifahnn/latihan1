import React from 'react'
import { RenderList } from '../assets/components/RenderList'

export const TodoList = () => {
    let data = [
        {
            nama : 'Afifah',
            umur : 19,
            check : true
        },
        {
            nama : 'Paijo',
            umur : 20,
            check : false
        },
        {
            nama : 'Salto',
            umur : 21,
            check : false
        },
        {
            nama : 'Bagas',
            umur : 22,
            check : false
        },
        {
            nama : 'Samin',
            umur : 23,
            check : false
        }
    ]

    const renderList=()=>{

        return (
            data.map((value) => {
                return <RenderList data={value}/>
            })
        )
    }

  return (
    <div className='flex flex-col h-screen justify-center items-center gap-4'>
        {renderList()}
    </div>
  )
}