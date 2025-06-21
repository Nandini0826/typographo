import React from 'react'
import { Assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div className="relative w-full">
      <img src={Assets.gallery} alt="" className="w-full " />
      <p className="absolute left-0 top-1/2 -translate-y-1/2 text-left pl-4 text-white text-2xl z-10 m-5">
              Know more about us
              <br></br>
              <Link onClick={()=>setVisible(false)} className='text-xl border rounded p-2' to='/gallery'>Check out now</Link>
      </p>
    </div>
  )
}

export default Info
