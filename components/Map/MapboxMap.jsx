"use client"
import React from 'react'
import Map from 'react-map-gl';

function MapboxMap() {
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Map</h2>

      <div className="rounded-lg overflow-hidden">
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={
            {
              longitude: -122.4,
              latitude: 37.8,
              zoom: 14
            }
          }
          style={{ width: "100%", height: 600, borderRadius: 10 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </div >
  )
}

export default MapboxMap;