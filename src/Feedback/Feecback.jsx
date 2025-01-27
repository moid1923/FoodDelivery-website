import React, { useState } from "react";
import  feed from '../Hero-section/image/feedbak.png'
import left from '../Hero-section/image/left-arrow.svg'
import right from '../Hero-section/image/right-arrow.svg'

function Feecback() {
  const data = [
    {
      name:"Mitchell Marsh",
      company : "CEO, Bexon Agency",
      review: (
        <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi</>
      ),
      
      
    },
    {
      name:"jahanzaib",
      company : "Octaloop technologies",
      review: (
        <>HE is a brilliant student and good boy.They work  in collabrative environment</>
      ),
      
    },
   ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };
 
  return (
    <div className=' custom-range:my-[48px]  my-[195px]  custom-range:text-start'>
      <div className="feadback-heading text-center my-4 px-6 custom-range:text-start ">
        <p className='text-3xl md:text-5xl my-3 font-bold'>Our Clients Feedback</p>
        <p className='mt-10'>The food at your doorstep. Why starve when you have us. You hunger <br /> partner. Straight out of the oven to your doorstep.</p>
      </div>
     
      <div className="clint-feedback custom-range:text-start text-center my-5 px-6 relative">
        <img src={feed} alt="" className='text-primary mx-auto my-8 custom-range:w-[50px] '/>

        <p className='my-4  sm:w-[600px] mx-auto'>{data[currentIndex].review}</p>
        <div className="name flex flex-col gap-y-2 my-5">
            <p className='font-bold '>{data[currentIndex].name}</p>
            <p className='text-md '>{data[currentIndex].company}</p>
        
        </div>
          
        
        
        <div className="feedback-btn flex gap-x-3 justify-center">
        <div className="flex items-center justify-center w-8 h-8  left-arrow className=' rounded-full bg-cardsBg" onClick={handlePrev}>
              <img src={left} alt="" className='object-fill' />
        </div>
        <div className="right-arrow flex items-center justify-center w-8 h-8  bg-primary rounded-full " onClick={handleNext}>
        <img src={right} alt="" className='object-fill  ' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Feecback
