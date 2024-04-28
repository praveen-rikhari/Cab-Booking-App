import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import { v4 } from 'uuid';
const MAPBOX_RETRIEVE_URL = 'https://api.mapbox.com/search/searchbox/v1/retrieve/'

function AutoCompleteAddress() {

    const [source, setSource] = useState()
    const [addressList, setAddressList] = useState([]);
    const [destination, setDestination] = useState();

    const [sourceChange, setSourceChange] = useState(false)
    const [destinationChange, setDestinationChange] = useState(false);

    const [soruceCordinates, setSourceCordinates] = useState([]);
    const [destinationCordinates, setDestinationCordinates] = useState([]);

    const sessionToken = v4()

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

    const onSourceAddressClick = async (item) => {
        setSource(item.full_address);
        setAddressList([]);
        setSourceChange(false);

        const res = await fetch(MAPBOX_RETRIEVE_URL + item.mapbox_id + "?session_token=" + sessionToken
            + "&access_token=" + process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })

        const result = await res.json();

        setSourceCordinates(
            {
                lng: result.features[0].geometry.coordinates[0],
                lat: result.features[0].geometry.coordinates[1],
            }
        )
    }

    const onDestinationAddressClick = async (item) => {
        setDestination(item.full_address);
        setAddressList([]);
        setDestinationChange(false)

        const res = await fetch(MAPBOX_RETRIEVE_URL + item.mapbox_id + "?session_token=" + sessionToken
            + "&access_token=" + process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })

        const result = await res.json();

        setDestinationCordinates(
            {
                lng: result.features[0].geometry.coordinates[0],
                lat: result.features[0].geometry.coordinates[1],
            }
        )
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
                                            onSourceAddressClick(item);
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
                                            onDestinationAddressClick(item);
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