import React from "react";
import cycle from "../Hero-section/image/dish.svg";
import collin from "../Hero-section/image/collin.svg";
import Card from "./Card.jsx";


function Dishes() {
  const dishes = [
    {
      emoji: "🍕",
      name: "Burger",
    },
    {
      emoji: "🥗",
      name: "Vegi",
    },
    {
      emoji: "🍰",
      name: "Cake",
    },
  ];

  return (
    <div className="my-48 custom-range:my-16 lg:px-24 sm:px-5 ">
      <div className="dishes-header text-center custom-range:min-w-[100%]   ">
        <p className="text-2xl  md:text-4xl font-bold my-4  mx-auto ">
          MORE THAN <span className="text-primary"> 10,000</span> DISHES TO
          ORDER!
        </p>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
      </div>
      <div className="dishes-section">
        <div className="dish-card xl:max-w-[1310px] mx-auto lg-max-w-[1000px] md:max-w-[900px] lg:mx-auto ">
          <div className="upper-card flex justify-center items-center  flex-col lg:flex-row  my-10 gap-4 flex-wrap xl:flex-nowrap">
            <div className="flex justify-center items-center gap-6 sm:flex-nowrap sm:mx-auto flex-wrap xl:ms-[142px] sm:max-w-[568px] xl:w-[568px] ">
              {dishes.map((dish, index) => {
                return <Card key={index} emoji={dish.emoji} name={dish.name} />;
              })}
            </div>
            <div className="">
              <div className="box-border custom-range:min-w-[370px]  sm:w-[568px] h-[232px]  flex  flex-col  xl:w-[568px]  p-4 bg-cardsBg relative rounded-[28px]">
                <p className="  text-xl font-semibold text-[24px] mt-[38px] ms-[33px] custom-range:mt-3 custom-range:ms-2">
                  Find <span className="text-primary">deals</span> , <span className="text-green-600">free delivery</span> , and more <br /> from our restaurant
                  partners.
                </p>
                <div className="image w-full    ">
                  <img
                    src={cycle}
                    alt=""
                    className="md:w-[192px] right-4 absolute  bottom-0 h-[116px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lower-card flex justify-center items-center  flex-col lg:flex-row  my-10 gap-1 xl:me-[142px] flex-wrap xl:flex-nowrap">
            <div>
              <div className="card-u-1 custom-range:min-w-[370px]  sm:max-w-[545px] xl:w-[545px]   flex  flex-col gap-3  rounded-md p-8 ">
                <img src={collin} alt="" className="custom-range:w-[24px] font-bold sm:w-[40px]" />
                <p className="text-black   custom-range:px-6 text-center md:text-start md:text-2xl text-[23px] ">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-6 sm:flex-nowrap flex-wrap  sm:max-w-[568px] xl:w-[568px] ">
              {dishes.map((dish, index) => {
                return <Card key={index} emoji={dish.emoji} name={dish.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dishes;
