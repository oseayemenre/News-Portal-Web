import React from "react";
import { motion } from "framer-motion";
import { navitems, buttonitems } from "@/utils/data";
import Button from "./button";
import Link from "next/link";

const Mobilenav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
      }}
      className='absolute top-[70px] right-4 flex flex-col items-end gap-y-4 bg-black bg-opacity-70 text-white shadow-lg px-12 py-4 z-50'
    >
      {navitems.map((items, i) => (
        <Link key={i} href={items.link} className='cursor-pointer'>
          {items.label}
        </Link>
      ))}

      <div className='flex flex-col gap-y-3 items-end'>
        {buttonitems.map((items, i) => (
          <Button key={i} {...items} />
        ))}
      </div>
    </motion.div>
  );
};

export default Mobilenav;
