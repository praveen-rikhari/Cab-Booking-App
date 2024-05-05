'use client'
import React from 'react';
import AutoCompleteAddress from './AutoCompleteAddress';
import Cars from './Cars';
import Cards from './Cards';
import { useRouter } from 'next/router';

function Booking() {
    // const screenHeight = window.innerHeight * 0.72; style={{ height: screenHeight }}
    const [amount, setAmount] = useState();
    const router = useRouter()

    return (
        <div>
            <div className="p-2 md:p-6 border-[2px] rounded-xl" >
                <p className="text-[24px] font-bold">
                    Book a Ride
                </p>

                <AutoCompleteAddress />
                <Cars onCarSelectAmount={(amount) => setAmount(amount)} />
                <Cards />
                <button className=' p-4 bg-yellow-500 w-full mt-5
                 text-white font-bold rounded-lg
                  hover:bg-[#f5bb06]'

                    onClick={() => router.push('/payment')}
                >
                    Search Rides
                </button>
            </div>
        </div>
    )
}

export default Booking;