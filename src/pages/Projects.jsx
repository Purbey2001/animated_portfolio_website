import React, { useState, useRef} from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import passwordGeneratorMobile from '../assets/password-generator-mobile.png'
import passwordGeneratorDesktop from '../assets/password-generator-desktop.png'
import ticTacToeMobile from '../assets/tic-tac-toe-mobile.png'
import ticTacToeDesktop from '../assets/tic-tac-toe-desktop.png'
import weatherAppMobile from '../assets/weather-mobile.png'
import weatherAppDesktop from '../assets/weather-desktop.png' 


const Projects = () => {
  const projects = [
    {
      title: 'Weather App',
      description: 'A responsive weather app that shows real-time weather for any city or your current location using the OpenWeatherMap API.',
      mobileImageUrl: weatherAppMobile,
      desktopImageUrl: weatherAppDesktop,
      projectUrl: 'https://purbey2001.github.io/weather_app/',
      githubUrl: 'https://github.com/Purbey2001/weather_app',
      bgColor: "#0d4d3d80"
    },
    {
      title: 'Password Generator',
      description: 'A responsive app to generate strong, customizable passwords with strength indicator and copy-to-clipboard feature.',
      mobileImageUrl: passwordGeneratorMobile,
      desktopImageUrl:  passwordGeneratorDesktop,
      projectUrl: 'https://purbey2001.github.io/generate_password/',
      githubUrl: 'https://github.com/Purbey2001/generate_password',
      bgColor:  "#0d4d3dbf"
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'An interactive Tic-Tac-Toe game with player turns, win detection, and restart option — built with HTML, Tailwind CSS, and JavaScript.',
      mobileImageUrl: ticTacToeMobile,
      desktopImageUrl: ticTacToeDesktop,
      projectUrl: 'https://purbey2001.github.io/tic_tac_toe/',
      githubUrl: 'https://github.com/Purbey2001/tic_tac_toe',
      bgColor: "#0d4d3d"
    }
  ]
  const sceneRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"]
  });
  const thresholds = projects.map((_, i) => (i+1)/ projects.length);
  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = thresholds.findIndex((threshold) => latest <= threshold);
    setActiveIndex(index === -1 ? projects.length -1 : index);
  });
  const activeProject = projects[activeIndex];
  return (
    <section id="projects" 
    ref={sceneRef}
    className='relative w-full text-white'
    style={{
      height:`${projects.length * 100}vh`,
      backgroundColor: activeProject.bgColor,
      transition: 'all 0.5s ease-in-out'
    }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center md:pt-10 ">
        <h2 className="text-3xl font-semibold z-10 text-center ">
          My Project
        </h2>
        <div className="w-[85%] max-w-[1260px] flex flex-col items-center mt-2 gap-2">
          <h3 className="text-3xl text-transparent bg-clip-text
          bg-linear-to-r from-red-600 via-pink-600 to-blue-800">{activeProject.title}</h3>
          <p className="text-center lg:w-[60%] text-gray-300">{activeProject.description}</p>
          <img src={activeProject.desktopImageUrl} className="h-[60vh] object-contain hidden md:block rounded-2xl"/>
          <img src={activeProject.mobileImageUrl} className="h-[50vh] object-contain md:hidden rounded-2xl"/>
          <div className="flex gap-4 lg:gap-8">
            <a 
              href={activeProject.projectUrl}   
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-white text-black rounded-full bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]  hover:text-white transition-all duration-200"  
            >View Project</a>
            <a 
              href={activeProject.githubUrl}   
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-white text-black rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] hover:text-white transition-all duration-200"  
            >
              View Code</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects