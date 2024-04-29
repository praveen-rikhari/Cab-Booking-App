"use client"

import MapboxMap from "@/components/Map/MapboxMap";
import Booking from "@/components/Booking/Booking";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SourceCordContext } from "@/context/SourceCordContext";
import { DestinationCordContext } from "@/context/DestinationCordContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";

export default function Home() {
  const [userLocation, setUserLocation] = useState();
  const [soruceCordinates, setSourceCordinates] = useState([]);
  const [destinationCordinates, setDestinationCordinates] = useState([]);
  const [directionData, setDirectionData] = useState([]);

  useEffect(() => {
    getUserLocation();
  }, [])

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
    })
  }
  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SourceCordContext.Provider value={{ soruceCordinates, setSourceCordinates }}>
          <DestinationCordContext.Provider value={{ destinationCordinates, setDestinationCordinates }}>
            <DirectionDataContext.Provider value={{ directionData, setDirectionData }}>
              <div>
                <Booking />

              </div>
              <div className='col-span-2'>
                <MapboxMap />
              </div>
            </DirectionDataContext.Provider>
          </DestinationCordContext.Provider>
        </SourceCordContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}
