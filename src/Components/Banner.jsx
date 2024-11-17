import React from 'react'
import banner from "../../public/images/banner.png"

const Banner = () => {
  return (
    <div className='mt-6'>
        <img className='w-full object-cover' src={banner} alt="banner" />
    </div>
  )
}

export default Banner