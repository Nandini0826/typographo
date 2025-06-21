import React from 'react'
import { Assets } from '../assets/assets'

const Slider = () => {
  return (
      <div className='bg-[#E1F0F5] flex flex-col rounded sm:flex-row overflow-hidden"' >
      {/*left side*/}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:px-[6vw] md:px-[7vw] lg:px-[9vw] sm:py-0'>
              <div className='text-[#061039]'>
                  <div className='items-start gap-2'>
                      <h1 className='ibm-plex-serif-medium sm:text-xl md:text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Kickstart your career in printing Technology</h1>
                      <p>No matter who you are, you have a place here. Explore guides, join discussions, find suppliers, or get mentorship.</p>
                  </div>
      </div>
          </div>
          {/*Right side */}
          <img className='w-full sm:w-1/2' src={Assets.print} alt="" />
    </div>
  )
}

export default Slider