"use client";

import Button from "@/components/buttonsignin";
import Logo from "@/components/logo";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <main className='h-screen flex justify-between'>
      <div className='flex flex-col w-2/3'>
        <div className='p-6'>
          <Logo textColor='#1f2937' />
        </div>
        <div className='px-20 flex flex-col justify-center items-center h-screen'>
          <h1 className='font-[700] text-[48px] text-gray-800'>
            Login to Your Account
          </h1>
          <p className='text-[20px] mb-6 text-gray-800'>
            Login using social networks
          </p>
          <div className='flex gap-x-4 mb-6'>
            <div className='w-12 h-12 rounded-full bg-[#3b5998] cursor-pointer flex justify-center items-center'>
              <FaFacebookF size={24} color='white' />
            </div>

            <div className='w-12 h-12 rounded-full bg-[#0072b1] cursor-pointer flex justify-center items-center'>
              <FaLinkedinIn size={24} color='white' />
            </div>

            <div className='w-12 h-12 rounded-full bg-[#26a7de] flex cursor-pointer justify-center items-center'>
              <BsTwitter size={24} color='white' />
            </div>
          </div>

          <div className='w-3/4'>
            <div className='flex w-full items-center gap-x-2 mb-3'>
              <div className='border-b-[1px] w-full border-b-slate-200' />
              <p className='text-[14px]'>OR</p>
              <div className='border-b-[1px] w-full border-b-slate-200' />
            </div>

            <input
              type='email'
              className='w-full bg-gray-200 focus:outline-none p-4 rounded-2xl mb-5 text-[14px]'
              placeholder='Email'
            />

            <div className='bg-gray-200 p-4 rounded-2xl w-full flex justify-between mb-6'>
              <input
                type={toggle ? "text" : "password"}
                className='w-full bg-transparent focus:outline-none text-[14px] '
                placeholder='Password'
              />

              {toggle ? (
                <AiOutlineEyeInvisible
                  size={24}
                  color='#1f2937'
                  className='cursor-pointer duration-150 transition'
                  onClick={() => setToggle(!toggle)}
                />
              ) : (
                <AiOutlineEye
                  size={24}
                  color='#1f2937'
                  className='cursor-pointer duration-150 transition'
                  onClick={() => setToggle(!toggle)}
                />
              )}
            </div>
            <div className='w-2/5 mx-auto mb-8'>
              <Button value='Sign Up' bgcolor='#063e76' textcolor='white' />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[url("/blue-pattern.jpg")] bg-cover w-1/3 flex flex-col px-12 justify-center items-center'>
        <h1 className='font-[700] text-[48px] text-white mb-4'>New Here?</h1>
        <p className='text-[18px] text-white text-center mb-8'>
          Sign up and be part of the team that publishes and edits the news!
        </p>

        <div className='w-3/5'>
          <Button value='Sign Up' bgcolor='#ffffff' textcolor='black' />
        </div>
      </div>
    </main>
  );
};

export default Login;
