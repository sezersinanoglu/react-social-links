import React from 'react'
import { MdOutlinePlace } from "react-icons/md";
import profile from '../assets/profile_sezer.jpg'
const Hero = () => {
  return (
    <>
      <div className="container">
        <img className='profile-img' src="https://pbs.twimg.com/profile_images/1295747854062026753/6RSVl3E1_400x400.jpg" alt="profile-img" />
        <p>@sezersinanoglu</p>
        <h2><MdOutlinePlace/> Konya / TURKEY</h2>
        <div className="content light">
            <h2>Welcome to my social page! 👋</h2>
            <p>Check out my links below.</p>
        </div>
      </div>
    </>
  )
}

export default Hero;
