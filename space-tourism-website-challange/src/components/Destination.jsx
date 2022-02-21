import React from 'react'
import { useState } from 'react'

import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'

export const Destination = () => {
  const [currentDestination, setDestination] = useState(moon);
  const [currentDestTitle, setDestTitle] = useState("MOON");
  const [currentDestDesc, setDestDesc] = useState("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.");
  const [distance, setDistance] = useState("384,400 KM");
  const [travelTime, setTravelTime] = useState("3 DAYS");

  document.body.className = "destination-page";
  return (
    <div>
      
      <div className='destination-container'>
        <div className='header-container'>
        <sub className='sub1 dest-header'> 0 1 PICK YOUR DESTINATION</sub>
        </div>
        <div className="img-container">
          <img src={currentDestination} alt="" className="dest-img"/>
        </div>
        <div className='destination-text'>
          <div className='destination-nav'>
            <ul className="dest-navbar">
              <li 
              className='nav-links'
              onClick={() => {setDestination(moon); setDestTitle("MOON"); setDestDesc("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."); setDistance("384,400 KM"); setTravelTime("3 DAYS")}} 
              style={currentDestination === moon ? {borderBottom: "2px solid white"} :{borderBottom: "2px solid transparent"}}
              >MOON</li>
              <li 
              className='nav-links'
              onClick={() => {setDestination(mars); setDestTitle("MARS"); setDestDesc("The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."); setDistance("628 MIL. KM"); setTravelTime("3 YEARS")}} 
              style={currentDestination === mars ? {borderBottom: "2px solid white"} :{borderBottom: "2px solid transparent"}}
              >MARS</li>
              <li 
               className='nav-links'
              onClick={() => {setDestination(europa); setDestTitle("EUROPA"); setDestDesc("Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"); setDistance("225 MIL. KM"); setTravelTime("9 MONTHS")}} 
              style={currentDestination === europa ? {borderBottom: "2px solid white"} :{borderBottom: "2px solid transparent"}}
              >EUROPA</li>
              <li 
               className='nav-links'
              onClick={() => {setDestination(titan); setDestTitle("TITAN"); setDestDesc("The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."); setDistance("1.6 BIL. KM"); setTravelTime("7 YEARS")}} 
              style={currentDestination === titan ? {borderBottom: "2px solid white"} :{borderBottom: "2px solid transparent"}}
              >TITAN</li>
            </ul>
          </div>
          <div className='destination-desc'>
            <h2>{currentDestTitle}</h2>
            <p>{currentDestDesc}</p>
            <hr></hr>
            <div className='distance-text'>
              <sub className='sub2'>AVG. DISTANCE</sub>
              <h4>{distance}</h4>
            </div>
            <div className='travel-text'>
              <sub className='sub2'>EST. TRAVEL TIME</sub>
              <h4>{travelTime}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
