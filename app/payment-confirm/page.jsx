"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function PaymentConfirmation() {
    const router = useRouter();

    return (
        <div className='bg-[#f1f1f1] min-h-screen flex flex-col items-center justify-center'>
            <h2 className='text-3xl text-center z-20 mb-6'>
                Thank You, Payment Confirmed !!!
            </h2>

            <div className='w-full md:w-96 flex justify-center'>
                <Image
                    src='/cabconfirm.gif'
                    width={500}
                    height={150}
                    className='object-cover' />
            </div>

            <h2 className='font-bold text-xl mt-4 mb-8'>
                Cab Booked Successfully...
            </h2>
            
            <button className='py-2 px-6 bg-yellow-500 rounded-lg hover:bg-[#f5bb06]' onClick={() => router.push('/')}>
                Go Home
            </button>
        </div>
    )
}

export default PaymentConfirmation
