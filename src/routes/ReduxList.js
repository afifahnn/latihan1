import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Redux } from '../pages/Redux'

export const ReduxList = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Redux/>}/>
        </Routes>
    </BrowserRouter>
  )
}
