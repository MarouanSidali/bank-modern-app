import { useState } from "react"
import {close , menu , logo } from '../assets'
import { navLinks } from '../constansts'
const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hookBank" />
    </nav>)
  
}

export default Navbar