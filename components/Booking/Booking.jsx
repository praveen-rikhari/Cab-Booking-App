'use client'
import React from 'react';
import AutoCompleteAddress from './AutoCompleteAddress';
import Cars from './Cars';
import Cards from './Cards';

function Booking() {
    // const screenHeight = window.innerHeight * 0.72; style={{ height: screenHeight }}
    return (
        <div>
            <div className="p-2 md:p-6 border-[2px] rounded-xl" >
                <p className="text-[24px] font-bold">
                    Book a Ride
                </p>

                <AutoCompleteAddress />
                <Cars/>
                <Cards/>
                <button className=' p-4 bg-black w-full mt-5 text-white font-bold rounded-lg'>
                    Search Rides
                </button>
            </div>
        </div>
    )
}

export default Booking;