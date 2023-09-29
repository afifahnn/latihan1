import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'
import { AboutUs } from '../pages/AboutUs'
import { Gallery } from '../pages/Gallery'

export const Router1 = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
        </Routes>
    </BrowserRouter>
  )
}
