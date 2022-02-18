import React from 'react'
import { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'

import logo from "../assets/shared/logo.svg"
import closeIcon from "../assets/shared/icon-close.svg"
import openIcon from "../assets/shared/icon-hamburger.svg"

export const Navbar = () => {
    
    const location = useLocation();
    //console.log(location.pathname);
    const [isShowing, setIsShowing] = useState(false);
    const [currentRoute, setCurrentRoute] = useState(location.pathname)
  return (
    <header>
        <div
        className='navbar-outside'
        style={isShowing ? {display: "block"} : {display: "none"}}
        onClick={() => setIsShowing(!isShowing)}
        ></div>
        <div className="logo">
        <img src={logo} alt="" />
        <hr />
        </div>
        <div className="bars-navbar" style={isShowing ? {display: "block"} : {display: "none"}}>
        <img src={openIcon} alt="" />
        </div>
        <ul className="navbar" style={isShowing ? {display: "flex"} : {display: "none"}}>
            <div className='close' style={isShowing ? {display: "block"} : {display: "none"}}>
            <img src={closeIcon} alt="" />
            </div>
            <li>
                <Link to="/" className="nav-links" style={currentRoute === "/" ? {borderBottom: "2px solid white", backgroundImage: "../assets/home/background-home-desktop.jpg"} :{borderBottom: "2px solid transparent"}} 
                    onClick={() => setCurrentRoute('/')}><span>00 </span> Home</Link>
            </li>
            <li>
                <Link to="/destination" className="nav-links" style={currentRoute === "/destination" ? {borderBottom: "2px solid white"} :{borderBottom: "2px solid transparent"}} 
                    onClick={() => setCurrentRoute('/destination')}><span>01</span>  Destination</Link>
            </li>
            <li>
                <Link to="/crew" className="nav-links" style={currentRoute === "/crew" ? {borderBottom: "2px solid white"} :{borderBottom: "2px solid transparent"}} 
                    onClick={() => setCurrentRoute('/crew')}><span>02 </span> Crew</Link>
            </li>
            <li>
                <Link to="/technology" className="nav-links" style={currentRoute === "/technology" ? {borderBottom: "2px solid white"} :{borderBottom: "2px solid transparent"}} 
                    onClick={() => setCurrentRoute('/technology')}><span>03 </span> Technology</Link>
            </li>
            </ul>
    </header>
  )
}
