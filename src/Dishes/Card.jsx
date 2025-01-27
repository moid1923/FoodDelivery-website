import React from "react";

function Card({
    emoji,
    name
}) {
  return (
    <div className="card-u-1 p-8 custom-range:w-[294px] h-[232px] sm:w-[168px] bg-cardsBg text-center flex items-center flex-col gap-3 justify-center  rounded-2xl">
      <div className="image text-4xl    p-3  items-center text-center rounded-full bg-white">
        {emoji}
      </div>
      <p className="">{name}</p>
    </div>
  );
}

export default Card;
