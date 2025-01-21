import React from 'react'

function Subscription() {
  return (
    <div className='max-w-[1600px] w-full  bg-sub flex items-center justify-between px-4 py-10 md:px-24'>
      <div className="data-section ">
        <p className='text-2xl my-4 font-bold md:text-4xl'>Subscribe our newsletter</p>
        <p className='font-thin'>Browse local restaurants and businesses for delivery by entering your address blow.</p>
      </div>
      <div className="search-bar relative">
      <input type="Place your order" className="btn w-64 bg-slate-100 rounded-3xl px-3 py-2 md:w-72" placeholder='Your Email Address'/>
      <button className="order-btn w-28 py-2 px-2 text-base bg-primary rounded-3xl absolute right-0 ">Order Now</button>
      </div>
    </div>
  )
}

export default Subscription
