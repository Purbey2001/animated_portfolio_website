import React from 'react'
import { FaJava,FaReact,FaHtml5,FaCss3,FaBootstrap,FaNodeJs,FaGitAlt,FaGithub} from "react-icons/fa";
import { TbBrandJavascript,TbBrandRedux,TbBrandTailwind,TbBrandMysql,TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoPostgresql,BiLogoCPlusPlus } from "react-icons/bi";
import { SiExpress,SiMongoose,SiPostman,SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion} from 'framer-motion';
import GlowingBlobs from '../components/GlowingBlobs';


const Skills = () => {
  const skills = [
    { name: 'C++', icon: <BiLogoCPlusPlus size={50} color="#00599C"/> },
    { name: 'JavaScript', icon: <TbBrandJavascript size={50} color="#f0db4f"/> },
    { name: 'React', icon: <FaReact size={50} color="#61DBFB"/> },
    { name: 'Redux', icon: <TbBrandRedux size={50} color="#764ABC"/> },
    { name: 'HTML5', icon: <FaHtml5 size={50} color="#e34c26"/> },
    { name: 'CSS3', icon: <FaCss3 size={50} color="#264de4"/> },
    { name: 'Bootstrap', icon: <FaBootstrap size={50} color="#563d7c"/> },
    { name: 'Tailwind CSS', icon: <TbBrandTailwind size={50} color="#38B2AC"/> },
    { name: 'Node.js', icon: <FaNodeJs size={50} color="#68A063"/> },
    { name: 'Express.js', icon: <SiExpress size={50} color="000000"/> },
    { name: 'MongoDB', icon: <SiMongodb size={50} color="#4DB33D"/> },  
    { name: 'Mongoose', icon: <SiMongoose size={50} color="#880000"/> },
    { name: 'MySQL', icon: <TbBrandMysql size={50} color="#00758F"/> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql size={50} color="#336791"/> },
    { name: 'Java', icon: <FaJava size={50} color="#f89820"/> },
    { name: 'Git', icon: <FaGitAlt size={50} color="#F1502F"/> },
    { name: 'GitHub', icon: <FaGithub size={50} color="#181717"/> },
    { name: 'Postman', icon: <SiPostman size={50} color="#FF6C37"/> },
    { name: 'VS Code', icon: <VscVscode size={50} color="#007ACC"/> },
    { name: 'Framer Motion', icon: <TbBrandFramerMotion size={50} color="#0055FF"/> },
  ];
  return (
    <section id='skills' className='relative w-full min-h-screen flex flex-col items-center justify-center bg-black gap-8 py-8 overflow-hidden'>
      <GlowingBlobs />
      <h1 className='text-4xl font-bold mb-8 text-transparent bg-clip-text
      bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]'>My Skills</h1>
      <motion.div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'
      initial={{ opacity: 0, scale:0.3}}
      whileInView={{ opacity: 1, scale:1}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount:0.3 }}>
        {skills.map((skill) => (
          <div key={skill.name} className='flex flex-col items-center 
          justify-center p-2 bg-gray-800 rounded-lg shadow-md hover:scale-105 
          transform transition-all duration-200'>
            {skill.icon}
            <span className='text-lg'>{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills