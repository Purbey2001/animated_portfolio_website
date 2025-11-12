import React, { useState,useRef } from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import Astra from '../assets/astra.png'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData,setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const changeHandler = (e) => {
    setFormData({
      ...formData,  
      [e.target.name]: e.target.value
    })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      'service_kvicm2i',     
      'template_nz6pdc6',    
      formData,
      'Qn1kEN_tW1dhndP_b'
    )
    .then(() => {
      setIsSending(false);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 4000);
    })
    .catch((error) => {
      setIsSending(false);
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again later.');
    });
  };
  return (
    <section id='contact' className='w-full min-h-screen relative bg-black overflow-hidden flex items-center justify-center py-12'>
      <ParticlesBackground />
      <div className='w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-6'>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className='h-[60vh] mt-20 z-60'>
          <motion.img 
          animate={{
            y: [0, -40, 0], // move up 40px then back
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src={Astra} className='w-full h-full object-contain'/>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text
          bg-linear-to-r from-pink-500 to-blue-500'>Contact Me</h2>
          <form ref={form} onSubmit={submitHandler} className='flex flex-col gap-2 mt-4 w-80 md:w-[400px]'>
            <label>
              Name <sup className='text-red-500'>*</sup>
              <input type="text" 
              required
              value={formData.name}
              onChange={changeHandler}
              name='name' 
              placeholder='Your Name'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800 text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            </label>
            <label>
              Email <sup className='text-red-500'>*</sup>
              <input type="email"
              required
              value={formData.email}
              onChange={changeHandler}
              name='email'
              placeholder='Your Email' 
              className='w-full mt-2 p-3 rounded-lg bg-gray-800 text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            </label>
            <label className='relative'>
              Message <sup className='text-red-500'>*</sup>
              <textarea type="text"
              rows="4"
              maxLength="200"
              required
              value={formData.message}
              onChange={changeHandler}
              name='message'
              placeholder='Your Message'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800 text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500'/>
              <span className='absolute bottom-3 right-4 text-sm text-gray-400'>200 characters max</span>
            </label>
            <button type="submit"
              disabled={isSending}
            onClick={submitHandler}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold
            py-3 rounded-lg transition duration-300'>{isSending ? 'Sending...' : 'Send Message'}</button>
            {success && (
              <p className='text-green-400 text-center mt-2 animate-pulse'>
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact