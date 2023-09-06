import React, { useState } from 'react'
import './Front.css'
import C from './C.png'
import Youtube from 'react-youtube';
import Pitch from './Pitch';
import Details from './Details';
import Discussion from './Discussion';
import Updates from './Updates';

function Front() {
  const [selectedC, setSelectedC]=useState(null);
  const handleClick =(namee)=>{
    switch(namee){
      case 'Pitch':
        setSelectedC(<Pitch/>)
        break;
      case 'Details':
        setSelectedC(<Details/>)
        break;
      case 'Discussion':
        setSelectedC(<Discussion/>)
        break;
      case 'Updates':
        setSelectedC(<Updates/>)
        break;
      default:
        setSelectedC(null);
    }
  }
  

  return (
    <>
    <div className='Front'>
    <section className='firstSec'>
          <p style={{cursor:'pointer',marginTop:"10px"}}> &lt;  Back</p>
          <div className='topFront'>  
              <div className='left2'>  
                  <img src={C} alt='C'/>
                  <div className='writing'>
                      <h1>CoslQ</h1>
                      <p>Delhi,</p>
                  </div>
              </div>
              <div className='right2'>
                  <button>Save</button>
                  <button>Share</button>
              </div>
          </div>    
    </section>
              <hr id='hr1'/>
              <div className='tags'>
                  <span className='span1'>#BEAUTY & PERSONAL CARE</span>
                  <span className='span2'>#SHARK TANK</span>
                  <span className='span3'>#FMCG</span>
              </div>
    <section className='content'>
            <div className='afterdiv2'>
                <h1>Molecular skincare brand focussed on safe & visible results</h1>
                <p><span>https://mycosiq.com</span>  <span>AAGCI5003E</span></p>
            </div>
                <div className='afterdiv'>
                <div className='youtubeleft'>
                <Youtube videoId="kFII05-bhGU"/>
              <p>Unable to view video? <a href='https://www.youtube.com/watch?v=kFII05-bhGU'>Click Here</a></p>
                </div>
                <div className='youtuberight'>
                  <h1>Rs1455000</h1>
                  <p>56.40 % of minimum goal raised</p>
                  <h1>114</h1>
                  <p>Total investors</p>
                  
                <div className='btn2'>
                  <button className='loginB'>Login to invest </button>
                  <button className='ExpB'>Campaign Expired</button>
                </div>
                </div>
                </div>
    </section>
        <section className='content2'>
              <div className='btn3'>
                <span className='lowerNav'><button onClick={()=>{return handleClick('Pitch')}}>Pitch</button></span>
                <span className='lowerNav'><button onClick={()=>{return handleClick('Details')}}>Details</button></span>
                <span className='lowerNav'><button onClick={()=>{return handleClick('Discussion')}}>Discussion</button></span>
                <span className='lowerNav'><button onClick={()=>{return handleClick('Updates')}}>Updates</button></span>
              </div>
              
              <div className='insideC'>
              <div className='box'>{selectedC}</div>
              <div className='rBox'>
                <h1>Documents</h1>
                <div className='zipLink'>
                  <h4>CoslQ</h4>
                  <h3>DOwnload logo</h3>
                </div>
                <div className='boxes'>
                  <h1>5</h1>
                  <hr/>
                  <p>Rewards</p>
                  <ul>
                    <li>
                      c
                    </li>
                  </ul>
                  <h4>Terms and Conditions</h4>
                  <p>Community Participants offer</p>
                  <button> 5</button>
                  <p><b>CSOP </b> Limited <b>(30 of 100)</b> left</p>
                </div>
                <div className='boxes'>
                  <h1>5</h1>
                  <hr/>
                  <p>Rewards</p>
                  <ul>
                    <li>
                      c
                    </li>
                  </ul>
                  <h4>Terms and Conditions</h4>
                  <p>Community Participants offer</p>
                  <button> 5</button>
                  <p><b>CSOP </b> Limited <b>(30 of 100)</b> left</p>
                </div>
                <div className='boxes'>
                  <h1>5</h1>
                  <hr/>
                  <p>Rewards</p>
                  <ul>
                    <li>
                      c
                    </li>
                  </ul>
                  <h4>Terms and Conditions</h4>
                  <p>Community Participants offer</p>
                  <button> 5</button>
                  <p><b>CSOP </b> Limited <b>(30 of 100)</b> left</p>
                </div>
                <div className='mainBox'>
                <div className='boxes'>
                  <h1>5</h1>
                  <hr/>
                  <p>Rewards</p>
                  <ul>
                    <li>
                      c
                    </li>
                  </ul>
                  <h4>Terms and Conditions</h4>
                  <p>Community Participants offer</p>
                  <button> 5</button>
                  <p><b>CSOP </b> Limited <b>(30 of 100)</b> left</p>
                </div>
                <div className='boxes'>
                  <h1>5</h1>
                  <hr/>
                  <p>Rewards</p>
                  <ul>
                    <li>
                      c
                    </li>
                  </ul>
                  <h4>Terms and Conditions</h4>
                  <p>Community Participants offer</p>
                  <button> 5</button>
                  <p><b>CSOP </b> Limited <b>(30 of 100)</b> left</p>
                </div>

              </div>
              </div>
              </div>
        </section>
    </div>
    </>
  )
}

export default Front