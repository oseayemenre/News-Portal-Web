"use client";

import React from "react";
import Aboutbullet from "@/components/aboutbullet";
import { motion } from "framer-motion";
import { titleVariant, loremVariant } from "@/utils/motion";

const title = "About News Portal";

const arr = [1, 2, 3];

const About = () => {
  return (
    <section>
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

      <section className='py-[80px] px-[200px] flex flex-col items-center gap-y-6 max-sm:px-20'>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "tween",
          }}
          className='text-[18px] text-center'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </motion.p>
        <div className='flex flex-col gap-y-4'>
          {arr.map((items, index) => (
            <motion.div
              variants={loremVariant}
              initial='initial'
              whileInView='animate'
              custom={index}
              key={index}
              className='max-sm:text-center'
            >
              <Aboutbullet />
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
