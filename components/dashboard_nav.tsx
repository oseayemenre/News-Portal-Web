import Image from "next/image";
import React from "react";
import { IoMdMenu } from "react-icons/io";

const DashboardNav = () => {
  return (
    <div className='flex justify-between bg-zinc-100 py-4 px-6 items-center'>
      <IoMdMenu size={24} className='cursor-pointer' />
      <Image src='/profile-icon.jpg' width={36} height={36} alt='' />
    </div>
  );
};

export default DashboardNav;
