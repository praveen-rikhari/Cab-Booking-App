import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function AutoCompleteAddress() {

    const [source, setSource] = useState()
    const [addressList, setAddressList] = useState([]);
    const [destination, setDestination] = useState();

    const [sourceChange, setSourceChange] = useState(false)
    const [destinationChange, setDestinationChange] = useState(false);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getAddressList()
        }, 1000)

        return () => clearTimeout(delayDebounceFn)

    }, [source, destination]);


    const getAddressList = async () => {
        setAddressList([]);

        const res = await fetch('/api/search-address?q=' + source, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        const result = await res.json();
        setAddressList(result)

    }
    return (
        <>
            <div className='relative'>
                <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
                    <Image src={'/source.png'} width={15} height={15} />

                    <input
                        type="text"
                        placeholder={'Pickup Location'}
                        className='bg-transparent w-full outline-none'
                        value={source}
                        onChange={(e) => {
                            setSource(e.target.value)
                            setSourceChange(true)
                        }}
                    />
                </div>

                {
                    addressList?.suggestions && sourceChange ?
                        <div className='shadow-md p-1 rounded-md absolute w-full bg-white z-20'>
                            {
                                addressList?.suggestions.map((item, index) => (
                                    <h2
                                        key={index}
                                        className='p-3 hover:bg-gray-100 cursor-pointer'
                                        onClick={() => {
                                            setSource(item.full_address);
                                            setAddressList([]);
                                            setSourceChange(false)
                                        }}
                                    >
                                        {item.full_address}
                                    </h2>
                                ))
                            }
                        </div> : null
                }
            </div>

            <div className='relative'>
                <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
                    <Image src={'/dest.png'} width={15} height={15} />

                    <input
                        type="text"
                        placeholder={'DropOff Location'}
                        className='bg-transparent w-full outline-none'
                        value={destination}
                        onChange={(e) => {
                            setDestination(e.target.value)
                            setDestinationChange(true)
                        }}
                    />
                </div>


                {
                    addressList?.suggestions && destinationChange ?
                        <div className='shadow-md p-1 rounded-md absolute w-full bg-white z-20'>
                            {
                                addressList?.suggestions.map((item, index) => (
                                    <h2
                                        key={index}
                                        className='p-3 hover:bg-gray-100 cursor-pointer'
                                        onClick={() => {
                                            setDestination(item.full_address);
                                            setAddressList([]);
                                            setDestinationChange(false)
                                        }}
                                    >
                                        {item.full_address}
                                    </h2>
                                ))
                            }
                        </div> : null
                }
            </div >
        </>
    )
}

export default AutoCompleteAddress;