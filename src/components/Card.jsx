import React from 'react'
import {  MdLocationPin } from "react-icons/md";

const Card = ({place}) => {
  console.log(place.location)
   
  return (
    <div className='card'>
      <div className="image">
          <img src={require(`../images/${place.imageUrl}`)}  alt='image'/>
      </div>
      <div className="card--info">
        <div className='card-location'>
        < MdLocationPin style={{color: 'red'}}/> <span className='location'>{place.location.toUpperCase()}</span>
        <span className='card--url'><a href={place.googleMapsUrl}>View on Google Maps</a></span>
        </div>
        <div className="card-title">
            {place.title}
        </div>
        <div className='card-date'>
            <span><strong> {place.startDate} - {place.endDate}</strong></span>
        </div>
        <div className='card-description'>
            {place.description}
        </div>
      </div>
    </div>
  )
}

export default Card