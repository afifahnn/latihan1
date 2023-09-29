import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';

export const Gallery = () => {
    const navigate = useNavigate()

    const back =()=>{
        navigate('/Dashboard')
    }

  return (
    <div className='gallery'>
        <h1>Gallery</h1>
        <div className='galleryImg'>
            <img src={img1} alt="Image 1" width='300px' />
            <img src={img2} alt="Image 2" width='300px' />
            <img src={img3} alt="Image 3" width='300px' />
        </div>
        <div className='buttonBack'>
            <button onClick={back}>Back to Dashboard</button>
        </div>
    </div>
  )
}
