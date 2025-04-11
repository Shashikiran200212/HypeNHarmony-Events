import React from 'react';

const Hero = () => {
  return (
    <div
      className='relative w-full h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('bg1.jpg')" }}
    >
      {/* Overlay with responsive opacity */}
      <div className='absolute inset-0 bg-black opacity-70 md:opacity-80'></div>  
      
      {/* Content container */}
      <div className='relative z-10 h-full flex flex-col'>
        {/* Navigation */}
        <div className='flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-11 py-4 md:py-6'>
          <span className='flex'>
            <img 
              src="logow.png" 
              alt="logo" 
              className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32'
            />
          </span>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 text-sm sm:text-base lg:text-lg font-sans font-thin'>
            <a href="#About" className='text-white hover:text-gray-300 transition-colors duration-300'>About us</a>
            <a href="#process" className='text-white hover:text-gray-300 transition-colors duration-300'>Our Process</a>
            <a href="#offer" className='text-white hover:text-gray-300 transition-colors duration-300'>What we offer</a>
            <a href="#recentworks" className='text-white hover:text-gray-300 transition-colors duration-300'>Gallery</a>
            <a href="#enquiry" className='text-white hover:text-gray-300 transition-colors duration-300'>Contact</a>
          </div>
        </div>
        
        {/* Centered content - now properly in the middle */}
        <div className='flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-tight'>
            Hype and Harmony Events
          </h1>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-4 md:mt-6 font-thin text-gray-200'>
            Experience the perfect blend
          </h2>
          
          <div className='mt-8 sm:mt-12 md:mt-16'>
            <a 
              href="https://wa.me/+917075376978?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20event%20planning%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className='inline-block'
            >
              <button className="relative inline-flex h-10 sm:h-12 md:h-14 w-32 sm:w-40 md:w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:opacity-90 transition-opacity duration-300">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm sm:text-base md:text-lg font-medium text-white backdrop-blur-3xl">
                  Connect now
                </span>
              </button>
            </a>
          </div>
        </div>
        
        {/* Optional bottom content or spacing */}
        <div className='pb-8 md:pb-12'></div>
      </div>
    </div>
  )
}

export default Hero;