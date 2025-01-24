import React from "react";

function HowToOrder() {
  return (
    <div className="px-24 mb-[195px] max-w-[1900px]">
      <div className="order-header my-5">
        <p className="text-3xl text-center font-bold mb-[105px]">
          HOW TO ORDER
        </p>
      </div>

      <div className="max-w-[1231px]  xs:w-full xs:m-1 mx-auto flex items-center justify-center flex-wrap ">
        
        <div className="flex items-center justify-evenly flex-wrap gap-x-4">
          <div className="order-card my-6 z-10">
            <div className="card-data ">
              <div className="absolute -mt-10 ms-8 card-numbers font-bold text-5xl text-orange-600 -mb-3 -z-10">
                01
              </div>
              <div className="card-u-1 sm:w-[214px] xss:w-[360px]  py-11 px-[23px] md:ms-10 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
                <div className="image  w-[95px] h-[95px] text-3xl p-3 flex items-center justify-center  bg-white rounded-2xl">
                  📍
                </div>
                <p className="text-black">
                  Choose your <br /> location
                </p>
              </div>
            </div>
          </div>
          <div className="order-card my-6 z-10">
            <div className="card-data ">
              <div className="absolute -mt-10 ms-8 card-numbers font-bold text-5xl text-orange-600 -mb-3 -z-10">
                02
              </div>
              <div className="card-u-1 sm:w-[214px] xss:w-[360px] py-11 px-[23px] md:ms-10 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md ">
                <div className="image w-[95px] h-[95px] text-2xl p-3 flex items-center justify-center  bg-white rounded-2xl">
                  🙇🏻‍♂️
                </div>
                <p className="text-black">
                  Choose what <br /> to eat
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-evenly flex-wrap gap-x-4">
          <div className="order-card my-6 z-10">
            <div className="card-data ">
              <div className="absolute -mt-10 ms-8 card-numbers font-bold text-5xl text-orange-600 -mb-3 -z-10">
                03
              </div>
              <div className="card-u-1 sm:w-[214px] xss:w-[360px] py-11 px-[23px] md:ms-10 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
                <div className="image w-[95px] h-[95px] p-3 text-2xl flex items-center justify-center  bg-white rounded-2xl">
                  🍔
                </div>
                <p className="text-black">
                  May your first <br /> order
                </p>
              </div>
            </div>
          </div>
          <div className="order-card my-6 z-10">
            <div className="card-data ">
              <div className="absolute -mt-10 ms-8 card-numbers font-bold text-5xl text-orange-600 -mb-3 -z-10">
                04
              </div>
              <div className="card-u-1 sm:w-[214px] xss:w-[360px] py-11 px-[23px] md:ms-10 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
                <div className="image w-[95px] h-[95px]  p-3 text-2xl flex items-center justify-center  bg-white rounded-2xl">
                  🏠
                </div>
                <p className="text-black">
                  Now! Your <br /> food in way
                </p>
              </div>
            </div>
          </div>
        </div>
       
       
      </div>
    </div>
  );
}

export default HowToOrder;
