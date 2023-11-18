"use client";

import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

type TProfileMenu = {
  title: string;
  Icon: React.ElementType;
  path: string;
  showArrow?: boolean;
};

const ProfileMenu = ({ title, Icon, path, showArrow }: TProfileMenu) => {
  return (
    <motion.div whileTap={{ backgroundColor: "#788698" }}>
      <Link href={path}>
        <div className='flex justify-between px-6 py-3 items-center '>
          <div className='flex gap-x-6 items-center'>
            <Icon size={18} />
            <p>{title}</p>
          </div>
          {showArrow && (
            <IoIosArrowForward size={14} className='flex justify-end' />
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProfileMenu;
