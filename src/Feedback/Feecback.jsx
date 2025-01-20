import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Feecback() {
  return (
    <div className=' overflow-x-hidden  my-6'>
      <div className="feadback-heading text-center my-4">
        <p className='text-3xl md:text-5xl my-3 font-bold'>Our Clients Feedback</p>
        <p className='my-3'>The food at your doorstep. Why starve when you have us. You hunger <br /> partner. Straight out of the oven to your doorstep.</p>
      </div>
      <div className="clint-feedback text-start md:text-center my-5">
        {/* <p>Colin</p> */}
        <p className='my-4'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
        <div className="name flex flex-col gap-y-2 my-5">
            <p className='font-bold'>Mitchell Marsh</p>
            <p className='text-md'>CEO, Bexon Agency</p>
        </div>
        <div className="feedback-btn flex gap-x-3 justify-center">
        <FaArrowLeft size={20} className='w-12 h-12 p-4  rounded-full' />
        <FaArrowRight size={20} className='w-12 h-12 p-4 bg-orange-500 rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Feecback
