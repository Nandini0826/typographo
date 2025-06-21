import React from 'react'
import Slider from '../components/Slider'
import NewsContext from '../context/NewsContext'
import Info from '../components/Info'
const Home = () => {
  return (
    <div className=' flex flex-col bg-[#061039]' >
      <Slider />
      <NewsContext />
      <Info />
    </div>
  )
}

export default Home