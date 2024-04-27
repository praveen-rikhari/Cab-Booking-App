import Image from 'next/image';
import React from 'react';

function AutoCompleteAddress() {
    return (
        <>
            <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
                <Image src={'/source.png'} width={15} height={15} />

                <input
                    type="text"
                    placeholder={'Pickup Location'}
                    className='bg-transparent w-full outline-none'
                />
            </div>
            <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
                <Image src={'/dest.png'} width={15} height={15} />

                <input
                    type="text"
                    placeholder={'DropOff Location'}
                    className='bg-transparent w-full outline-none'
                />
            </div>
        </>
    )
}

export default AutoCompleteAddress