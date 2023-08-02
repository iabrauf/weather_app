import React, { useState, useEffect } from 'react';
import SideBar from '../common/SideBar'
import axios from 'axios';
import { Triangle } from 'react-loader-spinner';
import MainChildA from './MainChildA';
import Forecast from './Forecast';

export default function Home({ location }) {
  const [value, setValue] = useState(null);
  const [city, setCity] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ebfe154d3fe337f02e40b43787701606`)
      .then((value) => {
        setValue(value);
        setCity('');
      })

  }

  // <p id="demo"></p>

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=ebfe154d3fe337f02e40b43787701606`)
      .then((value) => {
        setValue(value);
        console.log(value);
      })

  }, []);

  function showMsg() {
    if (location.lat == 31.52) {
      alert('This website is unable to access your current location.')
    }
    else {
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=ebfe154d3fe337f02e40b43787701606`)
        .then((value) => {
          setValue(value);
          console.log(value);
        })
    }
  }
  return (
    value ?
      <>
        <div className="flex md:flex-row flex-col md:h-screen bg-black">
          <div className="md:basis-1/12 h-full">
            <SideBar />
          </div>
          <div className="md:basis-7/12 flex flex-col text-white mx-5">
            <form className='flex justify-between items-center' onSubmit={handleSubmit}>
              <input className=' bg-gray-800 w-full mt-6 p-5 rounded-3xl focus:outline-none relative'
                type='text' placeholder='See Default City' value={city} onChange={(e) => setCity(e.target.value)}></input>
              <img src='../src/assets/currentLocation.svg' onClick={showMsg} className='h-16 w-16 mt-6 p-3'></img>
            </form>
            <MainChildA value={value} />
          </div>
          <div className="md:basis-4/12 m-6 text-white">
            <Forecast value={value} />
          </div>
        </div >
      </>
      : <div className='flex h-screen bg-black items-center justify-center'>
        <Triangle
          height="80"
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
