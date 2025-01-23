import React from 'react'

function Subscription() {
  return (
    <div className="subscription-section  bg-sub w-full">
       <div className='max-w-[1600px] mx-auto  bg-sub flex items-center justify-between flex-col md:flex-row px-4 py-10 md:px-24 md:gap-5'>
      <div className="data-section ">
        <p className='text-2xl my-4 font-bold md:text-4xl'>Subscribe our newsletter</p>
        <p className='font-thin'>Browse local restaurants and businesses for delivery by entering your address blow.</p>
      </div>
      <div className="search-bar relative my-5 ">
      <input type="Place your order" className="btn  sm:w-[600px]  h-[62px]  bg-white rounded-[31px] md:px-10 py-2 md:w-[388px]  right-0 px-12" placeholder='Your Email Address'/>
      <button className="order-btn w-[85px] h-[52px] py-2 px-2 text-base bg-primary rounded-[56px] absolute right-[5px] top-[5px] ">Send</button>
      </div>
    </div>
    </div>
   
  )
}

export default Subscription
