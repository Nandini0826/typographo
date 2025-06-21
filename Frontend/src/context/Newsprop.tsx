import React from 'react';

const Newsprop = ({ title, description, src, url }) => {
  return (
    <div className='w-full bg-[#E1F0F5] shadow-lg rounded-lg overflow-hidden flex flex-col items-center'>
      <img src={src} className='w-full h-40 object-cover' alt='News' />
      <div className='bg-[#E1F0F5]'>
        <h5 className='font-bold text-[#061039] text-lg mb-2'>{title}</h5>
        <p className='text-[#E1F0F5]'>{description}</p>
      </div>
    </div>
  );
};

export default Newsprop;
