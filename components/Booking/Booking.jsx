'use client'
import React from 'react';
import AutoCompleteAddress from './AutoCompleteAddress';

function Booking() {
    const screenHeight = window.innerHeight * 0.72;
    return (
        <div>
            <div className="p-2 md:p-6 border-[2px] rounded-xl" style={{ height: screenHeight }}>
                <p className="text-[22px] font-bold">
                    Book a Ride
                </p>

                <AutoCompleteAddress />

                <button className=' p-4 bg-black w-full mt-5 text-white font-bold rounded-lg'>
                    Search Rides
                </button>
            </div>
        </div>
    )
}

export default Booking;