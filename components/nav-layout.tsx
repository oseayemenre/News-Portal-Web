"use client";

import React, { useState } from "react";
import Logo from "./logo";
import { navitems, buttonitems } from "@/utils/data";
import Button from "./button";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Mobilenav from "./mobilenav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLayout = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className={`w-full px-[64px] py-6 flex justify-between items-center bg-[#050c1c] text-white duration-150 max-sm:px-[24px] max-sm:py-[20px] z-50`}
    >
      <Logo />
      <div className='flex gap-x-16 max-sm:hidden'>
        {navitems.map((items, i) => (
          <Link
            key={i}
            href={items.link}
            className={
              pathname === items.link ? "text-[#c8500b]" : "text-white"
            }
          >
            {items.label}
            {pathname === items.link ? (
              <div className='border-b-[1px] border-solid border-[#c8500b] relative top-2' />
            ) : (
              ""
            )}
          </Link>
        ))}

        <div
          className='flex gap-x-2 cursor-pointer items-center'
          onClick={() => setDropDown(!dropDown)}
        >
          <p>More</p>
          <IoIosArrowDown
            size={12}
            className={`duration-150 ease ${
              dropDown ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.8 }}
        className='md:hidden focus:outline-none'
        onClick={() => setShowMobile(!showMobile)}
      >
        {showMobile ? (
          <AiOutlineClose size={24} color='white' />
        ) : (
          <AiOutlineMenu size={24} color='white' />
        )}
      </motion.button>

      {showMobile && <Mobilenav />}

      <div className='flex gap-x-4 max-sm:hidden items-center'>
        {buttonitems.map((items, i) => (
          <Button key={i} {...items} />
        ))}
      </div>
    </nav>
  );
};

export default NavLayout;
