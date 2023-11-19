"use client";

import React from "react";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import DashboardCard from "@/components/dasboard-card";
import { dashboard_card } from "@/utils/data";

const Profile = () => {
  return (
    <main className='w-full'>
      <div className='flex justify-between bg-zinc-100 py-4 px-6 items-center'>
        <IoMdMenu size={24} className='cursor-pointer' />
        <Image src='/profile-icon.jpg' width={36} height={36} alt='' />
      </div>

      <div className='flex justify-between py-5 px-6 items-center'>
        <h2 className='text-[20px] font-[700] tracking-[0.04rem] text-zinc-700'>
          Dashboard
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
          <p>Dashboard</p>
        </div>
      </div>
      <div className='w-full h-[1px] bg-slate-100 mb-4' />
      <div className='px-6 flex justify-between gap-x-4'>
        {dashboard_card.slice(0, 3).map((items, index) => (
          <DashboardCard
            key={index}
            label={items.label}
            count={items.count}
            Icon={items.icon}
            route={items.route}
          />
        ))}
      </div>
      <div className='mt-4 w-[35.7%] px-6'>
        <DashboardCard
          label={dashboard_card[3].label}
          count={dashboard_card[3].count}
          Icon={dashboard_card[3].icon}
          route={dashboard_card[3].route}
        />
      </div>
    </main>
  );
};

export default Profile;
