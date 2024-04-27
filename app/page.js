"use client"

import MapboxMap from "@/components/Map/MapboxMap";
import Booking from "@/components/Booking/Booking";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";

export default function Home() {
  const [userLocation, setUserLocation] = useState();

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
        <div>
          <Booking />

        </div>
        <div className='col-span-2'>
          <MapboxMap />
        </div>
      </UserLocationContext.Provider>
    </div>
  );
}
