import React from "react";
import cycle from "../Hero-section/image/dish.svg";
import collin from "../Hero-section/image/collin.svg";
import Card from "./Card.jsx";


function Dishes() {
  const dishes = [
    {
      emoji: "🍔",
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
    <div className="my-48 custom-range:my-16 px-24">
      <div className="dishes-header text-center custom-range:min-w-[100%]">
        <p className="text-2xl  md:text-4xl font-bold my-4  mx-auto ">
          MORE THAN <span className="text-primary"> 10,000</span> DISHES TO
          ORDER!
        </p>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
      </div>
      <div className="dishes-section w-full">
        <div className="dish-card xl:max-w-[1310px] mx-auto ">
          <div className="upper-card flex justify-center items-center  flex-col lg:flex-row  my-10 gap-4">
            <div className="flex justify-center items-center gap-6 md:flex-nowrap flex-wrap">
              {dishes.map((dish, index) => {
                return <Card key={index} emoji={dish.emoji} name={dish.name} />;
              })}
            </div>
            <div className="">
              <div className=" custom-range:min-w-[370px]  xl:max-w-[568px] md:max-w-450 w-full  flex  flex-col h-auto  rounded-md p-4 bg-cardsBg ">
                <p className="  text-2xl">
                  Find deals, free delivery, and more <br /> from our restaurant
                  partners.
                </p>
                <div className="image w-full relative  p-14  ">
                  <img
                    src={cycle}
                    alt=""
                    className="md:w-[192px] right-0 absolute right-l -bottom-4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lower-card flex justify-center items-center  flex-col lg:flex-row  my-10 gap-1">
            <div>
              <div className="card-u-1 custom-range:min-w-[370px] ms-[20px] xl:max-w-[568px] md:max-w-450 w-full  flex  flex-col gap-3  rounded-md p-8 ">
                <img src={collin} alt="" className="w-12 font-bold md:w-16" />
                <p className="text-black   custom-range:px-6 text-center md:text-start md:text-2xl text-lg ">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-6 md:flex-nowrap flex-wrap">
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
