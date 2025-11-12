import React, { useState } from 'react'
import OverlayMenu from './OverlayMenu'
import LogoWhite from '../assets/LogoWhite.png'
import LogoBlack from '../assets/LogoBlack.png'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  //const [visible,setVisible] = useState(true);
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <>
      <nav className={`sticky top-0 left-0 px-6 py-4 w-full flex items-center justify-between z-50`}>
        <div className='flex items-center gap-1'>
          <img src={LogoWhite} alt="Logo" className='h-10 w-10'/>
          <p className='text-2xl font-bold text-white hidden sm:block'>Abhishek</p>
        </div>
        <button onClick={() => setMenuOpen(true)}>
          <FiMenu className='text-3xl text-white cursor-pointer'/>
        </button>
        <div className='hidden lg:block'>
          <a href='#contact'
          className='bg-linear-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-all duration-200'>
          Reach Out
          </a>
        </div>
      </nav>
      <OverlayMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </>
  )
}

export default Navbar