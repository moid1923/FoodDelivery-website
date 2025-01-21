import React from 'react'

function HowToOrder() {
  return (
    <div className='px-24'>
      <div className="order-header my-5">
        <p className='text-3xl text-center font-bold'>HOW TO ORDER</p>
      </div>

  <div className="max-w-[1231px] card-section-order flex items-center justify-evenly flex-wrap mx-auto">
  <div className="order-card my-6">
      <div className="card-numbers font-bold text-5xl text-orange-600 -mb-3 -z-10">
            01
        </div>
        <div className="card-data ">
            <div className="card-u-1 w-40 h-36 md:ms-10 bg-slate-50 text-center flex items-center flex-col gap-3 justify-center rounded-md">
                        <div className="image max-w-14 text-2xl p-3 items-center text-center  bg-white">
                        📍
                        </div>
                        <p className="text-black">Choose your <br /> location</p>
                      </div>

        </div>
      </div>
      <div className="order-card my-6">
      <div className="card-numbers font-bold text-5xl text-orange-600 -mb-3 -z-10">
            02
        </div>
        <div className="card-data ">
            <div className="card-u-1 w-40 h-36 md:ms-10 bg-slate-50 text-center flex items-center flex-col gap-3 justify-center rounded-md ">
                        <div className="image max-w-14 text-2xl p-3 items-center text-center  bg-white">
                        🙇🏻‍♂️
                        </div>
                        <p className="text-black">Choose what <br /> to eat</p>
                      </div>

        </div>
      </div>
      <div className="order-card my-6">
      <div className="card-numbers font-bold text-5xl text-orange-600 -mb-3 -z-10">
            03
        </div>
        <div className="card-data ">
            <div className="card-u-1 w-40 h-36 md:ms-10 bg-slate-50 text-center flex items-center flex-col gap-3 justify-center rounded-md">
                        <div className="image max-w-14 p-3 text-2xl items-center text-center  bg-white">
                        🍔
                        </div>
                        <p className="text-black">May your first <br /> order</p>
                      </div>

        </div>
      </div>
      <div className="order-card my-6">
      <div className="card-numbers font-bold text-5xl text-orange-600 -mb-3 -z-10">
            04
        </div>
        <div className="card-data ">
            <div className="card-u-1 w-40 h-36 md:ms-10 bg-slate-50 text-center flex items-center flex-col gap-3 justify-center rounded-md">
                        <div className="image max-w-14  p-3 text-2xl items-center text-center  bg-white">
                        🏠
                        </div>
                        <p className="text-black">Now! Your <br /> food in way</p>
                      </div>

        </div>
      </div>
    </div>     
   
    </div>
  )
}

export default HowToOrder
