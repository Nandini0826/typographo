import React from 'react'

const Footer = () => {
  return (
      <div className='bg-[#061039] text-[#E1F0F5]  border-t-2'>
          <div className=' sm:grid gap-14 my-10 p-5 text-sm'>
              <div className='text-xl'>
                  Typographo
              </div>
              
                  <p className='w-full md:w-2/3'>Home</p>
                  <p className='w-full md:w-2/3'>About Us</p>
                  <p className='w-full md:w-2/3'>Shop</p>
                  <p className='w-full md:w-2/3'>privacy policy</p>
                  <p className='w-full md:w-2/3'>Customer Service</p>
              

          </div>
          <div>
    
              <p className='py-5 text-sm text-center'>Copyright 2025@ Typography.com. All rights reserved </p>
          </div>
    </div>
  )
}

export default Footer