"use client";

import React from "react";
import { motion } from "framer-motion";
import { titleVariant } from "@/utils/motion";
import { AiOutlineSearch } from "react-icons/ai";

const LatestNews = () => {
  const title = "Latest News";
  return (
    <main>
      <h2 className='text-[40px] font-[700] p-20 bg-[#050c1c] text-center text-white'>
        {title.split("").map((letter, i) => (
          <motion.span
            key={i}
            variants={titleVariant}
            initial='initial'
            whileInView='animate'
            custom={i}
          >
            {letter}
          </motion.span>
        ))}
      </h2>

      <section className='py-[80px] px-[200px] max-sm:px-8 text-black'>
        <div className='flex bg-zinc-300 justify-between pl-6 pr-3 py-3 rounded-[100px] '>
          <input
            placeholder='Search for something...'
            className='bg-transparent w-full focus:outline-none'
            maxLength={100}
          />
          <motion.button
            whileTap={{ scale: 0.8 }}
            className='bg-white p-2 rounded-full focus:outline-none'
          >
            <AiOutlineSearch size={24} color='#c8500b' />
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default LatestNews;
