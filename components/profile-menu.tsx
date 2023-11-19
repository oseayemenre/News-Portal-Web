"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type TProfileMenu = {
  title: string;
  Icon: React.ElementType;
  path: string;
  showArrow?: boolean;
};

const ProfileMenu = ({ title, Icon, path, showArrow }: TProfileMenu) => {
  const pathname = usePathname();
  const [rotateArrow, setRotateArrow] = useState(true);

  return (
    <motion.div
      whileTap={{ backgroundColor: "#788698" }}
      onClick={() => setRotateArrow(!rotateArrow)}
    >
      <Link href={path}>
        <div className='flex justify-between px-6 py-3 items-center '>
          <div className='flex gap-x-6 items-center'>
            <Icon size={18} />
            <p>{title}</p>
          </div>
          {showArrow && (
            <IoIosArrowForward
              size={14}
              className={`ease duration-150 ${
                pathname === path && rotateArrow
                  ? "rotate-90"
                  : !rotateArrow
                  ? "rotate-0"
                  : ""
              }`}
            />
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProfileMenu;
