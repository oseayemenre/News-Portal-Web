"use client";

import React from "react";
import NewsCard from "./news-card";
import { motion } from "framer-motion";
import { latest_card, titleVariant } from "@/utils/motion";
import Button from "./button";
import { useRouter } from "next/navigation";

const Latestnews = () => {
  const router = useRouter();
  const count = [1, 2, 3];
  const newsletter = "Latest Newsletter";

  return (
    <section
      className='px-[64px] py-[122px] text-white relative z-10'
      id='latest-news'
    >
      <div className='flex flex-col items-center max-sm:text-center mb-20'>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
          className='font-[600] mb-4'
        >
          Blog
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className='text-[48px] font-[700] mb-6 text-[#c8500b]'
        >
          {newsletter.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={titleVariant}
              initial='initial'
              whileInView='animate'
              custom={index}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className='text-[18px]'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </motion.p>
      </div>

      <div className='flex justify-between mb-16 items-start max-sm:flex-col max-sm:items-center max-sm:gap-y-6'>
        {count.map((items, i) => (
          <motion.div
            variants={latest_card}
            initial='initial'
            whileInView='animate'
            custom={i}
            key={i}
          >
            <NewsCard />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className='w-full flex justify-center'
      >
        <Button
          value='View all'
          bgcolor='#c8500b'
          submit={() => router.push("/latest-news")}
        />
      </motion.div>
    </section>
  );
};

export default Latestnews;
