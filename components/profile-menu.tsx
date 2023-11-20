"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";

type TProfileMenu = {
  title: string;
  Icon: React.ElementType;
  path?: string;
  showArrow?: boolean;
  dropdown?: Record<string, string>[];
  handleActive: () => void;
  active: number;
  index: number;
};

const ProfileMenu = ({
  title,
  Icon,
  path,
  showArrow,
  dropdown,
  handleActive,
  active,
  index,
}: TProfileMenu) => {
  const [rotateArrow, setRotateArrow] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      router.push(path);
      handleActive();
    } else {
      setRotateArrow(!rotateArrow);
      handleActive();
    }
  };

  return (
    <div>
      <motion.div
        whileTap={{ backgroundColor: "#788698" }}
        onClick={handleClick}
        className='focus:outline-none hover:text-white cursor-pointer text-[14px]'
      >
        <div
          className={`flex justify-between px-6 py-3 items-center ${
            active === index ? "bg-[#313A46]" : ""
          }`}
        >
          <div className='flex gap-x-6 items-center'>
            <Icon size={18} />
            <p>{title}</p>
          </div>
          {showArrow && (
            <IoIosArrowForward
              size={14}
              className={`ease duration-150 ${
                rotateArrow ? "rotate-90" : "rotate-0"
              }`}
            />
          )}
        </div>
      </motion.div>

      <div
        className={`mx-16 flex flex-col gap-y-3 text-[14px] duration-300 ease ${
          rotateArrow ? "mt-3" : "mt-0"
        }`}
      >
        {rotateArrow &&
          dropdown?.map((items, i) => (
            <Link
              href={items.link}
              key={i}
              className='hover:text-white cursor-pointer text-slate-300'
            >
              {items.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProfileMenu;
