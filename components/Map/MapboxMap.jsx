"use client"

import { UserLocationContext } from '@/context/UserLocationContext';
import React, { useContext, useRef, useEffect } from 'react'
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Markers from './Markers';
import { DestinationCordContext } from '@/context/DestinationCordContext'
import { SourceCordContext } from '@/context/SourceCordContext'
import { DirectionDataContext } from '@/context/DirectionDataContext';
import MapBoxRoute from './MapBoxRoute';

const MAPBOX_DRIVING_ENDPOINT =
  "https://api.mapbox.com/directions/v5/mapbox/driving/";

function MapboxMap() {
  const mapRef = useRef();

  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { soruceCordinates, setSourceCordinates } = useContext(SourceCordContext);
  const { destinationCordinates, setDestinationCordinates } = useContext(DestinationCordContext);
  const { directionData, setDirectionData } = useContext(DirectionDataContext);

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

    if (soruceCordinates && destinationCordinates) {
      getDirectionRoute();
    }

  }, [destinationCordinates]);

  const getDirectionRoute = async () => {
    const res = await fetch(
      MAPBOX_DRIVING_ENDPOINT +
      soruceCordinates.lng +
      "," +
      soruceCordinates.lat +
      ";" +
      destinationCordinates.lng +
      "," +
      destinationCordinates.lat +
      "?overview=full&geometries=geojson" +
      "&access_token=" +
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();
    console.log(result);
    setDirectionData(result);
  };

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
            {
              directionData?.routes ? (
                <MapBoxRoute
                  coordinates={directionData?.routes[0]?.geometry?.coordinates}
                />
              ) : null
            }

          </Map> : null
        }

      </div>
    </div >
  )
}

export default MapboxMap;