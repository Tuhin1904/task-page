import React from 'react'
import './Details.css'
import f1 from './founder1.png'
import f2 from './founder2.png'
import {FaLinkedin,FaFacebookSquare,FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom';


function Details() {
  return (
    <div className='details'>
      <h1 id='team'>Team</h1>
      <div className='founders'>
        <span className='F1'>
            <img src={f1}/>
            <h2>Angad Talwar</h2>
            <h5>Co-founder</h5>
            <div className='iconss'>
                <a href='https://www.facebook.com' target='_blank'><FaFacebookSquare/></a>
                <a href='https://www.linkedin.com' target='_blank'><FaLinkedin/></a>
                <a href='https://www.twitter.com' target='_blank'><FaTwitterSquare/></a>
            </div>
            <span className='uBox' >
                <p>START DATE</p>
                <h3>2023-07-09</h3>
                <p>Ends in 0 Days</p>
            </span>
        </span>
        <span className='F2'>
            <img src={f2}/>
            <h2>Kanika Talwar</h2>
            <h5>Co-founder</h5>
            <div className='iconss'>
                <a href='https://www.facebook.com' target='_blank'><FaFacebookSquare/></a>
                <a href='https://www.linkedin.com' target='_blank'><FaLinkedin/></a>
                <a href='https://www.twitter.com' target='_blank'><FaTwitterSquare/></a>
            </div>
            <span className='uBox'>
                <p>START DATE</p>
                <h3>2023-07-09</h3>
                <p>Ends in 0 Days</p>
        </span>
        </span>
      </div>
      <div className='FAQ'>
        <h2>FAQ</h2>
        <div className='qadiv'>
        <h3>What is CosIQ's unique selling proposition (USP)?</h3>
        <p>We are a clean go-to option for customers looking for active-based skincare that is safe, effective & affordable. We are a brand leveraging the plus points of Pharma, Beauty & FMCG industries rolled into one, comprehensive product range. Each product is made using multifaceted ingredients that enhance the general health of your skin.</p>
        </div>
        <div className='qadiv'>
        <h3>What is the market size and growth potential for the skincare industry?</h3>
        <p>The global skincare market is projected to reach $189.3 billion by 2025, with a compound annual growth rate (CAGR) of 4.39%. This growth is driven by increasing awareness about skincare, the rise in demand for natural and organic skincare products, and the growth of e-commerce.</p>
        </div>
        <div className='qadiv'>
        <h3>What is the competitive landscape for CosIQ?</h3>
        <p>There are several competitors in the skincare industry, but we differentiate ourselves by offering safe and intelligent skincare products; Our brand is non-toxic certified. We also prioritize customer education and transparency, providing clear information about our ingredients and formulations.</p>
        </div>
        <div className='qadiv'>
        <h3>What will CosIQ use the funds raised from investors for?</h3>
        <p>We plan to allocate the funds towards product development and marketing initiatives to further grow our brand and increase awareness of our products. This includes developing new formulations, improving our product line, and expanding our marketing efforts.</p>
        </div>
        <div className='qadiv'>
        <h3>Buzz? Collaboration with the OTT series?</h3>
        <p>We have partnered with one of the top OTT (over-the-top) series to feature our products. This collaboration will increase our brand exposure and provide a unique opportunity to connect with a wider audience. We believe this partnership will be beneficial for both CosIQ and the OTT series.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Details