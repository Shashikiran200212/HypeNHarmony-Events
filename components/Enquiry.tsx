import React from 'react';
import EnquiryForm from './ui/EnquiryForm';

const Enquiry = () => {
  return (
    <div className="relative w-full h-screen bg-slate-400 flex flex-col items-center justify-center overflow-hidden" id='enquiry'>
      {/* Overlay for Background Image */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('bg1.1.jpg')" }}></div>

      {/* Overlay on Background Image */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Heading at the Top */}
      <div className="relative z-10 w-full text-center text-white px-4 md:px-8 lg:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-7 font-semibold font-sans">
          Get in <span className='text-purple-400'>Touch</span>
        </h1>
      </div>

      {/* Enquiry Form Container */}
      <div className="relative z-10 w-full max-w-lg p-6 bg-transparent rounded-lg shadow-lg mt-6 mx-4 sm:mx-6 lg:mx-8">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default Enquiry;
