"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

type TNewsCard = {
  title: string;
  image: string;
  details: string;
  id: string;
  readTime: string;
  postCategory: string;
};

const NewsCard = ({
  title,
  image,
  details,
  id,
  readTime,
  postCategory,
}: TNewsCard) => {
  const [fullCard, showFullCard] = useState(false);

  const newPostTitle = title;
  const postTitle = newPostTitle.replace(/^\s+/, "");

  const postDetails = details.replace(/^\s+/, "");
  const Details = postDetails.split("")[0].toUpperCase() + postDetails.slice(1);

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
            <p>{postCategory}</p>
          </div>
          <p>{readTime} min read</p>
        </div>
        <p className='mb-2 text-[24px] font-[700]'>
          {postTitle.split("")[0].toUpperCase() + postTitle.slice(1)}
        </p>
        <p className='mb-6 ease duration-150'>{`${Details.slice(0, 75)}...`}</p>
        <div
          className='flex items-center gap-x-2 cursor-pointer focus:outline-none max-sm:justify-center'
          onClick={() => showFullCard(!fullCard)}
        >
          <Link href={id} className='text-[#c8500b]'>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
