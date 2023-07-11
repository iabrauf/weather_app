import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css'
export default function SideBar() {
  return (
    <ul className="sidebar flex md:flex-col md:items-center md:justify-center w-full h-24 md:h-5/6 md:w-28 md:rounded-3xl md:mx-6 md:mt-20 md:p-5 bg-gray-800 text-white">
      <div className="basis-1/6 m-2">
        <Link to="/">
          <img src='../src/assets/home.png' alt="Home" />
          <li>Home</li>
        </Link>
      </div>
      <div className="basis-1/6 m-2">
        <Link to="/cities">
          <img src='../src/assets/cities.png' alt="Cities" />
          <li>Cities</li>
        </Link>
      </div>
      <div className="basis-1/6 m-2">
        <img src='../src/assets/forecast.png' alt="Forecast" />
        <li>Cast</li>
      </div>
    </ul>
  )
}
