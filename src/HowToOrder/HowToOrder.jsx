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
    <div className="px-24 mb-[195px] max-w-[1310px] custom-range:mb-[80px] w-full mx-auto">
      <div className="order-header my-5">
        <p className="text-3xl text-center font-bold mb-[105px] custom-range:w-full">
          HOW TO ORDER
        </p>
      </div>

      <div className="max-w-[1231px] w-full  custom-range:w-full custom-range:m-1 mx-auto flex items-center justify-center ">
        
        <div className="max-w-[1231px] w-full flex items-center justify-center flex-wrap md:flex-nowrap gap-x-4 xl:justify-center xl:gap-x-[98px]">
          {order.map((order,index)=>{
            return(
              <OrderCard key={index} id={order.id} emoji={order.emoji} plan={order.plan}/>
            )
             
          })}
        </div>
        
       
       
      </div>
    </div>
  );
}

export default HowToOrder;
