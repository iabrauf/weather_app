import { useState, useContext, useEffect } from 'react';
import { CityListContext } from './CityListContext';
import SideBar from '../common/SideBar';
import axios from 'axios';
import getImageUrl from './getImageUrl';

export default function Cities() {
  const [openIndex, setOpenIndex] = useState(null);
  const { cityList, setCityList, deleteCity } = useContext(CityListContext);
  const [cityName, setCityName] = useState('')
  const [value, setValue] = useState([]);
  const [count, setCount] = useState(null)
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cityList.includes(cityName)) {
      alert(`${cityName} is aleready in the list`)
      setCityName('');
      return
    }
    setCityList([...cityList, cityName]);
    alert('City added in the list');
    setCityName('')
  }

  useEffect(() => {
    console.log('render');
    cityList.map((city) => {
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ebfe154d3fe337f02e40b43787701606`)
        .then((cityData) => {
          if (!value.includes(cityData.data.city.name)) {
            setValue([...value, cityData]);
            setCount(value.length);
          }
        })
    })
  }, [cityList])


  const toggleDropdown = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    if (openIndex === index) {
      setOpenIndex(null); // Close the dropdown if it's already open
    } else {
      setOpenIndex(index); // Open the selected dropdown and close others
    }
  };

  const handleDelete = ((event, index) => {
    event.preventDefault();
    event.stopPropagation();
    if (openIndex === index) {
      setOpenIndex(null); // Close the dropdown if it's already open
    }
    deleteCity(cityList[index]);
    setCount(value.length - 1);
  })

  return (
    value[count] ?
      <div className="flex md:flex-row flex-col md:h-screen bg-black">
        <div className="md:basis-1/12 md:h-full">
          <SideBar />
        </div>
        <div className="md:basis-7/12 mx-5 basis-10/12 flex flex-col text-white">
          <form onSubmit={handleSubmit}>
            <input className=' bg-gray-800 w-full mt-6 p-5 rounded-3xl focus:outline-none relative'
              type='text' placeholder='See Default City' value={cityName} onChange={(e) => setCityName(e.target.value)}></input>
          </form>
          <div>
            <div className="mr-4 w-full">
              {cityList.map((city, index) => (
                <div key={index} className='bg-gray-800 text-white flex justify-between items-center p-5 mt-5 rounded-3xl h-3/6'>
                  <div>
                    <p>{cityList[index]}</p>
                  </div>
                  <div className='flex gap-5'>
                    <button className='bg-blue-600 w-24 h-10 rounded-2xl hover:bg-blue-800' type="button" onClick={(event) => toggleDropdown(event, index)}>Details</button>
                    <button className='bg-red-500 w-24 h-10 rounded-2xl hover:bg-red-800' type="button" onClick={(event) => handleDelete(event, index)}>Delete</button>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='md:basis-4/12 m-6 text-white h-auto'>
          {openIndex !== null &&
            <>
              <div className="md:mt-14 mb-32 h-auto p-6 bg-gray-800 text-white rounded-3xl">
                <div className='flex flex-col h-full'>
                  <div className='basis-5/12 p-5 pt-12 relative'>
                    <img className='w-44 h-44 absolute top-1/5 right-3' src={getImageUrl(value[openIndex].data.list[0].weather[0].icon)} />
                    <h1 className='flex-1 font-bold text-5xl mb-1'>{cityList[openIndex]}</h1>
                    <span>{value[openIndex].data.list[0].weather[0].description}</span>
                    <h1 className='flex-1 font-bold text-6xl mt-10'>{parseInt(value[openIndex].data.list[0].main.temp - 273)}°C</h1>
                  </div>
                </div>
                <div>
                  <h1 className='font-bold text-xl'>3 Days Forcast</h1><br></br>
                  <div className='flex justify-between items-center my-4 px-2'>
                    <div className='flex w-3/4 justify-between'>
                      <p>{weekday[new Date(value[openIndex].data.list[0].dt_txt).getDay()]}</p>
                      <div className='flex w-2/4 justify-between'>
                        <img className='w-8 h-8' src={getImageUrl(value[openIndex].data.list[0].weather[0].icon)} />
                        <p>{value[openIndex].data.list[0].weather[0].main}</p>
                      </div>
                    </div>
                    <p>{parseInt(value[openIndex].data.list[0].main.temp - 273)}°C</p>
                  </div>
                  <hr className='border-solid border-gray-600'></hr><br></br>
                  <div className='flex justify-between items-center my-4 px-2'>
                    <div className='flex w-3/4 justify-between'>
                      <p>{weekday[new Date(value[openIndex].data.list[7].dt_txt).getDay()]}</p>
                      <div className='flex w-2/4 justify-between'>
                        <img className='w-8 h-8' src={getImageUrl(value[openIndex].data.list[7].weather[0].icon)} />
                        <p>{value[openIndex].data.list[7].weather[0].main}</p>
                      </div>
                    </div>
                    <p>{parseInt(value[openIndex].data.list[7].main.temp - 273)}°C</p>
                  </div>
                  <hr className='border-solid border-gray-600'></hr><br></br>
                  <div className='flex justify-between items-center my-4 px-2'>
                    <div className='flex w-3/4 justify-between'>
                      <p>{weekday[new Date(value[openIndex].data.list[15].dt_txt).getDay()]}</p>
                      <div className='flex w-2/4 justify-between'>
                        <img className='w-8 h-8' src={getImageUrl(value[openIndex].data.list[15].weather[0].icon)} />
                        <p>{value[openIndex].data.list[15].weather[0].main}</p>
                      </div>
                    </div>
                    <p>{parseInt(value[openIndex].data.list[15].main.temp - 273)}°C</p>
                  </div>
                  <hr className='border-solid border-gray-600'></hr><br></br>
                </div>
              </div>
            </>
          }
        </div>
      </div>
      :
      <div className="flex md:flex-row flex-col md:h-screen bg-black">
        <div className="md:basis-1/12 md:h-full">
          <SideBar />
        </div>
        <div className="md:basis-7/12 mx-5 basis-10/12 flex flex-col text-white">
          <form onSubmit={handleSubmit}>
            <input className=' bg-gray-800 w-full mt-6 p-5 rounded-3xl focus:outline-none relative'
              type='text' placeholder='See Default City' value={cityName} onChange={(e) => setCityName(e.target.value)}></input>
          </form>
          <div className='flex h-screen font-bold text-3xl items-center justify-center'>
            Please Add City First!
          </div>
        </div>
        <div className='md:basis-4/12 md:m-6 text-white md:h-auto'></div>

      </div>

  );
}
