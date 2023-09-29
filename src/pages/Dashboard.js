import React, { useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import img1 from '../assets/img/img1.jpg';

export const Dashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname)
  const [click, setClick] = useState(0)

  const toAboutUs =()=>{
    if (location.pathname === '/Dashboard') {
      navigate('/AboutUs')
    } else {
      navigate('/Dashboard')
    }
  }

  const toGallery =()=>{
    setClick(click + 1)
    if (click === 2) {
      navigate('/Gallery')
    }
  }

  const back =()=>{
    navigate('/')
  }

  return (
    <div className='dashboard'>
      <div className='content1'>
        <h1>Welcome to Dashboard</h1>
        <img src={img1} alt='' width='300px'></img>
      </div>
      <div className='content2'>
        <h1>Kunjungi page kami :D</h1>
        <div className='buttonDashboard'>
          <button onClick={toAboutUs}>About Us</button>
          <button onClick={toGallery}>Gallery</button>
        </div>
        <div className='buttonBack'>
          <button onClick={back}>Back to Login</button>
        </div>
      </div>
    </div>
  )
}
