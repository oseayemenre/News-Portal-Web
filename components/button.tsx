"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type ButtonProps = {
  value?: string;
  bgcolor?: string;
  textcolor?: "white" | string;
  border?: string;
  type?: "submit";
  submit?: () => void;
  push?: string;
  icon?: boolean;
};

const Button = ({
  value,
  bgcolor,
  textcolor,
  border,
  push,
  type,
  submit,
}: ButtonProps) => {
  const router = useRouter();

  return (
    <div>
      <motion.button
        onClick={push ? () => router.push("/auth") : submit}
        type={type}
        whileTap={{ scale: 0.8 }}
        className={`px-6 py-2 bg-[${bgcolor}] border-[2px] w-full border-solid ${
          border ? `border-[${border}]` : "border-transparent"
        } rounded-md text-${textcolor} focus:outline-none`}
      >
        {value}
      </motion.button>
    </div>
  );
};

export default Button;
