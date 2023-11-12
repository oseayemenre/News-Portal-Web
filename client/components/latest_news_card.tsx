import React from "react";
import { colors } from "@/utils/data";

type TLatestNewsCard = {
  title: string;
  image: string;
  details: string;
  category: string;
  time: string;
};

const random = Math.floor(Math.random() * colors.length);
const randomColor = colors[random];

console.log(randomColor);

const LatestNewsCard = ({
  title,
  image,
  details,
  category,
  time,
}: TLatestNewsCard) => {
  const removespace = title.replace(/^\s+/, "");
  const Title = removespace.split("")[0].toUpperCase() + removespace.slice(1);

  return (
    <div className='bg-[url("/card-image.png")] bg-cover h-[200px] p-3 relative rounded-md cursor-pointer'>
      <div className='flex flex-start'>
        <div className={`bg-${randomColor}-700 py-1 px-3 rounded-md`}>
          <p className='text-white font-bold text-[12px] text-center'>
            {category}
          </p>
        </div>
      </div>

      {Title.length > 50 ? (
        <p className='absolute top-[140px] text-white font-bold'>{`${Title.slice(
          0,
          50
        )}...`}</p>
      ) : (
        <p className='absolute top-[150px] text-white font-bold'>{Title}</p>
      )}
    </div>
  );
};

export default LatestNewsCard;
