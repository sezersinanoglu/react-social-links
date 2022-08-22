import React from 'react'
import { MdOutlinePlace } from "react-icons/md";
import profile from '../assets/profile_sezer.jpg'
const Hero = () => {
  return (
    <>
      <div className="container">
        <img className='profile-img' src={profile} alt="profile-img" />
        <p>@sezersinanoglu</p>
        <h2><MdOutlinePlace/> Konya /Selçuklu /TURKEY</h2>
        <div className="content">
            <h2>Welcome to my social page! 👋</h2>
            <p>Check out my links below.</p>
        </div>
      </div>
    </>
  )
}

export default Hero;
