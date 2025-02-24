import React from 'react'
import { assets } from '../../assets/assets'

const Topnav = () => {
  return (
    <div className='w-full flex items-center justify-between p-6'>
        <h1 className='text-xl text-gray-600'>Gemini</h1>
        <img className='rounded-full w-10 h-10 bg-blue-200' src={assets.user_icon} alt="" />
    </div>
  )
}

export default Topnav