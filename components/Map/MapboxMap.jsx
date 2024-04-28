"use client"

import { UserLocationContext } from '@/context/UserLocationContext';
import React, { useContext, useRef, useEffect } from 'react'
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Markers from './Markers';
import { DestinationCordContext } from '@/context/DestinationCordContext'
import { SourceCordContext } from '@/context/SourceCordContext'

function MapboxMap() {
  const mapRef = useRef();

  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { soruceCordinates, setSourceCordinates } = useContext(SourceCordContext);
  const { destinationCordinates, setDestinationCordinates } = useContext(DestinationCordContext);

  // Use to Fly to Source Markers Location
  useEffect(() => {
    if (soruceCordinates) {
      mapRef.current?.flyTo({
        center: [soruceCordinates.lng, soruceCordinates.lat],
        duration: 2500,
      });
    }
  }, [soruceCordinates]);

  // Use to Fly to Destination Markers Location
  useEffect(() => {
    if (destinationCordinates) {
      mapRef.current?.flyTo({
        center: [destinationCordinates.lng, destinationCordinates.lat],
        duration: 2500,
      });
    }

  }, [destinationCordinates]);

  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Map</h2>

      <div className="rounded-lg overflow-hidden">
        {
          userLocation ? <Map
            ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={
              {
                longitude: userLocation?.lng,
                latitude: userLocation?.lat,
                zoom: 14
              }
            }
            style={{ width: "100%", height: 600, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Markers />

          </Map> : null
        }

      </div>
    </div >
  )
}

export default MapboxMap;