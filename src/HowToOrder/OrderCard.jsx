import React from "react";

function OrderCard({ id, emoji, plan }) {
  return (
    <div className="order-card my-6 z-10 xl:ms-[20px]">
      <div className="card-data  ">
        <div className="absolute -mt-10 ms-8 card-numbers font-bold text-5xl text-orange-600 -mb-3 -z-10">
          {id}
        </div>
        <div className="card-u-1 sm:min-w-[214px]  sm:max-w-auto custom-range:w-[360px]  py-11 px-[23px] bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
          <div className="image  w-[95px] h-[95px] text-3xl p-3 flex items-center justify-center  bg-white rounded-2xl">
            {emoji}
          </div>
          <p className="text-black">{plan}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
