import { DirectionDataContext } from '@/context/DirectionDataContext';
import React, { useContext } from 'react'

function DistanceTime() {
    const { directionData, setDirectionData } = useContext(DirectionDataContext);

    return directionData?.routes && (
        <div className='bg-yellow-500 p-3 rounded-md border-solid border border-black'>

            <h2 className='text-white font-medium text-[15px]'>

                Distance:
                <span className='font-bold mr-3 pl-1 text-black'>
                    {
                        (directionData.routes[0].distance * 0.001).toFixed(2)
                    } Kms
                </span>
            </h2>

        </div>
    )
}

export default DistanceTime;