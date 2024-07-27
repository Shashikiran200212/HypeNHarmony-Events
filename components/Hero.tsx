import React from 'react';
import { FlipWords } from './ui/Flip-words';
import { words } from '@/data';
import CopyButton from './ui/copyButton';

const Hero = () => {
  return (
    <div
      className='relative w-full h-screen bg-cover bg-center'
      style={{ backgroundImage: "url('bg1.jpg')" }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-80'></div>  
      
      {/* Content */}
      <div className='relative z-10 flex flex-col h-full md:justify-normal justify-center'>
        <div className='flex flex-col md:mb-0 mb-5 md:flex-row items-center justify-between px-4 md:px-11 h-28'>
          <span className='flex relative'>
            <img src="logow.png" alt="logo" className='w-[150px] h-[150px] md:w-[100px] md:h-[100px]' />
          </span>
          <div className='hidden md:flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0'>
            <div className='text-white flex justify-center px-4 md:px-10'>Home</div>
            <a href="#services"><div className='text-white flex justify-center px-4 md:px-10'>Events</div></a>
            <p className='text-white flex justify-center px-4 md:px-10'>Gallery</p>
            <p className='text-white flex justify-center px-4 md:px-10'>Contact</p>
            <button className='text-white flex justify-center px-4 py-1 border rounded-full w-auto h-9 bg-black'>
              8309338241
            </button>
          </div>
        </div>
        <div className='flex flex-col items-center md:mt-36 lg:mt-6 p-8 md:p-20 lg:p-52 text-white'>
          <h1 className='text-3xl md:text-4xl font-thin mb-4'>Hype N Harmony</h1>
          <h1 className='text-5xl md:text-8xl'>Event Planners</h1>
          <h1 className='text-2xl md:text-4xl mt-4 font-thin'>
            we organize<span><FlipWords words={words} className='-ml-0' /></span>
          </h1>
          <div className='mt-10 flex flex-col  md:justify-start md:flex-row space-y-4 md:space-y-0 md:space-x-8'>
           <a href="#About">
            <button className="relative inline-flex h-12 w-36 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                About Us
              </span>
            </button>
           </a>
          <CopyButton/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
