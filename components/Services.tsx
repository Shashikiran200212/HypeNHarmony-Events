import React from 'react';
import { LayoutGridDemo } from './ui/grid';

const Services = () => {
  return (
    <div className='w-full min-h-screen bg-[#252525] flex flex-col py-8' id='services'>
      <div className='flex justify-center mb-8 px-4'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-sans text-white text-center'>Events we cover</h1>
      </div>
      <div className='w-full px-4'>
        <LayoutGridDemo />
      </div>
    </div>
  );
};

export default Services;
