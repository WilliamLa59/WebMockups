import React, { useState, useEffect } from 'react'

import vehicleImg from "../assets/technology/image-launch-vehicle-portrait.jpg";
import portImg from "../assets/technology/image-spaceport-portrait.jpg";
import capsuleImg from "../assets/technology/image-space-capsule-portrait.jpg";

export const Technology = () => {
  const Vehicle = {name: "SPACE VEHICLE", desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"};
  const Port = {name: "SPACEPORT", desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."};
  const Capsule = {name: "SPACE CAPSULE", desc: " A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."};

  const initalTech = () => JSON.parse(localStorage.getItem("Technology")) || Vehicle;
  const initialImg = () => localStorage.getItem("TechnologyImg") || vehicleImg;

  const[currentTech, setCurrentTech] = useState(initalTech);
  const[currentTechImg, setCurrentTechImg] = useState(initialImg);

  useEffect(() => {
    localStorage.setItem("Technology", JSON.stringify(currentTech));
    localStorage.setItem("TechnologyImg", currentTechImg);
  });

  document.body.className = "technology-page";
  return (
    <div className='tech-container'>
      <div className='header-container'>
        <h5 className=' dest-header'><span>03 </span>SPACE LAUNCH 101</h5>
      </div>
      <div className='tech-nav-container'>

        <div className='tech-nav-btn' 
        onClick={()=>{setCurrentTech(Vehicle); setCurrentTechImg(vehicleImg);}}
        style={currentTech.name === "SPACE VEHICLE" ? {backgroundColor: '#fff' , color: '#0B0D17'} : {backgroundColor: 'transparent'}}
        >1</div>

        <div className='tech-nav-btn middle-btn'
        onClick={()=>{setCurrentTech(Port); setCurrentTechImg(portImg);}}
        style={currentTech.name === "SPACEPORT" ? {backgroundColor: '#fff' , color: '#0B0D17'} : {backgroundColor: 'transparent'}}
        >2</div>

        <div className='tech-nav-btn'
        onClick={()=>{setCurrentTech(Capsule); setCurrentTechImg(capsuleImg);}}
        style={currentTech.name === "SPACE CAPSULE" ? {backgroundColor: '#fff' , color: '#0B0D17'} : {backgroundColor: 'transparent'}}
        >3</div>

      </div>
      <div className='tech-text-container'>
        <div>
          <sub className='sub2'>THE TERMINOLOGY ...</sub>
        </div>
        <div>
          <h3 className='tech-name'>{currentTech.name}</h3>
        </div>
        <div >
          <p className='tech-desc'>{currentTech.desc}</p>
        </div>
      </div>
      <div className='tech-img-container'>
          <img src={currentTechImg} alt="" />
      </div>
    </div>
  )
}
