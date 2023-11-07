import React from "react";
import Image from "next/image";

const Aboutbullet = () => {
  return (
    <div className='flex gap-x-4 items-center'>
      <div className='w-4 h-4'>
        <Image
          width={16}
          height={16}
          alt='Relume'
          src='/Relume.png'
          priority
          className='w-full'
        />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
  );
};

export default Aboutbullet;
