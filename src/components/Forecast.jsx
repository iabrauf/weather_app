import React from 'react'
import getImageUrl from './getImageUrl';

export default function Forecast({ value }) {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  return (

    <div className='md:mt-14 h-auto mb-24 p-6 bg-gray-800 rounded-3xl'>
      <h1 className='font-bold text-xl'>6 Days Forcast</h1><br></br>
      <div className='flex justify-between items-center my-4 px-2'>
        <div className='flex w-3/4 justify-between'>
          <p>{weekday[new Date(value.data.list[0].dt_txt).getDay()]}</p>
          <div className='flex w-2/4 justify-between'>
            <img className='w-8 h-8' src={getImageUrl(value.data.list[0].weather[0].icon)} />
            <p>{value.data.list[0].weather[0].main}</p>
          </div>
        </div>
        <p>{parseInt(value.data.list[0].main.temp - 273)}°C</p>
      </div>
      <hr className='border-solid border-gray-600'></hr><br></br>
      <div className='flex justify-between items-center my-4 px-2 '>
        <div className='flex w-3/4 justify-between'>
          <p>{weekday[new Date(value.data.list[7].dt_txt).getDay()]}</p>
          <div className='flex w-2/4 justify-between'>
            <img className='w-8 h-8' src={getImageUrl(value.data.list[7].weather[0].icon)} />
            <p>{value.data.list[7].weather[0].main}</p>
          </div>
        </div>
        <p>{parseInt(value.data.list[7].main.temp - 273)}°C</p>
      </div>
      <hr className='border-solid border-gray-600'></hr><br></br>
      <div className='flex justify-between items-center my-4 px-2 '>
        <div className='flex w-3/4 justify-between'>
          <p>{weekday[new Date(value.data.list[15].dt_txt).getDay()]}</p>
          <div className='flex w-2/4 justify-between'>
            <img className='w-8 h-8' src={getImageUrl(value.data.list[15].weather[0].icon)} />
            <p>{value.data.list[15].weather[0].main}</p>
          </div>
        </div>
        <p>{parseInt(value.data.list[15].main.temp - 273)}°C</p>
      </div>
      <hr className='border-solid border-gray-600'></hr><br></br>
      <div className='flex justify-between items-center my-4 px-2 '>
        <div className='flex w-3/4 justify-between'>
          <p>{weekday[new Date(value.data.list[23].dt_txt).getDay()]}</p>
          <div className='flex w-2/4 justify-between'>
            <img className='w-8 h-8' src={getImageUrl(value.data.list[23].weather[0].icon)} />
            <p>{value.data.list[23].weather[0].main}</p>
          </div>
        </div>
        <p>{parseInt(value.data.list[23].main.temp - 273)}°C</p>
      </div>
      <hr className='border-solid border-gray-600'></hr><br></br>
      <div className='flex justify-between items-center my-4 px-2 '>
        <div className='flex w-3/4 justify-between'>
          <p>{weekday[new Date(value.data.list[31].dt_txt).getDay()]}</p>
          <div className='flex w-2/4 justify-between'>
            <img className='w-8 h-8' src={getImageUrl(value.data.list[31].weather[0].icon)} />
            <p>{value.data.list[31].weather[0].main}</p>
          </div>
        </div>
        <p>{parseInt(value.data.list[31].main.temp - 273)}°C</p>
      </div>
      <hr className='border-solid border-gray-600'></hr><br></br>
      <div className='flex justify-between items-center my-4 px-2 '>
        <div className='flex w-3/4 justify-between'>
          <p>{weekday[new Date(value.data.list[39].dt_txt).getDay()]}</p>
          <div className='flex w-2/4 justify-between'>
            <img className='w-8 h-8' src={getImageUrl(value.data.list[39].weather[0].icon)} />
            <p>{value.data.list[39].weather[0].main}</p>
          </div>
        </div>
        <p>{parseInt(value.data.list[39].main.temp - 273)}°C</p>
      </div>
      <hr className='border-solid border-gray-600'></hr><br></br>
    </div>

  )
}
