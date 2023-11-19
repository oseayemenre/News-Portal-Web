import Link from "next/link";
import React from "react";

const DashboardTitle = ({ title }: { title: string }) => {
  return (
    <div className='flex justify-between py-4 px-6 items-center'>
      <h2 className='text-[20px] font-[700] tracking-[0.04rem] text-zinc-700'>
        {title}
      </h2>
      <div className='flex gap-x-3 text-[14px]'>
        <Link href='/profile/#' className='text-[#337AB7]'>
          NewsPortal
        </Link>
        <p>/</p>
        <Link href='/profile/#' className='text-[#337AB7]'>
          Admin
        </Link>
        <p>/</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default DashboardTitle;
