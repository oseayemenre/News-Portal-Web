import Link from "next/link";
import React from "react";

type TDashboardTitle = {
  title: string;
  sub1?: string;
  sub2: string;
};

const DashboardTitle = ({ title, sub1, sub2 }: TDashboardTitle) => {
  return (
    <div>
      <div className='flex justify-between py-4 px-6 items-center'>
        <h2 className='text-[20px] font-[700] tracking-[0.04rem] text-zinc-700'>
          {title}
        </h2>
        <div className='flex gap-x-3 text-[14px]'>
          <Link href='/profile/#' className='text-[#337AB7]'>
            {sub1}
          </Link>
          <p>{sub1 ? "/" : ""}</p>
          <Link href='/profile/#' className='text-[#337AB7]'>
            {sub2}
          </Link>
          <p>/</p>
          <p>{title}</p>
        </div>
      </div>
      <div className='w-full h-[1px] bg-slate-100 mb-4' />
    </div>
  );
};

export default DashboardTitle;
