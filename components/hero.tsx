"use client";

import { buttonitems } from "@/utils/data";
import Button from "./button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const subscriberSchema = z.object({
  email: z.string().email().max(30),
});

const Hero = () => {
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
    <section className='text-white relative z-10 py-[60px] px-[64px] flex justify-between gap-x-[80px] items-center max-sm:flex-col max-sm:text-center'>
      <div className='max-w-[600px]'>
        <div className='flex flex-col gap-y-6 mb-10'>
          <motion.h2
            initial={{ y: 5, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
            }}
            className='text-[56px] font-[700]'
          >
            A <span className='text-[#c8500b]'>collection</span> of updated and
            breaking news just for you!
          </motion.h2>
          <motion.p
            initial={{ y: 5, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
            }}
            className='text-[18px]'
          >
            Get news headlines from around the world
          </motion.p>
        </div>

        <motion.form
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
          }}
          className='flex items-center gap-x-4 mb-4 max-sm:flex-col max-sm:gap-y-4'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("email")}
            maxLength={30}
            className='w-2/3 p-3 max-sm:w-full focus:outline-none bg-[#e5e7eb] text-black rounded-md'
            placeholder='Enter your email'
          />
          <Button
            {...buttonitems}
            type='submit'
            submit={handleSubmit(onSubmit)}
          />
        </motion.form>
        <motion.p
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.9,
          }}
          className='text-[12px]'
        >
          By clicking Sign Up you're confirming that you agree with our Terms
          and Conditions.
        </motion.p>
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 1,
          type: "tween",
          duration: 0.5,
        }}
        className='mt-8'
      >
        <Image
          src='/newspaper.png'
          width={641.2}
          height={641.1}
          alt='Hero'
          priority
        />
      </motion.div>
    </section>
  );
};

export default Hero;
