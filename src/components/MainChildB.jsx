import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MainChildB({ value }) {
  return (
    <div className='basis-6/12 bg-gray-800 rounded-3xl p-5 mt-2'>
      <h1 className='font-bold font-3xl'>Important information</h1>
      <div className='flex justify-around h-5/6 mt-2'>
        <div className='flex flex-col justify-evenly'>
          <div className='flex flex-col justify-start items-start'>
            <p className='flex gap-2 items-center justify-start w-full'> <FontAwesomeIcon icon='fa-temperature-quarter' />Real Feel</p>
            <h1 className='font-bold text-2xl ml-7'>{parseInt(value.data.list[0].main.feels_like - 273)}°C</h1>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <p className='flex gap-2 items-center justify-start w-full'> <FontAwesomeIcon icon='fa-droplet' />Humidity</p>
            <h1 className='font-bold text-2xl ml-7'>{value.data.list[0].main.humidity}</h1>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <p className='flex gap-2 items-center justify-start w-full'> <FontAwesomeIcon icon='fa-bolt' />Wind Speed</p>
            <h1 className='font-bold text-2xl ml-7'>{value.data.list[0].wind.speed}</h1>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <p className='flex gap-2 items-center justify-start w-full'> <FontAwesomeIcon icon='fa-fan' />Temp Min</p>
            <h1 className='font-bold text-2xl ml-7'>{parseInt(value.data.list[0].main.temp_min - 273)}°C</h1>
          </div>
        </div>
        <div className='flex flex-col justify-evenly'>
          <div className='flex flex-col justify-start items-start'>
            <p className='flex gap-2 items-center justify-start w-full'> <FontAwesomeIcon icon='fa-wind' />Air Pressure</p>
            <h1 className='font-bold text-2xl ml-7'>{value.data.list[0].main.pressure}</h1>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <p className='flex gap-2 items-center justify-start w-full'> <FontAwesomeIcon icon='fa-sun' />Wind Degree</p>
            <h1 className='font-bold text-2xl ml-7'>{value.data.list[0].wind.deg}</h1>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <p className='flex gap-2 items-center justify-start w-full'> <FontAwesomeIcon icon='fa-fire' />Temp Max</p>
            <h1 className='font-bold text-2xl ml-7'>{parseInt(value.data.list[0].main.temp_max - 273)}°C</h1>
          </div>
          <div className='flex flex-col justify-start items-start'>
            <p className='flex gap-2 items-center justify-start w-full'> <FontAwesomeIcon icon='fa-smog' />Gust</p>
            <h1 className='font-bold text-2xl ml-7'>{value.data.list[0].wind.gust}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
