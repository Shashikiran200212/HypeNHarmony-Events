import React from 'react';

const Location = () => {
  return (
    <div className='w-full h-screen'>
      {/* // mobile devices */}
      <div className='w-full h-screen bg-black flex flex-col md:hidden'>
      {/* Map on top for mobile devices, stays same for medium and larger screens */}
        <div className='flex-none flex justify-center p-8 py-16'>
          <a href="https://www.google.com/maps/place/Hype+N+Harmony+Events/@17.3297148,78.5454575,17z/data=!4m6!3m5!1s0x446619776edd93a3:0x95bba0f025cdddec!8m2!3d17.3297763!4d78.5467879!16s%2Fg%2F11y5nlygkt?entry=ttu">
            <img src="map.png" alt="Map location" className='w-full max-w-md h-auto rounded-lg shadow-lg' />
          </a>
        </div>
      {/* Address and footer below the map on mobile devices */}
        <div className='flex-grow flex flex-col  p-4'>
          <div className='w-full flex flex-col items-center text-start  mb-8'>
            <div className='ml-5'>
              <h1 className='text-white text-lg font-bold'>
                Address: <br />
                Hastinapuram Central, RKR Enclave, Devakammathota,<br />
                RKR Enclave Park, Hyderabad, <br />
                Telangana, 500079
              </h1>
              <h2 className='text-white mt-3'>📱 7075376978</h2>
            </div>
            <footer className=' text-white p-4 py-16'>
              <div className='flex space-x-4'>
                <img src="instagram.png" alt="Instagram Icon" className='h-8 w-8' />
                <img src="x.png" alt="Other Icon" className='h-8 w-8' />
              </div>
            </footer>
          </div>
        </div>
    </div>

{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    {/* Medium to larger deives */}
    <div className='w-full h-screen bg-black flex flex-col justify-between'>
      <div className='flex flex-grow items-center justify-between p-8'>
        <div className='w-full md:w-1/2 flex justify-center'>
          <div className='text-center md:text-left'>
            <h1 className='text-white text-lg md:text-xl xl:text-3xl font-bold'>
              Address: <br />
              Hastinapuram Central, RKR Enclave, Devakammathota,<br />
              RKR Enclave Park, Hyderabad, <br />
              Telangana, 500079
            </h1>
            <h2 className='text-white mt-3'>📱 7075376978</h2>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <a href="https://www.google.com/maps/place/Hype+N+Harmony+Events/@17.3297148,78.5454575,17z/data=!4m6!3m5!1s0x446619776edd93a3:0x95bba0f025cdddec!8m2!3d17.3297763!4d78.5467879!16s%2Fg%2F11y5nlygkt?entry=ttu" target='_blank' rel='noopener noreferrer'>
            <img src="map.png" alt="Map location" className='w-full h-96 md:h-96 lg:h-[600px] xl:h-[550px] rounded-lg shadow-lg object-cover' />
          </a>
        </div>
      </div>

      <footer className='bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center'>
  <div className='flex-grow text-left mb-4 md:mb-0'>
    <p>Copyright © HypeNHarmony 2024</p>
  </div>
  <div className='flex space-x-4'>
    <a href="https://www.instagram.com/hypenharmony.events/?hl=en" target='blank'><img src="instagram.png" alt="Instagram Icon" className='h-8 w-8' /></a>
    <a href="https://www.facebook.com/HypeNHarmony.Events" target='blank'><img src="x.png" alt="Other Icon" className='h-8 w-8' /></a>
  </div>
</footer>

    </div>
    </div>
    
  );
}

export default Location;
