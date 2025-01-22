import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct import for modules
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Styles for navigation buttons
import  feed from '../Hero-section/image/feedbak.png'
import left from '../Hero-section/image/left-arrow.svg'
import right from '../Hero-section/image/right-arrow.svg'
function Feecback() {
  const data = [
    {
      name:"Mitchell Marsh",
      company : "CEO, Bexon Agency",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
      
    },
    {
      name:"Mitchell Marsh",
      company : "CEO, Bexon Agency",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
      
    },
   ];
  return (
    <div className='   my-[195px]'>
      <div className="feadback-heading text-center my-4">
        <p className='text-3xl md:text-5xl my-3 font-bold'>Our Clients Feedback</p>
        <p className='mt-10'>The food at your doorstep. Why starve when you have us. You hunger <br /> partner. Straight out of the oven to your doorstep.</p>
      </div>
     
      <div className="clint-feedback text-start md:text-center my-5">
        <img src={feed} alt="" className='text-primary mx-auto my-8'/>

        <div className="review-section">
        <p className='my-4 text-center'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</p>
        <div className="name flex flex-col gap-y-2 my-5">
            <p className='font-bold text-center'>Mitchell Marsh</p>
            <p className='text-md text-center'>CEO, Bexon Agency</p>
        </div>
        </div>
        
        <div className="feedback-btn flex gap-x-3 justify-center">
        <div className="flex items-center justify-center w-8 h-8  left-arrow className=' rounded-full bg-cardsBg">
              <img src={left} alt="" className='object-fill' />
        </div>
        <div className="right-arrow flex items-center justify-center w-8 h-8  bg-primary rounded-full">
        <img src={right} alt="" className='object-fill  '/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Feecback
