import React, { createContext, useState, useEffect } from 'react';

export const CityListContext = createContext();

export const CityListProvider = ({ children }) => {

  const [cityList, setCityListState] = useState(
    () => JSON.parse(localStorage.getItem('cityList')) || []
  );

  const setCityList = (newCityList) => {
    setCityListState(newCityList);
    localStorage.setItem('cityList', JSON.stringify(newCityList));
  };

  const deleteCity = (cityName) => {
    const newCityList = cityList.filter(city => city !== cityName);
    setCityList(newCityList);
  };

  useEffect(() => {
    localStorage.setItem('cityList', JSON.stringify(cityList));
  }, [cityList]);

  return (
    <CityListContext.Provider value={{ cityList, setCityList, deleteCity }}>
      {children}
    </CityListContext.Provider>
  );
};
