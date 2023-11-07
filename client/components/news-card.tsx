"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const NewsCard = () => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam aliquam facere explicabo? Ullam impedit nesciunt quas! Inventore iste temporibus alias doloribus, nam, repellat adipisci quae minus asperiores, enim accusantium rem!";

  const [fullCard, showFullCard] = useState(false);

  return (
    <div>
      <Image
        src='/card-image.png'
        height={300}
        width={400.1}
        priority
        alt='card-image'
      />
      <div className='p-6 w-[400px] bg-[#050c1c] max-sm:w-[300px] max-sm:text-center'>
        <div className='flex items-center gap-x-6 font-[600] text-[14px] mb-4 max-sm:flex-col max-sm:gap-y-4'>
          <div className='py-1 px-2 bg-[#c8500b] rounded-md'>
            <p>Product Design Weekly</p>
          </div>
          <p>5 min read</p>
        </div>
        <p className='mb-2 text-[24px] font-[700]'>
          A collection of daily UI challenges for your inspiration
        </p>
        <p className='mb-6 ease duration-150'>
          {fullCard ? description : `${description.slice(0, 75)}...`}
        </p>
        <div
          className='flex items-center gap-x-2 cursor-pointer focus:outline-none max-sm:justify-center'
          onClick={() => showFullCard(!fullCard)}
        >
          <p className='text-[#c8500b]'>
            {fullCard ? "Hide content" : "Read more"}
          </p>
          <div
            className={`duration-500 ease ${
              fullCard ? "-rotate-180" : "rotate-0"
            }`}
          >
            <AiOutlineArrowRight size={12} color='white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
