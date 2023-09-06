import React from 'react'
import { useState,useEffect } from 'react';
import Logo from './logo.png';
import './Navbar.css'

function Navbar() {
    const [show,updateShow]=useState(false)
  useEffect(()=>{
// //     // whenever we scroll down 100px show gets updated
     window.addEventListener('scroll',()=>{
      if(window.scrollY>100){
          updateShow(true);
      }else updateShow(false) ;
     });
// //     //  everytime page is refreshed event listener gets removed
     return ()=>{window.removeEventListener('scroll');}
  },[])

// ${show && 'Nav_dark'} 
  return (
    <>
        <div className={`Nav ${show && 'Nav_dark'}`}>
        <img src={Logo} alt="PepcornsLogo"/>
        <div className='mid'>
        <ul>
        <li>StartUps</li>
        <li>Raising Funds</li>
        <li>Learn</li>
        </ul>
        </div>
        <div className='right'>
            <button className='btn'>Login</button>
            <button className='btn'>Get Started</button>
        </div>
      </div>
    </>
  )
}

export default Navbar