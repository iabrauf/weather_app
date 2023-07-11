import React from 'react'

export default function getImageUrl(imageId) {
  return (
    'https://openweathermap.org/img/wn/' +
    imageId +
    '@2x.png'
  );
}
