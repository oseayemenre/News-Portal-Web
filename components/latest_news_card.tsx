import React from "react";
import Link from "next/link";

type TLatestNewsCard = {
  link: string;
  title: string;
  image: string;
  category: string;
  bgColor: string;
};

const LatestNewsCard = ({
  link,
  title,
  image,
  category,
  bgColor,
}: TLatestNewsCard) => {
  const removespace = title.replace(/^\s+/, "");
  const Title = removespace.split("")[0].toUpperCase() + removespace.slice(1);

  return (
    <Link href={link}>
      <div className='bg-[url("/card-image.png")] bg-cover h-[200px] p-3 relative rounded-md cursor-pointer hover:scale-90 duration-150 trnasition'>
        <div className='flex flex-start'>
          <div className={`bg-${bgColor}-700 py-1 px-3 rounded-md`}>
            <p className='text-white font-bold text-[12px] text-center'>
              {category}
            </p>
          </div>
        </div>

        {Title.length > 50 ? (
          <p className='absolute top-[120px] text-white font-bold max-sm:top-[100px]'>{`${Title.slice(
            0,
            50
          )}...`}</p>
        ) : (
          <p className='absolute top-[150px] text-white font-bold'>{Title}</p>
        )}
      </div>
    </Link>
  );
};

export default LatestNewsCard;
