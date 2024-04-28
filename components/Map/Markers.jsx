import React, { useContext } from 'react'
import { Marker } from 'react-map-gl';
import { UserLocationContext } from '@/context/UserLocationContext';
import { DestinationCordContext } from '@/context/DestinationCordContext'
import { SourceCordContext } from '@/context/SourceCordContext'

function Markers() {
    const { userLocation, setUserLocation } = useContext(UserLocationContext);
    const { soruceCordinates, setSourceCordinates } = useContext(SourceCordContext);
    const { destinationCordinates, setDestinationCordinates } = useContext(DestinationCordContext);

    return (
        <div>
            {/* Users current location marker */}
            <Marker
                longitude={userLocation?.lng}
                latitude={userLocation?.lat}
                anchor="bottom"

            >
                <img src="./pin.png" className='w-10 h-10' />
            </Marker>

            {/* Source point marker */}
            {
                soruceCordinates.length != 0 ?
                    <Marker
                        longitude={soruceCordinates?.lng}
                        latitude={soruceCordinates?.lat}
                        anchor="bottom"

                    >
                        <img src="./source.png" className='w-5 h-5' />
                    </Marker> : null
            }

            {/* Destination point marker */}
            {
                destinationCordinates.length != 0 ?
                    <Marker
                        longitude={destinationCordinates?.lng}
                        latitude={destinationCordinates?.lat}
                        anchor="bottom"

                    >
                        <img src="./dest.png" className='w-5 h-5' />
                    </Marker> : null
            }
        </div>
    )
}

export default Markers