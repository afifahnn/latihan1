import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutUs = () => {
  const navigate = useNavigate()

  const back =()=>{
    navigate('/Dashboard')
  }

  return (
    <div className='aboutUs'>
        <h1>About Us</h1>
        <h2>Welcome to Kelompok 9</h2>
        <h2>Agam Pratama & Afifah Nur Nabila</h2>
        <p>Motto</p>
        <p>"ajinomoto"</p>
        <div className='buttonBack'>
          <button onClick={back}>Back to Dashboard</button>
        </div>
    </div>
  )
}
