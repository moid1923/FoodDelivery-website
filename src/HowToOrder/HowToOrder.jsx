import React from "react";
import OrderCard from "./OrderCard";

function HowToOrder() {
    const order = [
      {
        id:"1",
        emoji: "🍔",
        plan: "Burger",
      },
      {
        id:"2",
        emoji: "🙇🏻‍♂️",
        plan: "Burger",
      },
      {
        id:"3",
        emoji: "🍔",
        plan: "Burger",
      },
      {
        id:"4",
        emoji: "🏠",
        plan: "Burger",
      },
      
    ];


  return (
    <div className="px-24 mb-[195px] max-w-[1900px] custom-range:mb-[80px]">
      <div className="order-header my-5">
        <p className="text-3xl text-center font-bold mb-[105px] custom-range:w-full">
          HOW TO ORDER
        </p>
      </div>

      <div className="max-w-[1231px]  xcustom-range:w-full custom-range:m-1 mx-auto flex items-center justify-center ">
        
        <div className="flex items-center justify-evenly flex-wrap gap-x-4">
          {order.map((order,index)=>{
            return(
              <OrderCard key={index} id={order.id} emoji={order.emoji} plan={order.plan}/>
            )
             
          })}
          
          {/* <div className="order-card my-6 z-10">
            <div className="card-data ">
              <div className="absolute -mt-10 ms-8 card-numbers font-bold text-5xl text-orange-600 -mb-3 -z-10">
                02
              </div>
              <div className="card-u-1 sm:w-[214px] custom-range:w-[360px] py-11 px-[23px] md:ms-10 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md ">
                <div className="image w-[95px] h-[95px] text-2xl p-3 flex items-center justify-center  bg-white rounded-2xl">
                  🙇🏻‍♂️
                </div>
                <p className="text-black">
                  Choose what <br /> to eat
                </p>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="flex items-center justify-evenly flex-wrap gap-x-4">
          <div className="order-card my-6 z-10">
            <div className="card-data ">
              <div className="absolute -mt-10 ms-8 card-numbers font-bold text-5xl text-orange-600 -mb-3 -z-10">
                03
              </div>
              <div className="card-u-1 sm:w-[214px] custom-range:w-[360px] py-11 px-[23px] md:ms-10 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
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
              <div className="card-u-1 sm:w-[214px] custom-range:w-[360px] py-11 px-[23px] md:ms-10 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
                <div className="image w-[95px] h-[95px]  p-3 text-2xl flex items-center justify-center  bg-white rounded-2xl">
                  🏠
                </div>
                <p className="text-black">
                  Now! Your <br /> food in way
                </p>
              </div>
            </div>
          </div>
        </div> */}
       
       
      </div>
    </div>
  );
}

export default HowToOrder;
