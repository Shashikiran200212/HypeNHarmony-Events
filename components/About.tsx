import React from 'react';

const About = () => {
  return (
    <div className='relative bg-slate-400 bg-opacity-45 w-full md:h-screen  flex flex-col md:flex-row  md:px-24  md:py-12' id='About'>
      {/* Image and overlay for mobile */}
      <div className='relative flex justify-center items-center md:w-1/2 md:mb-0  '>
        <img
          src="bg2.jpg"
          alt="Background"
          className='   w-full md:h-screen lg:h-screen   max-w-[650px] opacity-80'
        />
        {/* Dark overlay on mobile */}
        <div className='absolute inset-0 bg-black opacity-40 md:hidden '></div>
        {/* Text overlay on mobile */}
        <div className='absolute inset-0 flex justify-center items-center p-6 text-center text-white md:hidden'>
          <div>
            <h1 className='text-3xl font-bold mb-4'>
              About Us
            </h1>
            <p className='text-base font-light leading-6 justify-center '>
              Harmony in Hype, where we craft perfection in every event! 🌟 Our dedicated team brings together creativity, meticulous planning, and seamless execution to transform your vision into unforgettable experiences. Whether it&apos;s a corporate gala, a dream wedding, or an intimate celebration, we ensure every detail harmonizes to create moments that resonate. Let us elevate your event to new heights, making memories that last a lifetime.
            </p>
          </div>
        </div>
      </div>

      {/* Text for larger screens */}
      <div className='flex flex-col justify-center items-start md:w-1/2 text-center md:text-left md:pl-12'>
        <h1 className='text-black text-3xl md:text-5xl font-bold mb-4 hidden md:block'>
          About Us
        </h1>
        <p className='text-black text-base md:text-lg leading-relaxed hidden md:block'>
          Harmony in Hype, where we craft perfection in every event! 🌟 Our dedicated team brings together creativity, meticulous planning, and seamless execution to transform your vision into unforgettable experiences. Whether it&apos;s a corporate gala, a dream wedding, or an intimate celebration, we ensure every detail harmonizes to create moments that resonate. Let us elevate your event to new heights, making memories that last a lifetime.
        </p>
      </div>
    </div>
  );
};

export default About;
