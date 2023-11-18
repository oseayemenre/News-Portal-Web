import Link from "next/link";
import React, { ReactNode } from "react";

type TProfileMenu = {
  title: string;
  Icon: React.ElementType;
  path: string;
};

const ProfileMenu = ({ title, Icon, path }: TProfileMenu) => {
  return (
    <Link href={path}>
      <div className='px-6 py-3 text-white flex gap-x-6 items-center'>
        <Icon size={24} />
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default ProfileMenu;
