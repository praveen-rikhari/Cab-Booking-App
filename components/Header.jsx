import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='p-5 pb-3 pl-10 border-b-[2px] border-gray-300 flex items-center justify-between'>
            <div className='flex gap-24 items-center'>

                <div className="flex items-center">
                    <Link legacyBehavior href="/">
                        <a className="cursor-pointer" style={{ textDecoration: 'none' }}>
                            <Image
                                src='/logo.png'
                                width={80}
                                height={80}
                                alt='Logo'
                                className='cursor-pointer'
                            />
                        </a>
                    </Link>
                    <span className="text-2xl font-bold ml-3 italic">
                        Speedy.
                        <span className="text-yellow-400 text-2xl font-bold py-1" style={{ fontStyle: 'normal' }}>Go</span>
                    </span>
                </div>
            </div>
            <UserButton />
        </div>

    )
}

export default Header;