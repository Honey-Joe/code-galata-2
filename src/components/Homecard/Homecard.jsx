import React from 'react';

const Homecard = ({ home }) => {
  return (
    <div className='flex flex-col gap-2 items-center py-10 px-5 justify-center bg-white hover:scale-[1.01]' id='certi'>
      <div className=''>
        <img src={home.image} alt={home.name} className='' />
      </div>
      

      <h1 className='lg:text-xl font-semibold font-[poppins] text-lg'>{home.name}</h1>
      <p className='text-gray-500 text-center font-[poppins] lg:text-[16px] text-[14px]'>{home.content}</p>
     
    </div>
  );
};

export default Homecard;
