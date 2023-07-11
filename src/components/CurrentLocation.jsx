import React, { useEffect, useState } from 'react'
import Home from './Home';
import { Triangle } from 'react-loader-spinner';

export default function CurrentLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    let geoId;

    if (navigator.geolocation) {
      geoId = navigator.geolocation.watchPosition(showPosition, handleError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      navigator.geolocation.clearWatch(geoId);
    }

    function handleError(error) {
      console.log(error);
      alert("Enable location first to view weather of your Area");
    }

    return () => {
      navigator.geolocation.clearWatch(geoId);
    }
  }, []);

  return (
    latitude && longitude ?
      <>
        <Home location={{
          lat: latitude,
          lon: longitude
        }} />
        <p id="location">{`Your location is: ${latitude}, ${longitude}`}</p>
      </>
      : <div className='flex w-screen h-screen bg-black items-center justify-center'>
        <Triangle
          height="100"
          width="100"
          color="#FFF"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
  )
}
