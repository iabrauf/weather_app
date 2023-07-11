import React, { createContext, useState } from 'react';

export const CityListContext = createContext();

export const CityListProvider = ({ children }) => {
  const [cityList, setCityList] = useState([]);
  const deleteCity = (cityName) => {
    setCityList(cityList.filter(city => city !== cityName));
  };


  return (
    <CityListContext.Provider value={{ cityList, setCityList, deleteCity }}>
      {children}
    </CityListContext.Provider>
  );
};
