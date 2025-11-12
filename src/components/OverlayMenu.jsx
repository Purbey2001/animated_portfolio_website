import React from 'react'
import { FiX } from "react-icons/fi";
import { motion,AnimatePresence } from 'framer-motion';

const pages = ["Home","About","Skills","Projects","Contact"]

const OverlayMenu = ({menuOpen,setMenuOpen}) => {
  const isMobile = window.innerWidth < 768;
  const origin = isMobile ? "95% 8%" : "50% 0%";
  return (
    <AnimatePresence>
      {
        menuOpen && (<motion.div className='fixed inset-0 flex items-center justify-center z-60'
        initial={{clipPath:`circle(0% at ${origin})`}}
        animate={{clipPath:`circle(150% at ${origin})`}}
        exit={{clipPath:`circle(0% at ${origin})`}}
        transition={{ease:[0.4,0,0.2,1],duration:1}}
        style={{backgroundColor:'rgba(0,0,0,0.9)'}}
        >
          <button onClick={() => setMenuOpen(false)} className='absolute top-8 right-8 cursor-pointer'>
            <FiX className='text-3xl text-white'/>
          </button>
          <ul className='flex flex-col items-center justify-center gap-6'>
            {
              pages.map((page,index) => (
                <motion.li key={index} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:index*0.1}}
                >
                  <a href={`#${page.toLowerCase()}`} className='text-4xl font-semibold hover:text-pink-500 transition-all duration-200'
                  onClick={() => setMenuOpen(false)}>
                    {page}
                  </a>
                </motion.li>
                
              ))
            }
          </ul>
        </motion.div>)
      }
    </AnimatePresence>
  )
}

export default OverlayMenu