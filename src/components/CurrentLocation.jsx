import React, { useEffect, useState } from 'react'
import Home from './Home';

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
      setLatitude(31.52);
      setLongitude(74.35)
    }

    return () => {
      navigator.geolocation.clearWatch(geoId);
    }
  }, []);

  return (
    longitude ?
      <>
        <Home location={{
          lat: latitude,
          lon: longitude
        }} />
        <p id="location">{`Your location is: ${latitude}, ${longitude}`}</p>
      </>
      : <div className='flex h-screen bg-black items-center justify-center'>
      </div>
  )
}
