import React from "react";
import dish from "../Hero-section/image/hero-img.png";
import cycle from '../Hero-section/image/dish.svg'
import collin from '../Hero-section/image/collin.svg'
function Dishes() {
  return (
    <div className="my-48 px-24">
      <div className="dishes-header text-center">
        <p className="text-2xl  md:text-4xl font-bold my-4">
          MORE THAN <span className="text-primary"> 10,000</span>  DISHES <br /> TO ORDER!
        </p>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
      </div>
      <div className="dishes-section w-full">
      <div className="dish-card max-w-[1310px] mx-auto">
        <div className="upper-card flex justify-center flex-wrap items-center my-10 gap-4 md:ms-44">
          <div className="card-u-1 p-8  md:ms-10 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image p-3  text-3xl items-center text-center rounded-full bg-white">
            <p>🍕</p>
            </div>
            <p className="">Pizza</p>
          </div>
          <div className="card-u-1 p-8 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image max-w-14 p-3 items-center text-center rounded-full bg-white text-2xl">
            🍣
            </div>
            <p className="">Pizza</p>
          </div>
          <div className="card-u-1 p-8 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image max-w-14 p-3 text-2xl items-center text-center rounded-full bg-white">
            🍔
            </div>
            <p className="">Pizza</p>
          </div>
          <div className="card-u-1 relative max-w-[568px] w-full bg-cardsBg  flex  flex-col gap-3 rounded-md  ">
            <p className="mt-10 ms-8 text-2xl">Find deals, free delivery, and more <br /> from our restaurant partners.</p>
            <div className="image w-full    h-16 rounded-ful right-l">
              <img src={cycle} alt="" className=" absolute right-1 bottom-0 p-2 object-fill " />
            </div>
          </div>










        </div>
        <div className="lower-card flex justify-center items-center flex-wrap my-8 gap-4">
        <div className="card-u-1 max-w-[545px] w-full  flex  flex-col gap-3  rounded-md p-4 ">
            <img src={collin} alt="" className="w-16 font-bold" />
            <p className="text-black text-start text-2xl">“Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br />ut labore et dolore magna aliqua.”</p>
            
          </div>
        <div className="card-u-1 p-8 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image max-w-14 p-3 text-2xl items-center text-center rounded-full bg-white">
            🥗
                   </div>
            <p className="">Pizza</p>
          </div>
          <div className="card-u-1 p-8 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image max-w-14 h-14 items-center text-center rounded-full bg-white">
              <img src={dish} alt="" className="w-14 p-2" />
            </div>
            <p className="">Pizza</p>
          </div>
          <div className="card-u-1 p-8 md:me-10 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image max-w-14 p-3 text-2xl items-center text-center rounded-full bg-white">
            🍰
            </div>
            <p className="">Pizza</p>
          </div>
          
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Dishes;
