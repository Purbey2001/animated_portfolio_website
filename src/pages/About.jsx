import React from 'react'
import GlowingBlobs from '../components/GlowingBlobs'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section id='about' className='relative w-full min-h-screen flex items-center justify-center bg-black
     text-white overflow-hidden py-8'>
      <GlowingBlobs/>
      <div className='z-10 w-11/12 md:w-3/4 lg:w-1/2 mx-auto bg-opacity-10 rounded-lg
       backdrop-blur-md shadow-lg'>
        <div className='flex flex-col items-start gap-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
          bg-linear-to-r from-[#1cd8d2] to-[#00bf8f] '>Abhishek Kumar</h2>
          <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Aspiring 
            <TypeAnimation className="text-left text-xl md:text-2xl lg:text-3xl font-semibold text-white"
              sequence={[
                ' Web Developer', // first text
                2000,                   // wait 1s
                ' Software Developer',     // replace with second text
                2000,
                ' MERN Stack Developer',      // replace with third text
                2000,
              ]}  
              speed={50}               // typing speed in ms per character
              omitDeletionAnimation={true} // disable deletion animation
              repeat={Infinity}        // loop forever
              wrapper="span"           // element type
              cursor={true}            // show blinking cursor
            />
          </h3>
          <p className='text-lg md:text-xl text-gray-300'>
            I'm Abhishek Kumar, a passionate Web and Software Developer specializing in the MERN stack.
            I love crafting dynamic and responsive web applications that provide seamless user experiences.
            With a strong foundation in data structures and algorithms, I bring efficient solutions to complex problems.
          </p>
          <div className='w-full flex flex-col md:flex-row gap-6 items-center lg:items-start'>
            <div className='px-6 py-4 bg-rgba(0,0,0,0.4) outline outline-gray-500 text-center rounded-lg shadow-md'>
              <h4 className='text-sm md:text-md font-semibold text-gray-500'>Speciality</h4>
              <p className='mt-2 text-md md:text-lg font-bold'>Full Stack</p>
            </div>
            <div className='px-6 py-4 bg-rgba(0,0,0,0.4) outline outline-gray-500 text-center rounded-lg shadow-md'
             style={{padding:'16px 24px'}}>
              <h4 className='text-sm md:text-md font-semibold text-gray-500'>Focus</h4>
              <p className='mt-2 text-md md:text-lg font-bold'>Performance & UI/UX</p>
            </div>
          </div>
          <div className='w-full flex gap-6 justify-around md:justify-start'>
            <button className='bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] 
            text-white px-6 py-3 rounded-full font-medium shadow-lg hover:opacity-90 hover:scale-90 
            transition-all duration-200'>
              <a href='#projects'>Projects</a>
            </button>
            <button className='bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            text-white px-6 py-3 rounded-full font-medium shadow-lg hover:opacity-90 hover:scale-90 
            transition-all duration-200'>
              <a href='#contact'>Get In Touch</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About