import React from 'react'
import Img1 from './Pitch Images/01.png'
import Img2 from './Pitch Images/02.png'
import Img3 from './Pitch Images/03.png'
import Img4 from './Pitch Images/04.png'
import Img5 from './Pitch Images/05.png'
import Img6 from './Pitch Images/06.png'
import Img7 from './Pitch Images/07.png'
import Img8 from './Pitch Images/08.png'
import Img9 from './Pitch Images/09.png'
import Img10 from './Pitch Images/10.png'
import './Pitch.css'

function Pitch() {
  return (
    <div className='mainPitch'>
    <div className='Pitch'>
    <img src={Img1} alt='pitch images'/>
    <img src={Img2} alt='pitch images'/>
    <img src={Img3} alt='pitch images'/>
    <img src={Img4} alt='pitch images'/>
    <img src={Img5} alt='pitch images'/>
    <img src={Img6} alt='pitch images'/>
    <img src={Img7} alt='pitch images'/>
    <img src={Img8} alt='pitch images'/>
    <img src={Img9} alt='pitch images'/>
    <img src={Img10} alt='pitch images'/>
    </div>
    </div>
  )
}

export default Pitch