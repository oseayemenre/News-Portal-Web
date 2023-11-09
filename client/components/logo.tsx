import React from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Logo_image from "@/components/logo_image";

const inter = Inter({ subsets: ["latin"] });

const Logo = () => {
  const router = useRouter();

  return (
    <div
      className='flex gap-4 cursor-pointer items-center text-[25px] font-[700] max-sm:text-[18px]'
      onClick={() => router.push("/")}
    >
      <Logo_image />
      <p className='text-slate-200'>News Portal</p>
    </div>
  );
};

export default Logo;
