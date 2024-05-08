"use client"

import React, { useContext, useState } from 'react';
import AutoCompleteAddress from './AutoCompleteAddress';
import Cars from './Cars';
import Cards from './Cards';
import { useRouter } from 'next/navigation';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';

function Booking() {
    // const screenHeight = window.innerHeight * 0.72; style={{ height: screenHeight }}
    const [amount, setAmount] = useState();
    const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);
    const router = useRouter()
    console.log(typeof carAmount)

    return (
        <div>
            <div className="p-2 md:p-6 border-[2px] rounded-xl" >
                <p className="text-[24px] font-bold">
                    Book a Ride
                </p>

                <AutoCompleteAddress />
                <Cars />
                <Cards />

                <button
                    className={
                        `w-full p-4 mt-5 font-bold rounded-md 
                        ${!carAmount ? 'bg-gray-200 cursor-not-allowed opacity-70' : 'bg-yellow-500 hover:bg-[#f5bb06]'} 
                        `
                    }
                    disabled={!carAmount}
                    onClick={() => router.push('/payment?amount=' + carAmount)}
                >
                    Book Ride
                </button>
            </div>
        </div>
    )
}

export default Booking;