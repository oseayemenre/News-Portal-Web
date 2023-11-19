"use client";

import Logo from "./logo";
import Button from "./button";
import { buttonitems } from "@/utils/data";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  footer_about,
  footer_column2,
  footer_social,
  footer_bottom,
} from "@/utils/data";
import { motion } from "framer-motion";

const subscriberSchema = z.object({
  email: z.string().email().max(30),
});

const Footer = () => {
  const { register, handleSubmit, reset } = useForm<
    z.infer<typeof subscriberSchema>
  >({
    resolver: zodResolver(subscriberSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof subscriberSchema>) => {
    console.log(values);
    console.log("Hello World");
    reset();
  };

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className='py-20 px-16 bg-[#030710]'
    >
      <div className='flex gap-x-[128px] items-center text-white mb-20 max-sm:flex-col max-sm:text-center'>
        <div>
          <div className='flex max-sm:justify-center'>
            <Logo />
          </div>
          <p className='mt-[29px]'>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className='flex gap-x-4 mb-4 mt-6 items-center max-sm:flex-col max-sm:gap-y-4'>
            <input
              {...register("email")}
              maxLength={30}
              placeholder='Enter your email'
              className='w-3/4 p-3 max-sm:w-full focus:outline-none bg-[#e5e7eb] text-black rounded-md'
            />
            <Button
              {...buttonitems}
              type='submit'
              submit={handleSubmit(onSubmit)}
            />
          </div>
          <p className='text-[12px]'>
            By clicking Sign Up you're confirming that you agree with our Terms
            and Conditions.
          </p>
        </div>

        <div className='flex gap-x-40 items-start max-sm:flex-col max-sm:gap-y-6 max-sm:mt-6 max-sm:items-center'>
          <div>
            <h4 className='font-[600] mb-6 text-[#c8500b] max-sm:text-center max-sm:mb-2'>
              About Us
            </h4>
            {footer_about.map((items, index) => (
              <p
                key={index}
                className='mb-4 cursor-pointer hover:text-slate-300 text-[14px] max-sm:text-center'
              >
                {items}
              </p>
            ))}
          </div>

          <div>
            <h4 className='font-[600] mb-6 text-[#c8500b] max-sm:text-center max-sm:mb-2'>
              Column Two
            </h4>
            {footer_column2.map((items, index) => (
              <p
                key={index}
                className='mb-4 cursor-pointer hover:text-slate-300 text-[14px] max-sm:text-center'
              >
                {items}
              </p>
            ))}
          </div>

          <div>
            <h4 className='font-[600] mb-6 text-[#c8500b] max-sm:text-center max-sm:mb-2'>
              Follow Us
            </h4>
            <div className='flex flex-col gap-y-4'>
              {footer_social.map((items, index) => (
                <div className='flex gap-x-3' key={index}>
                  <Image
                    src={items.image}
                    width={24.1}
                    height={24.1}
                    alt=''
                    priority
                  />
                  <p className='cursor-pointer hover:text-slate-300 text-[14px] max-sm:text-center'>
                    {items.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='h-[1px] w-full bg-gray-800 mb-8' />
      <div className='flex justify-between items-center max-sm:flex-col'>
        <p className='text-[14px] text-white max-sm:mb-4'>
          2023 News Portal. All right reserved.
        </p>

        <div className='flex gap-x-6 text-white max-sm:flex-col text-center max-sm:gap-y-2'>
          {footer_bottom.map((items, index) => (
            <p
              key={index}
              className='text-[14px] cursor-pointer hover:text-slate-300'
            >
              {items}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
