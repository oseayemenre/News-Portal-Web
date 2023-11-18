"use client";

import React, { useEffect } from "react";
import Logo from "./logo";
import { useState } from "react";
import { dashboard_items } from "@/utils/data";
import ProfileMenu from "./profile-menu";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [tapState, setTapState] = useState(false);

  return (
    <div className='w-[20%] bg-[#36404e] h-screen'>
      <div className='flex justify-center mb-2 py-6'>
        <Logo />
      </div>
      <div className='text-slate-300'>
        <div className='px-6'>
          <p className='text-[12px] mb-3'>NAVIGATION</p>
        </div>

        <div className='flex flex-col gap-y-1'>
          {dashboard_items.map((items, index) => {
            return (
              <div
                className={
                  pathname === items.path
                    ? "bg-[#313A46] text-white"
                    : "hover:text-white"
                }
                key={index}
              >
                <ProfileMenu
                  title={items.title}
                  Icon={items.icon}
                  path={items.path}
                  showArrow={items.showArrow}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
