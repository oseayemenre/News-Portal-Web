"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Logo_image from "@/components/logo_image";

type TLogo = {
  textColor?: string;
};

const inter = Inter({ subsets: ["latin"] });

const Logo = ({ textColor }: TLogo) => {
  const router = useRouter();

  return (
    <div
      className='flex gap-4 cursor-pointer items-center text-[20px] font-[700] max-sm:text-[18px]'
      onClick={() => router.push("/")}
    >
      <Logo_image />
      <p className={textColor ? `text-[${textColor}]` : `text-slate-200`}>
        News <span className='text-[#c8500b]'>Portal</span>
      </p>
    </div>
  );
};

export default Logo;
