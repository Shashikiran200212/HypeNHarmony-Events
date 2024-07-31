import React from 'react';
import { ParallaxScrollDemo } from './ui/parallaxImages';

const RecentWorks = () => {
  return (
    <div className='w-full min-h-screen flex flex-col bg-gray-200 p-7' id="recentworks">
        
      <div className='w-full flex justify-center mt-16 md:mt-0'>
        <h1 className='text-4xl md:text-7xl font-semibold font-sans text-black text-center'>
          Our Recent <span className='text-purple-300'>Works</span>
        </h1>
      </div>

      <div className='flex flex-col items-center mt-10 md:mt-16'>
        <ParallaxScrollDemo />
      </div>
      
    </div>
  );
};

export default RecentWorks;
