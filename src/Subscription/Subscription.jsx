import React from 'react'

function Subscription() {
  return (
    <div className='max-w-[1612px] mx-auto bg-red-200 flex items-center justify-between py-10 px-24'>
      <div className="data-section">
        <p className='font-bold text-4xl'>Subscribe our newsletter</p>
        <p className='font-thin'>Browse local restaurants and businesses for delivery by entering your address blow.</p>
      </div>
      <div className="search-bar relative">
      <input type="Place your order" className="btn  bg-slate-100 rounded-3xl px-3 py-2 w-72" placeholder='Your Email Address'/>
      <button className="order-btn w-28 py-2 px-2 text-base bg-orange-600 rounded-3xl absolute right-0 ">Order Now</button>
      </div>
    </div>
  )
}

export default Subscription
