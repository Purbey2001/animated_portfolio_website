import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishek-kumar3401/', icon: 'FaLinkedin' },
  { name: 'GitHub', url: 'https://github.com/Purbey2001', icon: 'FaGithub' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/Purbey_2001/ ', icon: 'SiLeetcode' },
]

const Footer = () => {
  return (
    <footer className='w-full border-t border-[#00bf8f] bg-black flex flex-col items-center justify-center p-4 gap-4'>
      <p className='text-xl sm:text-2xl lg:text-3xl font-bold'>Abhishek Kumar</p>
      <div className='w-[120px] sm:w-[140px] lg:[160px] h-1 rounded-lg gradient mx-auto -mt-2'/>
      <div className='flex flex-row items-center justify-center gap-8'>
        {
          socialLinks.map((link,index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
            className='text-white text-3xl md:text-4xl hover:text-blue-400 hover:scale-110 transition-all duration-200'>
              {link.icon === 'FaLinkedin' && <FaLinkedin />}
              {link.icon === 'FaGithub' && <FaGithub />}
              {link.icon === 'SiLeetcode' && <SiLeetcode />}
            </a>
          ))
        }
      </div>
      <p className='text-center'>“The best error is the one you learn from.”</p>
    </footer>
  )
}

export default Footer