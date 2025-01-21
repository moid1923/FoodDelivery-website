import React from 'react'
import './hero.css'
import hero from './image/Frame 18535.png'
import apple from './image/Apple logo.png'
import google from './image/Google Play logo.svg'


function Hero() {
  return (
    <div className=' relative font-inter flex items-center justify-center '>
      <div className="hero-section max-w-[1264px] w-full mx-auto flex items-center justify-between my-16 overflow-x-hidden gap-x-16">
        <div className="hero-left ">
            <h1 className=' text-3xl md:text-4xl lg:text-5xl font-bold'>Your Favorite Food <br /> Delivery Partner</h1>
            <p className='my-4'>The food at your doorstep . Why starve when you have us. You <br /> hunger partner. Straight out of the oven to your doorstep. </p>
            <div className="hero-left-btn relative">
            <input type="Place your order" className="btn w-[464px] bg-cardsBg rounded-3xl px-3 py-3 my-3" placeholder='Place your order'/>
            <button className="order-btn w-28 py-2 px-2 text-base bg-primary rounded-3xl absolute right-1 bottom-4 text-white ">Order Now</button>
            </div>
            
            <div className="hero-btns  my-3 flex gap-2">
                       <div className="apple-btn flex w-[186px] gap-x-3 bg-cardsBg p-4">
                        <div className="img">
                          <img src={apple} alt="" className=''/>
                        </div>
                        <div className="data flex flex-col ">
                          <p className='text-xs'>Download on the</p>
                          <p className='font-bold'>App Store</p>
                        </div>
                       </div>
                        <div className="apple-btn flex w-[186px] gap-x-3 bg-cardsBg p-4">
                        <div className="img">
                          <img src={google} alt="" className=''/>
                        </div>
                        <div className="data flex flex-col ">
                          <p className='text-xs'>Get it on</p>
                          <p className='font-bold'>Google Play</p>
                        </div>
                       </div>
                       
                
            </div>
        </div>
        <div className="hero-right">
                 <div className="hr-image  hidden lg:block">
                    <img src={hero} alt=""  className='w-full'/>
                 </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
