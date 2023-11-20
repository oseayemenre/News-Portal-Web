"use client";

import React from "react";
import DashboardCard from "@/components/dasboard-card";
import { dashboard_card } from "@/utils/data";
import DashboardTitle from "@/components/dashboard-title";

const Profile = () => {
  return (
    <main className='w-full'>
      <DashboardTitle title='Dashboard' sub1='NewsPortal' sub2='Admin' />
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
