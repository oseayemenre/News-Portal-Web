"use client";

import React from "react";
import Button from "./button";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { buttonitems } from "@/utils/data";

const subscriberSchema = z.object({
  email: z.string().email().max(30),
});

const CTA = () => {
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
    <section className=' w-full px-[64px] text-white relative z-10'>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className='bg-[#050c1c] flex justify-between items-center py-[112px] px-6 max-sm:flex-col max-sm:items-center max-sm:text-center'
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.5,
          }}
          className='flex flex-1 flex-col items-start gap-y-6 max-sm:gap-y-2 max-sm:mb-10'
        >
          <h2 className='text-[40px] font-[700]'>Sign up for our newsletter</h2>
          <p className='text-[18px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.5,
          }}
        >
          <div className='flex gap-x-4 mb-4 items-center max-sm:flex-col max-sm:gap-y-4'>
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
