import React from 'react'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '../components/ParticlesBackground';
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Avator from '../assets/avator.png';
import GlowingBlobs from '../components/GlowingBlobs';


const Home = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishek-kumar3401/', icon: 'FaLinkedin' },
    { name: 'GitHub', url: 'https://github.com/Purbey2001', icon: 'FaGithub' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Purbey_2001/ ', icon: 'SiLeetcode' },
  ]
  return (
    <section id='home' className='w-full h-screen relative bg-black overflow-hidden -mt-18'>
      <ParticlesBackground/>
      <GlowingBlobs/>
      <div className='w-11/12 mx-auto h-full flex items-center justify-center lg:justify-around'>
        <div className=' w-full lg:w-[40%] flex flex-col gap-6 items-start'>
          <TypeAnimation className="text-left text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-10"
            sequence={[
              'Web Developer', // first text
              2000,                   // wait 1s
              'Software Developer',     // replace with second text
              2000,
              'MERN Stack Developer',      // replace with third text
              2000,
            ]}  
            speed={50}               // typing speed in ms per character
            omitDeletionAnimation={true} // disable deletion animation
            repeat={Infinity}        // loop forever
            wrapper="span"           // element type
            cursor={true}            // show blinking cursor
          />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='flex flex-col gap-8'
          >
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text
            bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]'
            >
              Hello, I'm 
              <br/>
              <span className='text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap'>Abhishek Kumar</span>
            </h1>
            <p className='text-lg text-white'>
              Engineer who blends DSA logic with modern full-stack architecture. Welcome to my portfolio!
            </p>
            <div className='flex flex-col md:flex-row items-center justify-around gap-6'>
              <a href={'#projects'}
              className='w-fit bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:opacity-90 hover:scale-90 transition-all duration-200'>
                View My Work
              </a>
              <a href='/Abhishek_Kumar_Resume.pdf' download
              className='w-fit bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:opacity-90 hover:scale-90 transition-all duration-200'>
                Download Resume
              </a>
            </div>
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
          </motion.div>
        </div>
        <div className='lg:w-[40%] hidden lg:flex items-center justify-center select-none pointer-events-none'>
              <img src={Avator} alt="Avator" className='w-full h-[80vh] z-60 object-contain select-none pointer-events-none'
              />
        </div>
      </div>
    </section>
  )
}

export default Home