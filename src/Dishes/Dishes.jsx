import React from "react";
import cycle from "../Hero-section/image/dish.svg";
import collin from "../Hero-section/image/collin.svg";
function Dishes() {
  return (
    <div className="my-48 px-24">
      <div className="dishes-header text-center">
        <p className="text-2xl  md:text-4xl font-bold my-4">
          MORE THAN <span className="text-primary"> 10,000</span> DISHES <br />{" "}
          TO ORDER!
        </p>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
      </div>
      <div className="dishes-section w-full">
        <div className="dish-card xl:max-w-[1310px] mx-auto ">
          <div className="upper-card flex justify-center flex-wrap items-center my-10 gap-4 ">
            
            <div className="card-u-1 p-8   bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
              <div className="image xs:text-7xl xs:p-6 p-3 text-4xl md:text-3xl  items-center text-center rounded-full bg-white">
                <p>🍕</p>
              </div>
              <p className="">Pizza</p>
            </div>
            <div className="card-u-2 p-8 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
              <div className="image xs:text-7xl xs:p-6  p-3 text-4xl md:text-3xl items-center text-center rounded-full bg-white ">
                🍣
              </div>
              <p className="">Pizza</p>
            </div>
            <div className="card-u-3 p-8 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
              <div className="image xs:text-7xl xs:p-6 text-4xl md:text-3xl p-3 items-center text-center rounded-full bg-white">
                🍔
              </div>
              <p className="">Pizza</p>
            </div>
            <div className="card-u-4 relative xl:max-w-[568px] md:max-w-450 px-4 h-auto xl:w-full bg-cardsBg  flex  flex-col gap-3 rounded-md  ">
              <p className="mt-10 ms-8 text-2xl">
                Find deals, free delivery, and more <br /> from our restaurant
                partners.
              </p>
              <div className="image w-full  p-14   rounded-ful right-l">
                <img
                  src={cycle}
                  alt=""
                  className=" absolute right-1 bottom-0 p-2 object-fill "
                />
              </div>
            </div>
          </div>

          <div className="lower-card flex justify-center items-center  flex-col lg:flex-row  my-10 gap-1">

          <div>
            <div className="card-u-1 xs:w-full text-start xl:max-w-[568px] md:max-w-450 w-full  flex  flex-col gap-3  rounded-md p-8 ">
              <img src={collin} alt="" className="w-12 font-bold md:w-16" />
              <p className="text-black xs:text-start xs:w-[80%] xs:px-6 text-center md:text-start md:text-2xl text-lg ">
                “Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor incididunt <br />
                ut labore et dolore magna aliqua.”
              </p>
            </div>
            </div>


            <div className="flex justify-center items-center gap-6 md:flex-nowrap xs:flex-wrap">
            <div className="card-u-1 p-8 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
              <div className="image xs:text-7xl xs:p-6 text-4xl md:text-3xl p-3  items-center text-center rounded-full bg-white">
                🥗
              </div>
              <p className="">Pizza</p>
            </div>
            <div className="card-u-1 p-8 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
              <div className="image xs:text-7xl xs:p-6 text-4xl md:text-3xl p-3  items-center text-center rounded-full bg-white">
                🥗
              </div>
              <p className="">Pizza</p>
            </div>
         
            <div className="card-u-1  p-8 xl:me-10 bg-cardsBg text-center flex items-center flex-col gap-3 justify-center rounded-md">
              <div className="image xs:text-7xl  xs:p-6 text-4xl md:text-3xl p-3  items-center text-center rounded-full bg-white">
                🍰
              </div>
              <p className="">Pizza</p>
            </div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dishes;
