import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const PayAfterRide = () => {
    const router = useRouter();

    const handlePayAfterRideClick = () => {
        router.push('http://localhost:3000/payment-confirm');
    };

    return (
        <div className="max-w-xs mx-auto border border-gray-300 rounded-lg p-4 flex flex-col items-center">
            <div className="mb-2">
                <Image src='/cash.png' width={50} height={15} />
            </div>
            <div className="text-md font-semibold mb-2 text-gray-800">Pay After Ride Option</div>
            <p className="text-sm text-gray-700 mb-2">Select this option if you want to pay after your ride.</p>
            <button
                onClick={handlePayAfterRideClick}
                className="bg-yellow-500 font-semibold py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
            >
                Pay After Ride
            </button>
        </div>
    );
};

export default PayAfterRide;
