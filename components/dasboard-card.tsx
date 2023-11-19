"use client";

import { useRouter } from "next/navigation";

type TDashboardCard = {
  label: string;
  count: number;
  Icon: React.ElementType;
  route: string;
};

const DashboardCard = ({ label, count, Icon, route }: TDashboardCard) => {
  const router = useRouter();

  return (
    <div
      className='flex justify-between w-full border-zinc-100 border-[2px] py-1 px-5 items-center rounded-md cursor-pointer text-[#337AB7] hover:text-[#152a3d]'
      onClick={() => router.push(route)}
    >
      <div>
        <p className=' font-bold tracking-[0.04rem] text-[13px] mb-2'>
          {label}
        </p>
        <p className='text-[30px] text-zinc-800 font-[700]'>{count}</p>
      </div>
      <Icon size={76} className='text-zinc-100 mt-8' />
    </div>
  );
};

export default DashboardCard;
