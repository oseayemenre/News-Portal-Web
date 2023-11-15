"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type ButtonProps = {
  value: string;
  bgColor: string;
  textcolor?: "white" | string;
  border?: string;
  type?: "submit";
  submit?: () => void;
  push?: string;
  icon?: boolean;
};

const Button = ({
  value,
  bgColor,
  textcolor,
  border,
  push,
  type,
  submit,
}: ButtonProps) => {
  const router = useRouter();

  console.log(bgColor);

  return (
    <div>
      <motion.button
        onClick={push ? () => router.push("/login") : submit}
        type={type}
        whileTap={{ scale: 0.8 }}
        className={`px-6 py-[10px] bg-[${bgColor}] border-[2px] w-full border-solid ${
          border ? `border-[${border}]` : "border-transparent"
        } rounded-[4rem] text-${textcolor} focus:outline-none text-[14px] font-bold`}
      >
        {value}
      </motion.button>
    </div>
  );
};

export default Button;
