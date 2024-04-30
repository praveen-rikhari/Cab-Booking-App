import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
    const headerMenu = [
        {
            id: 1,
            name: 'Ride',
            icon: '/taxi.jpeg'
        },
        {
            id: 2,
            name: 'Package',
            icon: '/box.jpeg'
        }
    ]
    return (
        <div className='p-5 pb-3 pl-10 border-b-[2px] border-gray-300 flex items-center justify-between'>
            <div className='flex gap-24 items-center'>
                <div className="flex items-center">
                    <Image
                        src='/logo.png'
                        width={80} height={80}
                        alt='Logo' className='cursor-pointer'
                    />
                    <span className="text-2xl font-bold ml-3 italic">
                        Speedy.
                        <span className="text-yellow-400 text-2xl font-bold py-1" style={{fontStyle : 'normal'}}>Go</span>
                    </span>
                </div>

                <div className='flex gap-8 items-center'>
                    {
                        headerMenu.map((item) => (
                            <div className='flex gap-2 items-center' key={item.name}>
                                <Image
                                    src={item.icon}
                                    width={25} height={25}
                                />
                                <h2 className='text-[14px] font-medium'>{item.name}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
            <UserButton />
        </div>

    )
}

export default Header