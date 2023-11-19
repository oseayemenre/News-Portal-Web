"use client";

import React, { useState } from "react";
import Logo from "./logo";
import { dashboard_items } from "@/utils/data";
import ProfileMenu from "./profile-menu";

const Sidebar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className='w-[25%] bg-[#36404e] h-screen'>
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
              <div className={active === index ? "text-white" : ""} key={index}>
                <ProfileMenu
                  title={items.title}
                  Icon={items.icon}
                  path={items.path}
                  showArrow={items.showArrow}
                  dropdown={items.dropdown}
                  handleActive={() => setActive(index)}
                  active={active}
                  index={index}
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
