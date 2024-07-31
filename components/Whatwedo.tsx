import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { FlipWords } from './ui/Flip-words';
import { words } from '@/data';
import './Whatwedo.css';

const Whatwedo = () => {
  return (
    <div className='w-full h-2/3 relative overflow-hidden' id='offer'>
      <BackgroundGradientAnimation>
        <div className="md:relative md:py-32  md:gap-4 z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none">
          <div className='text-sm md:text-4xl m-6 md:m-10 font-thin space-x-72 text-white'>
            <u style={{ 
              textDecoration: 'underline', 
              textDecorationColor: 'inherit', 
              textUnderlineOffset: '5px',
              textDecorationThickness: '1px' // Adjust the thickness here
            }}>
              What we offer
            </u>
          </div>
          <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-[18px] text-center md:text-4xl lg:text-7xl">
            Event <span className='-ml-2'><FlipWords words={words}/></span>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Whatwedo;
