import React from "react";
import dish from "../Hero-section/image/hero-img.png";
function Dishes() {
  return (
    <div className="
     overflow-x-hidden px-24">
      <div className="dishes-header text-center">
        <p className="text-2xl  md:text-4xl font-bold my-4">
          MORE THAN 10,000 DISHES <br /> TO ORDER!
        </p>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
      </div>
      <div className="dish-card">
        <div className="upper-card flex justify-center flex-wrap items-center my-10 gap-4">
          <div className="card-u-1 w-32 h-36 md:ms-10 bg-slate-200 text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image p-3  text-3xl items-center text-center rounded-full bg-white">
            <p>🍕</p>
            </div>
            <p className="">Pizza</p>
          </div>
          <div className="card-u-1 w-32 h-36 bg-slate-200 text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image max-w-14 p-3 items-center text-center rounded-full bg-white text-2xl">
            🍣
            </div>
            <p className="">Pizza</p>
          </div>
          <div className="card-u-1 w-32 h-36 bg-slate-200 text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image max-w-14 p-3 text-2xl items-center text-center rounded-full bg-white">
            🍔
            </div>
            <p className="">Pizza</p>
          </div>
          <div className="card-u-1 h-36 bg-slate-200 text-center flex items-center flex-col gap-3 justify-center rounded-md p-4 ">
            <p className="">Find deals, free delivery, and more <br /> from our restaurant partners.</p>
            <div className="image w-40  text-end h-16 rounded-ful right-l">
              <img src={dish} alt="" className="w-32  p-2 object-fill" />
            </div>
          </div>
        </div>
        <div className="lower-card flex justify-center items-center flex-wrap my-8 gap-4">
        <div className="card-u-1 h-36 text-center flex items-center flex-col gap-3 justify-center rounded-md p-4 ">
            <p className="text-black text-start">“Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br />ut labore et dolore magna aliqua.”</p>
            
          </div>
        <div className="card-u-1 w-32 h-36 bg-slate-200 text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image max-w-14 p-3 text-2xl items-center text-center rounded-full bg-white">
            🥗
                   </div>
            <p className="">Pizza</p>
          </div>
          <div className="card-u-1 w-32 h-36 bg-slate-200 text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image max-w-14 h-14 items-center text-center rounded-full bg-white">
              <img src={dish} alt="" className="w-14 p-2" />
            </div>
            <p className="">Pizza</p>
          </div>
          <div className="card-u-1 w-32 h-36 md:me-10 bg-slate-200 text-center flex items-center flex-col gap-3 justify-center rounded-md">
            <div className="image max-w-14 p-3 text-2xl items-center text-center rounded-full bg-white">
            🍰
            </div>
            <p className="">Pizza</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dishes;
