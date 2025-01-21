import React from 'react'
import './hero.css'
import hero from './image/Frame 18535.png';

function Hero() {
  return (
    <div className=' relative font-inter flex items-center justify-center '>
      <div className="hero-section max-w-[1264px] flex items-center justify-between my-16 overflow-x-hidden gap-x-16">
        <div className="hero-left ">
            <h1 className=' text-3xl md:text-4xl lg:text-5xl font-bold'>Your Favorite Food <br /> Delivery Partner</h1>
            <p className='my-4'>The food at your doorstep . Why starve when you have us. You <br /> hunger partner. Straight out of the oven to your doorstep. </p>
            <div className="hero-left-btn relative">
            <input type="Place your order" className="btn w-full bg-slate-100 rounded-3xl px-3 py-2" placeholder='Place your order'/>
            <button className="order-btn w-28 py-2 px-2 text-base bg-primary rounded-3xl absolute right-0 text-white ">Order Now</button>
            </div>
            
            <div className="hero-btns mx-2 my-3 flex gap-2">
                <button className="first w-32 px-3 py-2 text-base bg-slate-100 border-r-2 rounded-2xl">App Store</button>
                <button className="second  w-32 px-3 py-2 text-base bg-slate-100 border-r-2 rounded-2xl">Google Play</button>
            </div>
        </div>
        <div className="hero-right">
                 <div className="hr-image  hidden lg:block">
                    <img src={hero} alt=""  className='w-96'/>
                 </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
