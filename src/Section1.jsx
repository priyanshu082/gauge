import React from 'react'
import pik from './assets/mobile-landing.webp'

export const Section1 = () => {
  return (
    <section className='section1'> 
       <div className='leftpik'>
        <img src={pik} height={530} width={530}/>
       </div>
       <div className='right'>
        <div className='right-1'>
         <p>Guage Water Purifier <span className='gradient'>Puts An End</span> To RO Service Pain</p>
        </div>
        <div className='right-2'>
        Fully automatic water purifier provides the highest water savings while ensuring a seamless service experience.
        </div>
        <div className="btn-div">
             <button className='btn' >
            Take a Product tour
        </button>
        </div>
       
        <div className='right-3'>
        Experience Convenience Like Never Before With Our Smart Water Purifier
        </div>
       </div>
    </section>
  )
}

export default Section1