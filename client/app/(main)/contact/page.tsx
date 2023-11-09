"use client";

import React from "react";
import { motion } from "framer-motion";
import { titleVariant } from "@/utils/motion";
import Button from "@/components/button";
import { CiLocationOn } from "react-icons/ci";
import { BiEnvelope } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const ContactUs = () => {
  const title = "Contact Us";
  return (
    <main className='relative'>
      <h2 className='text-[40px] font-[700] pt-20 px-20 pb-[150px] bg-[#050c1c] text-center text-white relative -z-50'>
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

      <div className='mb-[100px]'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className='py-[80px] px-20 max-sm:px-10 bg-zinc-900 w-[70%] -mt-20 mx-auto ml-[26%]'
        >
          <div className='ml-[30%] max-sm:w-full'>
            <h2 className='text-[48px] font-[800] text-zinc-100 max-sm:text-[18px]'>
              Send a Message
            </h2>
            <div className='border-b-[3px] border-b-[#c8500b] mb-20 mt-2 w-[30%] max-sm:mb-10' />
            <div className='flex justify-between mb-12 max-sm:mb-8 max-sm:flex-col max-sm:gap-y-3 max-sm:w-full'>
              <div className='relative w-[45%] max-sm:w-[80%]'>
                <input
                  id='first_name'
                  placeholder=' '
                  maxLength={30}
                  className='bg-transparent border-b-[1px] w-full border-b-zinc-700 focus:outline-none pb-[10px] mt-4 peer text-black'
                />
                <label
                  htmlFor='first_name'
                  className='absolute w-full text-[24px] max-sm:text-[16px] max-sm:-left-[14px] scale-75 duration-150 ease -translate-y-3 -left-8 text-zinc-700 peer-placeholder-shown:top-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-0 peer-placeholder-shown:max-sm:top-4'
                >
                  First Name
                </label>
              </div>
              <div className='relative w-[45%] max-sm:w-[80%]'>
                <input
                  id='last_name'
                  placeholder=' '
                  maxLength={30}
                  className='bg-transparent border-b-[1px] w-full border-b-zinc-700 focus:outline-none pb-[10px] mt-4 peer text-black'
                />
                <label
                  htmlFor='last_name'
                  className='absolute w-full text-[24px] max-sm:text-[16px] max-sm:-left-[17px] scale-75 duration-150 ease -translate-y-3 -left-8 text-zinc-700 peer-placeholder-shown:top-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-0 peer-placeholder-shown:max-sm:top-4'
                >
                  Last Name
                </label>
              </div>
            </div>
            <div className='flex justify-between max-sm:flex-col max-sm:gap-y-3 max-sm:w-full'>
              <div className='relative w-[45%] max-sm:w-[80%]'>
                <input
                  id='email_name'
                  placeholder=' '
                  maxLength={30}
                  className='bg-transparent border-b-[1px] w-full border-b-zinc-700 focus:outline-none pb-[10px] mt-4 peer text-black'
                />
                <label
                  htmlFor='email_name'
                  className='absolute w-full text-[24px] max-sm:text-[16px] max-sm:-left-[17px] scale-75 duration-150 ease -translate-y-3 -left-8 text-zinc-700 peer-placeholder-shown:top-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-0 peer-placeholder-shown:max-sm:top-4'
                >
                  Email Adress
                </label>
              </div>
              <div className='relative w-[45%] max-sm:w-[80%]'>
                <input
                  id='mobile_number'
                  placeholder=' '
                  maxLength={30}
                  className='bg-transparent border-b-[1px] w-full border-b-zinc-700 focus:outline-none pb-[10px] mt-4 peer text-black'
                />
                <label
                  htmlFor='mobile_number'
                  className='absolute w-full text-[24px] max-sm:text-[16px] max-sm:-left-[17px] scale-75 duration-150 ease -translate-y-3 -left-8 text-zinc-700 peer-placeholder-shown:top-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-0 peer-placeholder-shown:max-sm:top-4'
                >
                  Mobile Number
                </label>
              </div>
            </div>
            <textarea
              className='w-full mt-12 focus:outline-none h-[200px] p-6 bg-zinc-800 mb-6 max-sm:p-2 max-sm:w-[80%]'
              placeholder='Write your message here...'
            />

            <Button value='Send' bgcolor='#c8500b' textcolor='white' />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className='py-[60px] px-[69px] max-sm:px-4 bg-[#c8500b] w-[42%] absolute top-[270px] left-[20px]'
        >
          <h2 className='text-[48px] font-[800] text-zinc-100 w-full max-sm:text-[18px]'>
            Contact Info
          </h2>
          <div className='flex gap-x-4 max-sm:gap-x-2 mt-12 max-sm:justify-start'>
            <CiLocationOn size={24} color='white' className='max-sm:w-[64px]' />
            <p className='text-white text-[18px] max-sm:text-[14px]'>
              PMB 4003, ILISHAN REMO, OGUN STATE, NIGERIA
            </p>
          </div>
          <div className='flex gap-x-4 max-sm:gap-x-2 mt-12 max-sm:justify-start'>
            <BiEnvelope size={24} color='white' className='max-sm:w-[64px]' />
            <p className='text-white text-[18px] max-sm:text-[14px] '>
              ABCDedfRoad@<span className='max-sm:block'>ABCD.com</span>
            </p>
          </div>
          <div className='flex gap-x-4 mt-12 mb-20 max-sm:gap-x-2 max-sm:justify-start'>
            <FiPhoneCall size={24} color='white' className='w-[64px]' />
            <p className='text-white text-[18px] max-sm:text-[14px]'>
              123-456-789
            </p>
          </div>
          <div className='flex gap-x-2 text-white mb-[120px] mt-[180px]'>
            <BsFacebook size={48} />
            <BsLinkedin size={48} />
            <FaSquareXTwitter size={48} />
            <FaSquareInstagram size={48} />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactUs;
