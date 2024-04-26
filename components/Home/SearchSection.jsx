import React from 'react'
import InputItem from './InputItem'

function SearchSection() {
    return (
        <div>
            <div className="p-2 md:p-6 border-[2px] rounded-xl">
                <p className="text-[22px] font-bold">
                    Book a Ride
                </p>
                <InputItem type='source' />
                <InputItem type='destination' />

                <button className=' p-4 bg-black w-full mt-5 text-white font-bold rounded-lg'>
                    Search Rides
                </button>
            </div>
        </div>
    )
}

export default SearchSection