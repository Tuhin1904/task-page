import React, { useState } from 'react'
import './Front.css'
import C from './C.png'
import Youtube from 'react-youtube';
import Pitch from './Pitch';
import Details from './Details';
import Discussion from './Discussion';
import Updates from './Updates';
import {FaCloudDownloadAlt,FaGlobe} from 'react-icons/fa'

function Front() {
  const [selectedC, setSelectedC]=useState(<Pitch/>);
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
                <p><span><FaGlobe size={'12'}/> https://mycosiq.com</span> <span>AAGCI5003E</span></p></div>
            
                <div className='afterdiv'>
                <div className='youtubeleft'>
                <Youtube videoId="kFII05-bhGU"/>
              <p>Unable to view video? <a href='https://www.youtube.com/watch?v=kFII05-bhGU'>Click Here</a></p>
                </div>
                <div className='youtuberight'>
                  <h1>Rs1455000</h1>
                  <p>56.40 % of minimum goal raised</p>
                  <h1>114</h1>
                  <p style={{marginTop:'0'}}>Total investors</p>
                  
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
                <h1 id="doc">Documents</h1>
                <div className='zipLink'>
                  <h2>CoslQ.zip</h2>
                  <FaCloudDownloadAlt size={'40'}/>
                </div>
                <div className='allBoxes'>
                <div className='boxes'>
                  <h1>₹ 5000</h1>
                  <hr/>
                  <p className="boldhead">Rewards</p>
                  <ul>
                    <li>
                    Community access & benefits .
                    </li>
                  </ul>
                  <h4 className="boldhead">Terms and Conditions</h4>
                  <p>Community Participants offer</p>
                  <button>₹5000</button>
                  <p><b>CSOP </b> Limited <b>(30 of 100)</b> left</p>
                </div>
                <div className='boxes'>
                  <h1>₹ 10000</h1>
                  <hr/>
                  <p className="boldhead">Rewards</p>
                  <ul>
                    <li>Community access & involvement.</li>
                    <li>Be part of our growth journey.</li>    
                  </ul>
                  <h4 className="boldhead">Terms and Conditions</h4>
                  <p>Community Participants offer</p>
                  <button> ₹10000</button>
                  <p><b>CSOP </b> Limited <b>(73 of 100)</b> left</p>
                </div>
                <div className='boxes'>
                  <h1>₹ 25000</h1>
                  <hr/>
                  <p className="boldhead">Rewards</p>
                  <ul>
                    <li>Community access & benefits</li>
                    <li>Special mention in our community group.</li>
                  </ul>
                  <h4 className="boldhead">Terms and Conditions</h4>
                  <p>Community Participants offer</p>
                  <button> ₹25000</button>
                  <p><b>CSOP </b> Limited <b>(43 of 50)</b> left</p>
                </div>
                <div className='mainBox'>
                <div className='boxes'>
                  <h1>₹ 50000</h1>
                  <hr/>
                  <p className="boldhead">Rewards</p>
                  <ul>
                    <li>Community access & benefits</li>
                    <li>Community perks & notable mention</li> 
                  </ul>
                  <h4 className="boldhead">Terms and Conditions</h4>
                  <p>Community Participants offer</p>
                  <button> ₹50000</button>
                  <p><b>CSOP </b> Limited <b>(17 of 20)</b> left</p>
                </div>
                <div className='boxes'>
                  <h1>₹ 80000</h1>
                  <hr/>
                  <p className="boldhead">Rewards</p>
                  <ul>
                    <li>
                    All of the above + early access to our newly launched product for feedback
                    </li>
                    <li>Community access & benefits</li>
                  </ul>
                  <h4 className="boldhead">Terms and Conditions</h4>
                  <p>Community Participants offer</p>
                  <button> ₹80000</button>
                  <p><b>CSOP </b> Limited <b>(5 of 10)</b> left</p>
                </div>
                <div className='boxes'>
                  <h1>₹ 90000</h1>
                  <hr/>
                  <p className="boldhead">Rewards</p>
                  <ul>
                    <li>
                    All of the above + Receive a fresh coupon each quarter!
                    </li>
                    <li>Community access & benefits</li>
                  </ul>
                  <h4 className="boldhead">Terms and Conditions</h4>
                  <p>Community Participants offer</p>
                  <button> ₹90000</button>
                  <p><b>CSOP </b> Limited <b>(5 of 10)</b> left</p>
                </div>
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