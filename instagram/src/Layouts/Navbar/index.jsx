import React, { useState } from 'react'
import "./navbar.css"
import { FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { CgAddR } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { switchModeTheme } from '../../utils/switchModeTheme';
import { logout } from '../../redux/AuthSlice/authSlice';
import { useDispatch } from "react-redux"

const Navbar = ({setOpenModalAdd}) => {


  const dispatch = useDispatch()
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className='navbar-container'>
      <div className='nav-block'>
        <NavLink to="/">
          <FaInstagram />
        </NavLink>

      </div>
      <div className='nav-block'>
        <NavLink to="/"><GoHomeFill /></NavLink>
        <NavLink to=""><IoSearchOutline /></NavLink>
        <NavLink to="">
          <div onClick={() => { switchModeTheme(darkMode); setDarkMode(!darkMode) }}>
            <IoIosHeartEmpty />
          </div>
        </NavLink>
        <div onClick={()=>setOpenModalAdd(true)}>
          <CgAddR />
        </div>
        <NavLink to="/profile"><RxAvatar /></NavLink>
      </div>
      <div className='nav-block'>
        <div onClick={() => dispatch(logout())}> <RxHamburgerMenu /></div>
      </div>
    </div>
  )
}

export default Navbar