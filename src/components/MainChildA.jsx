import React, { useContext } from 'react'
import getImageUrl from './getImageUrl'
import MainChildB from './MainChildB'
import { CityListContext } from './CityListContext';

export default function MainChildA({ value }) {
  const { cityList, setCityList } = useContext(CityListContext);

  const handleClick = () => {
    if (cityList.includes(value.data.city.name)) {
      alert(`${value.data.city.name} is aleready in the list`)
      return
    }
    setCityList([...cityList, value.data.city.name]);
    alert('City added in the list')
  }
  return (
    <div className='flex flex-col h-full'>
      <div className='basis-5/12 p-5 pt-12 relative'>
        <img className='w-44 h-44 absolute top-1/5 md:right-1/4 right-2 top-14 mt-3' src={getImageUrl(value.data.list[0].weather[0].icon)} />
        <div className='flex gap-5'>
          <h1 className='font-bold text-5xl mb-1'>{value.data.city.name}</h1>
          <button onClick={handleClick} className='w-10 h-10 rounded-2xl text-white mt-2'><img src='../src/assets/addbtn.svg'></img></button>
        </div>
        <span>{value.data.list[0].weather[0].description}</span>
        <h1 className='font-bold text-6xl mt-10'>{parseInt(value.data.list[0].main.temp - 273)}°C</h1>
      </div>
      <MainChildB value={value} />
    </div>
  )
}
