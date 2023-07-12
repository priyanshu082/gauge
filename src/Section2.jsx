import React from 'react'
import pik2 from "./assets/water-lg.webp"
import tick from "./assets/tick.svg"
import bluetick from "./assets/blueTick.svg"

export const Section2 = () => {
    return (
        <div className='section2'>
            <div className='left'>
                <div className='left-1'>
                    <img src={bluetick} height={18} width={18} className='bluetick-section2' />
                    <p>Customer Need's Above All Else</p>
                </div>


                <div className='left-2'>
                    <span>Take Control</span>
                    <span className='left-2-orange'>Monitor Usasge & Change Filters</span>
                    <span>No Technician Needed</span>
                </div>


                <div className='left-3'>
                    We have crafted a product that addresses the real frustrations of a customer. The first step is to ensure there are zero service delays.
                </div>


                <div className='left-4'>
                    <img src={tick} />
                    <div className='left-4-sub'>
                        <span className='left-4-supersub'>
                            Smart Water Purifier With Self Servicing Capability
                        </span>
                        <p>
                            Say goodbye to the hassle of scheduling a technician for purifier maintenance with our self-replacing filters.
                        </p>
                    </div>

                </div>
                <div className='left-4'>
                    <img src={tick} />
                    <div className='left-4-sub'>
                        <span className='left-4-supersub'>
                            Compensation For Service Delays
                        </span>
                        <p>
                            You are entitled to a compensation of 100 Rs/Day if service is delayed for more than 24 hours.
                        </p>
                    </div>

                </div>
                <button className='btn-2'>
                 Next:Smart Water Conservation
                </button>
            </div>


            <div className='rightpik'>
                <img src={pik2} height={700} width={660} />
            </div>


        </div>
    )
}

export default Section2