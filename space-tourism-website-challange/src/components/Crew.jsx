import React, { useEffect } from 'react'
import { useState } from 'react';


import douglasImg from "../assets/crew/image-douglas-hurley.png";
import markImg from "../assets/crew/image-mark-shuttleworth.png";
import victorImg from "../assets/crew/image-victor-glover.png";
import anoushehImg from "../assets/crew/image-anousheh-ansari.png";
import button from "../assets/shared/circle-solid.svg";

export const Crew = () => {
  const Douglas = {role: "COMMANDER", name: "DOUGLAS HURLEY", bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time ascommander of Crew Dragon Demo-2."};
  const Mark = {role: "MISSION SPECIALIST", name: "MARK SHUTTLEWORTH", bio: " Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."};
  const Victor = {role: "PILOT", name: "VICTOR GLOVER", bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the  International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "};
  const Anousheh = {role: "FLIGHT ENGINEER", name: "ANOUSHEH ANSARI", bio: " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "};
  
  // const initialCrewMember = () => localStorage.getItem("crewMember") || Douglas;
  const initalCrewImg = () => localStorage.getItem("crewMemberImg") || douglasImg;

  
  const [currentCrewMember, setCurrentCrewMember] = useState(Douglas);
  const [currentCrewImg, setCurrentCrewImg] = useState(initalCrewImg)

  useEffect(() => {
    localStorage.setItem("crewMemberImg", currentCrewImg);
  });

  // console.log(initialCrewMember);
  console.log(currentCrewMember);


  document.body.className = "crew-page";
  return (
    <div className='crew-container'>
      <div className='header-container'>
        <sub className='sub1 crew-header'> 0 2 MEET YOUR CREW</sub>
      </div>
      
      <div className='text-container'>
        <div className='crew-role'>
          <h4>{currentCrewMember.role}</h4>
        </div>
        <div className='crew-name'>
          <h3>{currentCrewMember.name}</h3>
        </div>
        <div className='crew-bio'>
          <p>{currentCrewMember.bio}</p>
        </div>
        <div className='crew-nav'>
          <img 
          className="crew-nav-btn" 
          src={button} alt="" 
          onClick={() => setCurrentCrewMember(Douglas)}/>
          
          <img 
          className="crew-nav-btn" 
          src={button} alt="" 
          onClick={() => setCurrentCrewMember(Mark)}/>

          <img 
          className="crew-nav-btn" 
          src={button} alt="" 
          onClick={() => setCurrentCrewMember(Victor)}/>

          <img 
          className="crew-nav-btn" 
          src={button} alt="" 
          onClick={() => setCurrentCrewMember(Anousheh)}/>
        </div>
      </div>

      <div className='img-container'>
      <img src={currentCrewImg} alt="" className="dest-img"/>
      </div>
    </div>
  )
}
