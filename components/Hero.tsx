import React from 'react';


const Hero = () => {
  return (
    <div
      className='relative w-full h-screen bg-cover bg-center'
      style={{ backgroundImage: "url('bg1.jpg')" }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-80'></div>  
      
      {/* Content */}
      <div className='relative z-10  flex flex-col h-full md:justify-normal justify-center'>
        <div className='flex flex-col md:mb-0 mb-5 md:flex-row items-center justify-between px-4 md:px-11 h-28'>
          <span className='flex relative'>
            <img src="logow.png" alt="logo" className='w-[150px] h-[150px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]' />
          </span>
          <div className='hidden md:flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:text-sm lg:text-base font-sans font-thin'>
            <a href="#About"><div className='text-white flex justify-center px-4 md:px-10'>About us</div></a>
            <a href="#process"><div className='text-white flex justify-center px-4 md:px-10'>Our Process</div></a>
            <a href="#offer"><div className='text-white flex justify-center px-4 md:px-10'>What we offer</div></a>
            <a href="#recentworks"><p className='text-white flex justify-center px-4 md:px-10'>Gallery</p></a>
            <a href="#enquiry"><p className='text-white flex justify-center px-4 md:px-10'>Contact</p></a>
          </div>
        </div>
        <div className='flex flex-col items-center  lg:mt-10 p-8 md:p-20 lg:p-52 text-white'>
          <h1 className='text-4xl lg:text-8xl '>Hype and Harmony events</h1>
          <h1 className='text-xl md:text-4xl mt-4 font-thin'>
            Experience the perfect blend
          </h1>
          <div className='mt-10 flex flex-col  md:justify-start md:flex-row space-y-4 md:space-y-0 md:space-x-8'>
           <a href="https://wa.me/+917075376978?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20event%20planning%20services" target="_blank" rel="noopener noreferrer">
            <button className="relative inline-flex h-8 w-24 md:h-12 md:w-36 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-[10px] md:text-sm font-medium text-white backdrop-blur-3xl">
                Connect now
              </span>
            </button>
           </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
