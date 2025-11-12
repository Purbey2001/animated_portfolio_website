import React from 'react'

const GlowingBlobs = () => {
  return (
    <div>
        <div className='absolute -top-32 -left-32 
        w-[70vw] sm:w-[50vw] md:w-[30vw]
        h-[70vw] sm:h-[50vw] md:h-[30vw]
        max-w-[500px] max-h-[500px]
        rounded-full 
        bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-30 sm:opacity-20 md:opacity-10
        blur-[100px] sm:blur-[130px] md:blur-[150px]
        animate-pulse
        '/>
        <div className='absolute bottom-0 right-0
        w-[70vw] sm:w-[50vw] md:w-[30vw]
        h-[70vw] sm:h-[50vw] md:h-[30vw]
        max-w-[500px] max-h-[500px]
        rounded-full 
        bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-30 sm:opacity-20 md:opacity-10
        blur-[100px] sm:blur-[130px] md:blur-[150px]
        animate-pulse delay-500
        '/>
    </div>
  )
}

export default GlowingBlobs